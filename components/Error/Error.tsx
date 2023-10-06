import { FC } from "react"

type TMessage = {
  message: string,
  status?: number
}

export const ErrorBlock: FC<TMessage> = ({ message, status = "" } ) => {
  return (
    <>
    <h3>{message}</h3>
    <h3>{`status: ${status}`}</h3>
    </>
  )
}