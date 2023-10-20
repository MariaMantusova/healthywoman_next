import "./SearchInput.css";
import { IPropsSearchInput } from "../../interfaces/interfacesForProps";
import { Event } from "next/dist/compiled/@edge-runtime/primitives";

const SearchInput = (props: IPropsSearchInput) => {
  function handleChange(evt: any) {
    props.setValue(evt.target.value);
  }

  function handleSubmit(evt: any) {
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
