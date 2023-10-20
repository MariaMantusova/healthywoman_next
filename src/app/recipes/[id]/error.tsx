"use client";
import { MessageBlock } from "../../../components/MessageBlock/MessageBlock";

export default function Error(error) {
  return (
    <MessageBlock text={error.message || "Ooops... error has happened"} class="message-block__text_error"/>
  )
}
