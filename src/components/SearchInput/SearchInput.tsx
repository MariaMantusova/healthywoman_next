import "./SearchInput.css";
import { IPropsSearchInput } from "../../interfaces/interfacesForProps";

const SearchInput = (props: IPropsSearchInput) => {
  function handleChange(evt) {
    props.setValue(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();

    props.onSubmit();
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input className="search-input" onChange={handleChange} placeholder={props.placeholder}
             type={props.type} value={props.value} />
      <button className="form__button">Search</button>
    </form>
  );
};

export {SearchInput}
