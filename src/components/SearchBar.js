import styles from "./SearchBar.module.css";
import {listActions} from '../store/list'
import { useRef } from "react";
import { useDispatch } from 'react-redux';

const SearchBar = () => {

  const refSearch = useRef('')
  const dispatch = useDispatch();

  const addWordHandler = () => {
    dispatch(listActions.searchResult(refSearch.current.value));

  }
  
  return (
    <div>
      <nav className={styles.searchBarContainer}>
        <input
          className={styles.searchBar}
          type="search"
          placeholder="Pesquisar no blog"
          onKeyUp={addWordHandler}
          ref={refSearch}
        />
      </nav>
    </div>
  );
};

export default SearchBar;
