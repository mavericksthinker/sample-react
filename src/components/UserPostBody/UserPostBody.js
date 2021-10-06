import styles from './UserPostBody.module.css';

const UserPostBody = ({userPosts}) => {
  return (
    <section className={styles.userPosts__body__composite}>
      <div className={styles.userPosts__body__container}>
        {userPosts.map(userPost => (<div key={userPost.id} className={styles.userPosts__body__content__container}>
          <h3 className={styles.userPosts__body__title}>{userPost.title}</h3>
          <h4 className={styles.userPosts__body__description}>{userPost.body}</h4>
        </div>))}
      </div>
    </section>
  )
};

export default UserPostBody;
