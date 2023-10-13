"use client";

import {useState} from "react";
import "./SearchInput.css";
import { IPropsSearchInput } from "../../interfaces/interfacesForProps";

const SearchInput = (props: IPropsSearchInput) => {
  const [value, setValue] = useState("");

  function handleChange(evt) {
    setValue(evt.target.value);
  }

  return (
    <form className="form">
      <input className="search-input" onChange={handleChange} placeholder={props.placeholder}
             type={props.type} value={value} />
      <button className="form__button">Search</button>
    </form>
  );
};

export {SearchInput}
