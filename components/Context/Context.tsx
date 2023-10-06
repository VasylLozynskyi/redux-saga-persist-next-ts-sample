import { dataHeader, dataFooter, TDataHeader, TDataFooter} from "@/utills/dataSite/data";
import { createContext } from "react";


const dataHeaderContext = createContext<TDataHeader>(dataHeader);
const dataFooterContext = createContext<TDataFooter>(dataFooter);

 export const DataSiteContext= {dataHeaderContext, dataFooterContext};

