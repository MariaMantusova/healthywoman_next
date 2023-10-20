"use client";

import { Select } from 'antd';
import { IPropsSimpleSelect } from "../../interfaces/interfacesForProps";

const SimpleSelect = (props: IPropsSimpleSelect) => {

  function handleChange(value: string) {
    props.onSelect(value);
  }

  return (
    <Select
      showSearch
      onSelect={handleChange}
      placeholder={props.placeholder}
      style={{width: 300, marginTop: "50px", marginBottom: "50px"}}
      options={props.categoriesArray}
    />
  )
}

export {SimpleSelect}
