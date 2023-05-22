import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getNameCountry } from "../../redux/actions";
import styles from './SearchBar.module.css';


const SearchBar = () => {
  const dispatch = useDispatch();
  const [name, setname] = useState("");
  function handelrInputChange(e) {
    e.preventDefault();
    setname(e.target.value);
  }

  function handlerSubmit(e) {
    e.preventDefault();
    dispatch(getNameCountry(name));
  }
  return (
    <div className= {styles.search_container}>
      <input
        type="text"
        placeholder="Buscar"
        onChange={(e) => handelrInputChange(e)}
      />
      <button type="submit" onClick={(e) => handlerSubmit(e)}>Buscar</button>
    </div>
  )
}

export default SearchBar;