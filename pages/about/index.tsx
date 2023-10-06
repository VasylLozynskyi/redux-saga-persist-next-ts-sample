import Link from "next/link";
import { useEffect, useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPostsAction } from "@/redux/actions/postsActions";

import { ErrorBlock } from "@/components/Error/Error";
import { IDataPostResult } from "@/types/types";
import { AppDispatch, RootState } from "@/redux/store";


export default function AboutUs() {
  const [isDataPostsLoading, setIsDataPostsLoading] = useState<boolean>(true)
  const [isDataPostsError, setIsDataPostsError] = useState<boolean>(false)
  const posts: [IDataPostResult] = useSelector(
    (state: RootState) => state?.posts?.allPosts
  );
  const dispatch = useDispatch<AppDispatch>();
  useLayoutEffect(() => {
    if (!posts?.length) dispatch(getPostsAction());
  }, []);

  useEffect(() => {
    if (posts?.length) {
      setIsDataPostsLoading(!isDataPostsLoading)
      setIsDataPostsError(false)
    }
    setTimeout(() => {     
      if (!posts?.length) setIsDataPostsError(true)
    }, 3000);
  }, [posts])
  return (
    <>
      <h1>About Us Page</h1>
      <br />
      <Link href={"/"}>Home</Link>
      <br />
      <ul>
        {posts?.length ? (
        posts.map(({ id, title }, index) => (
          <li key={index}>
            <Link href={`/about/${id}`}>{title}</Link>
          </li>
        ))): (
          isDataPostsLoading && !isDataPostsError ? <div>Loading.....</div> :
          <ErrorBlock message="we get in trabble with data posts" status={404} />
        )}
      </ul>
      {/* {posts.length ? (
        posts.map((el, index) => <div key={index}>{el.title}</div>)
      ) : (
        isDataPostsLoading && !isDataPostsError ? <div>Loading.....</div> :
        <ErrorBlock message="we get in trabble with data posts" status={404} />
      )} */}
    </>
  );
}
