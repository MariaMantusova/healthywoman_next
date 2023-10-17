import "./MessageBlock.css";
import { IPropsMessageBlock } from "../../interfaces/interfacesForProps";

const MessageBlock = (props: IPropsMessageBlock) => {
  return(
    <section className="message-block">
      <h2 className="message-block__text">{props.text}</h2>
    </section>
  )
}

export {MessageBlock}
