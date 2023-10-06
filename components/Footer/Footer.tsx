import { FC, ReactElement, useContext } from "react"
import { DataSiteContext } from "../Context/Context"
import { TDataFooter } from "@/utills/dataSite/data";
import { ErrorBlock} from "../Error/Error";


export const Footer = () => {
  const dataFooter: TDataFooter = useContext(DataSiteContext.dataFooterContext);
  if (!dataFooter) { 
    return (
       <ErrorBlock message={"problem with data footer"} />
      )
    }

  return (
    <>
    <h1>{dataFooter.title}</h1>
    </>
  )
}