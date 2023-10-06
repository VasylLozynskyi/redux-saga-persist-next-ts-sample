import { useContext } from "react";
import { DataSiteContext } from "../Context/Context";
import { TDataHeader } from "@/utills/dataSite/data";
import { ErrorBlock} from "../Error/Error";


export const Header = () => {
  const dataHeader: TDataHeader = useContext(DataSiteContext.dataHeaderContext);
  if (!dataHeader) { 
    return (
       <ErrorBlock message={"problem with data header"}  />
      )
    }
  
  return (
        <header id="header">
          <h1>{dataHeader.title}</h1>
        </header>
    
  );
};
