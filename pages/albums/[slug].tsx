import Head from "next/head";
import { GetServerSideProps} from "next";
import { getAlbumById } from "../api/api";
import Link from "next/link";

export const getServerSideProps:GetServerSideProps = async (context) => {
  const { slug }: any = context.params;
 
  
  const data = getAlbumById(slug);
  if (!data) {
    return {
      notFound: true,
    }
  }
  return {
    props:  data ,
  }
};

export default function Album  ( data : any)  {
  return(
  <>
    <Head>
      <title>Contact page</title>
    </Head>
    <div>
      <Link href="/albums">--Back</Link>
      <h3>{data.title}</h3>
      <h5>userId =  {data.userId}</h5>
      <h6>id =  {data.id}</h6>
    </div>
  </>
  )
  };
