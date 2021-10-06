import styles from "./Users.module.css";
import {useHistory, useLocation} from "react-router-dom";

const Users = ({userList} ) => {
  const history = useHistory();
  const location = useLocation();

  const navigateToUserDetails = (userId) => {
    history.replace(`${location.pathname}/${userId}`)
    // history.push();
  };

  const renderUserListEmpty = () => {
    return <p className={styles.noUserFound}>No users found</p>;
  }

  const renderUserList = () => {
    return (<div className={styles.userList__container}>
      <ul className={styles.userList__elements}>
        {userList.map(user => (
          <li key={user.id} className={styles.userList__element}>
            <div className={styles.userList__elementContainer}>
              <div className={styles.userList__elementContainer__detailsContainer}>
                <img src="https://thecruiseshiplawyers.com/wp-content/uploads/2020/01/userimage.png"
                     alt={user.name}
                />
                <div className={styles.userList__elementContainer__details}>
                  <div className={styles.userList__elementContainer__infoContainer}
                       onClick={() => navigateToUserDetails(user.id)}
                  >
                    <div className={styles.userList__elementContainer__infoContainer__name}>{user.name}</div>
                    <div className={styles.userList__elementContainer__infoContainer__username}>{user.username}</div>
                  </div>
                  <div className={styles.userList__elementContainer__additionalInfoContainer}>
                    <a href={`mailto:${user.email}`}>{user.email}</a>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>)
  };

  if(!userList.length)
    return renderUserListEmpty();

  return renderUserList();
};

export default Users;
