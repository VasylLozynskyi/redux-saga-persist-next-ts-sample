import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";

import { NextRouter, useRouter } from "next/router";
import { AppDispatch, RootState } from "@/redux/store";
import { ReactElement, useEffect } from "react";
import { getPostById } from "@/redux/actions/postsActions";
import { IDataPostResult } from "@/types/types";
import ErrorPage from "../404";
import Link from "next/link";

export default function Post(): ReactElement {
  const router: NextRouter = useRouter();
  const dispatch = useDispatch<AppDispatch>();
 
  useEffect(() => {
    if (typeof router?.query.slug == "string") {
      dispatch(getPostById(router?.query.slug));
    }
  }, [router]);

  const { userId, id, title, body }: IDataPostResult = useSelector(
    (state: RootState) => state.posts.isOpenPost
  );

  return (
    <>
      {
        id ? (
          <>
            <Head>
              <title>post page</title>
            </Head>
            <div>
              <Link href={"/about"}>--Back</Link>
              <h3>{title}</h3>
              <br />
              <p>{body}</p>
            </div>
          </>
        ) : <ErrorPage />
      }
    </>
  );
}
