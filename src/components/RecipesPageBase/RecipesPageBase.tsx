import { Preloader } from "../Preloader/Preloader";
import { MessageBlock } from "../MessageBlock/MessageBlock";
import { Recipes } from "../Recipes/Recipes";
import "./RecipesPageBase.css";
import { IPropsRecipesPageBase } from "../../interfaces/interfacesForProps";

const RecipesPageBase = (props: IPropsRecipesPageBase) => {
  return (
    <section className="recipes">
      <h1 className="recipes__title">Enter {props.titleName} and we will find recipes</h1>
      {props.children}
      {props.isLoading ?
        <Preloader /> :
        props.error === "Not found" ?
          <MessageBlock text="We could not find recipes according to your request"
                        class="message-block__text_error" /> :
          props.error === "Validation failed" ?
            <MessageBlock text="Your request is wrong, try to write 4 or more letters"
                          class="message-block__text_error" /> :
            props.error ?
              <MessageBlock text={props.error}
                            class="message-block__text_error" /> :
              props.recipes.length < 1 ?
                <MessageBlock text="Let's start" class="message-block__text_info" /> :
                <Recipes recipes={props.recipes} />}
    </section>
  );
}

export {RecipesPageBase}
