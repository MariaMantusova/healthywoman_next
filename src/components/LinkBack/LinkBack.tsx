"use client";

import { useRouter } from 'next/navigation';
import "./LinkBack.css";

const LinkBack = () => {
  const router = useRouter();

  return(
    <button type="button" className="link-back" onClick={() => router.back()}>&#10229; go back</button>
  )
}

export {LinkBack}
