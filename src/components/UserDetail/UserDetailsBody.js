import styles from "./UserDetailsBody.module.css";

const UserDetailsBody = ({userDetails}) => {

  const emailLink = `mailto:${userDetails.email}`;
  const phone = userDetails?.phone?.split(' ')[0] || '';
  const website = userDetails?.website || '#';
  const suite = userDetails?.address?.suite || '';
  const street = `${userDetails?.address?.street},` || '';
  const city = `${userDetails?.address?.city},` || '';
  const zipcode = userDetails?.address?.zipcode || ''
  const address = `${suite} ${street} ${city} ${zipcode}`;

  return (<section className={styles.userDetails__body__composite}>
    <div className={styles.userDetails__body__container}>
      <div className={styles.userDetails__body__contactInfo__container}>
        <h3 className={styles.userDetails__body__contactInfo__label}>Contact Info</h3>
        <h4 className={styles.userDetails__body__contactInfo__username}>Username:
          <span>{userDetails.username}
              </span>
        </h4>
        <h4 className={styles.userDetails__body__contactInfo__email}>Email:
          <a className={styles.userDetails__body__userLink} href={emailLink}>{userDetails.email}
          </a>
        </h4>
        <h4 className={styles.userDetails__body__contactInfo__phone}>Phone:
          <span className={styles.userDetails__body__userLink}>{phone}
              </span>
        </h4>
        <h4 className={styles.userDetails__body__contactInfo__website}>Website:
          <a className={styles.userDetails__body__userLink} target="_blank" rel="noreferrer" href={website}>{website}
          </a>
        </h4>
      </div>
      <div className={styles.userDetails__body__address__container}>
        <h3 className={styles.userDetails__body__address__label}>Address</h3>
        <h4 className={styles.userDetails__body__address__username}>{address}</h4>
      </div>
      <div className={styles.userDetails__body__company__container}>
        <h3 className={styles.userDetails__body__company__label}>Company</h3>
        <h4 className={styles.userDetails__body__company__companyName}>Company Name</h4>
        <h4 className={styles.userDetails__body__company__bs}>company bs</h4>
        <h4 className={styles.userDetails__body__company__catchPhrase}>company catchphrase</h4>
      </div>
    </div>
  </section>);
};

export default UserDetailsBody;
