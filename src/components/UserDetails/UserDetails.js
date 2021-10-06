import {Link, useParams} from "react-router-dom";
import styles from './UserDetails.module.css';
import {useCallback, useEffect, useState} from "react";
import UserDetailsBody from "../UserDetail/UserDetailsBody";
import UserPosts from "../UserPosts/UserPosts";

const UserDetails = ({usersRoute, postsRoute}) => {
  const {userId} = useParams();
  const [userDetails, setUserDetails] = useState({})

  const retrieveUserDetails =  useCallback(async () => {
    const response = await fetch(`${usersRoute}/${userId}`);
    const data = response.ok ? await response.json() : {};
    setUserDetails(data);
  }, [usersRoute, userId, setUserDetails]);

  useEffect(() => {
    retrieveUserDetails()
  }, [userId, retrieveUserDetails]);

  const userDetailsHeaderSection = () => {
    return (<section className={styles.userDetails__header__composite}>
      <div className={styles.userDetails__header__container}>
        <Link to='/users' className={styles.userDetails__header__userLink}>Users</Link>
        {/*Better to keep fontawesome icons*/}
        <span className={styles.userDetails__header__arrow}>{'>'}</span>
        <div className={styles.userDetails__header__username}> {userDetails?.name} </div>
      </div>
    </section>);
  };

  const userDetailsNotFound = () => {
    return (<section className={styles.userDetails__notfound__container}>
      <div>
        <p>No user details found</p>
      </div>
    </section>);
  }

  const userDetailsBodySection = () => {
    return <UserDetailsBody userDetails={userDetails}/>;
  };

  const userPostsSection = () => {
    return <UserPosts username={userDetails?.name} postsRoute={`${postsRoute}${userId}`}/>;
  }

  const userDetailsExists = !!Object.keys(userDetails).length;

  if(!userDetailsExists)
    return (
      <>
        {userDetailsHeaderSection()}
        {userDetailsNotFound()}
        {userPostsSection()}
      </>
    );

  return (
    <>
      {userDetailsHeaderSection()}
      {userDetailsBodySection()}
      {userPostsSection()}
    </>
  );
};

export default UserDetails;
