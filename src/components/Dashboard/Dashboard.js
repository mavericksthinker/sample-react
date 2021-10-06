import styles from "./Dashboard.module.css";
import Form from "../Form/Form";
import Users from "../Users/Users";
import {useCallback, useEffect, useState} from "react";

let users = [];

const Dashboard = ({usersRoute}) => {
  const [userList, setUserList] = useState(users);

  const setUserListToBeRendered = useCallback((userData) => {
    setUserList(userData)
  }, [setUserList]);

  const retrieveUserList =  useCallback(async () => {
    const response = await fetch(usersRoute);
    users = response.ok ? await response.json() : [];
    setUserListToBeRendered(users);
  }, [setUserListToBeRendered, usersRoute]);

  const searchUser = useCallback((search) => {
    return users.filter(user => {
      search = search.toLowerCase();
      const name = user.name.toLowerCase();
      const username = user.username.toLowerCase();
      const email = user.email.toLowerCase();
      return name.includes(search) || username.includes(search) || email.includes(search);
    });
  },[]);

  const sortByUserList = useCallback((userData, sortBy) => {
    return userData.sort((a, b) => {
      return a[sortBy].localeCompare(b[sortBy])
    });
  }, []);

  const onSubmit = useCallback(({search, sortBy}) => {
    let userList = users;
    if (search) userList = searchUser(search);
    if (sortBy) userList = sortByUserList(userList, sortBy);
    setUserListToBeRendered(userList);
  }, [searchUser, sortByUserList, setUserListToBeRendered]);

  useEffect(() => {
    retrieveUserList();
  }, [retrieveUserList]);

  return (
    <>
      <section className={styles.layoutComposite}>
        <div className={styles.layoutContainer}>
          <h1 className={styles.layoutHeader}>Users</h1>
          <Form submit={onSubmit}/>
        </div>
      </section>
      <section className={styles.userList__composite}>
        <Users userList={userList} />
      </section>
    </>
  );
};

export default Dashboard;
