import styles from "../Form/Form.module.css";
import {useEffect, useState} from "react";

const sortByOptions = [
  {
    id: 'name',
    label: 'Name'
  },
  {
    id: 'username',
    label: 'User Name'
  },
  {
    id: 'email',
    label: 'Email'
  },
];

let timeoutInstance = null,
  initialRender = true;

const Form = ({submit}) => {
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState('');

  useEffect(() => {
    if(!initialRender) {
      submit({
        search,
        sortBy
      });
    }
    initialRender = false;
  }, [search, sortBy, submit]);

  const submitHandler = (e) => {
    e.preventDefault();
    submit({
      search,
      sortBy
    })
  };

  const debounce = (cb, timeout = 2000) => {
    clearTimeout(timeoutInstance);
    timeoutInstance = setTimeout(() => {
        cb();
    }, timeout);
  };

  const searchInputHandler = (e) => {
    const searchInput = e.target.value;
    debounce(() => {
      setSearch(searchInput);
    }, 600);
  }

  const sortBySelectHandler = (e) => {
    const selectedOption = e.target.value;
    debounce(() => {
      setSortBy(selectedOption);
    }, 200);
  };

  return (
    <form className={styles.formContainer} onSubmit={submitHandler}>
      <div className={styles.formSearch__container}>
        <label htmlFor='search'>Search</label>
        <input type="text" id="search" name="search" onInput={searchInputHandler}/>
      </div>
      <div className={styles.formSortBy__container}>
        <label htmlFor='sortBy'>Sort By</label>
        <select id="sortBy" name="sortBy" onChange={sortBySelectHandler}>
          <option value="" disabled>Sort By</option>
          {sortByOptions.map(sortByOption => (
            <option key={sortByOption.id} value={sortByOption.id}>{sortByOption.label}</option>
          ))}
        </select>
      </div>
    </form>
  );
};

export default Form;
