"use client";
import { MessageBlock } from "../../../components/MessageBlock/MessageBlock";

export default function Error({ error }: { error: Error }) {
  return (
    <MessageBlock text={error.message || "Ooops... error has happened"} class="message-block__text_error message-block__page"/>
  )
}
