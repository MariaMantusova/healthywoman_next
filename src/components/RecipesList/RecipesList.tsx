"use client";

import { RecipeCard } from "../RecipeCard/RecipeCard";
import { List } from "antd";
import { IPropsRecipes } from "../../interfaces/interfacesForProps";

const RecipesList = (props: IPropsRecipes) => {
  return (
    <List
      style={{paddingBottom: "60px"}}
      pagination={{
        pageSize: 4,
        align: "center"
      }}
      dataSource={props.recipes}
      renderItem={(item, index) => (
        <RecipeCard key={index} recipe={item}/>
      )}
    />
  )
}

export {RecipesList}
