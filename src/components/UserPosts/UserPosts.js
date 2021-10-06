import styles from './UserPosts.module.css';
import {useCallback, useEffect, useState} from "react";
import UserPostBody from "../UserPostBody/UserPostBody";

const UserPosts = ({username, postsRoute}) => {
  const [userPosts, setUserPosts] = useState([]);

  const retrieveUserPosts =  useCallback(async () => {
    const response = await fetch(postsRoute);
    const data = response.ok ? await response.json() : {};
    console.log(data);
    setUserPosts(data);
  }, [postsRoute, setUserPosts]);

  useEffect(() => {
    retrieveUserPosts()
  }, [retrieveUserPosts]);

  const userPostsHeaderSection = () => {
    return (<section className={styles.userPosts__header__composite}>
      <div className={styles.userPosts__header__container}>
        <h1>Posts by {username}</h1>
      </div>
    </section>);
  };

  const renderUserPostsEmpty = () => {
    return (
      <section className={styles.noUserPostFound}>
        <div>
          <p>No user details found</p>
        </div>
      </section>
    );
  };

  const renderUserPosts = () => {
    return <UserPostBody userPosts={userPosts}/>
  }

  if(!userPosts?.length)
    return (
      <>
        {userPostsHeaderSection()}
        {renderUserPostsEmpty()}
      </>
    );

  return (
    <>
      {userPostsHeaderSection()}
      {renderUserPosts()}
    </>
  );
};

export default UserPosts;
