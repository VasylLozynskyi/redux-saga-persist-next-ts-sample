import { getAlbumsAction } from "@/redux/actions/alobumsActions";
import { AppDispatch, RootState } from "@/redux/store";
import { IDataAlbumResult } from "@/types/types";
import Link from "next/link";
import { useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Albums() {
  const albums: [IDataAlbumResult] = useSelector(
    (state: RootState) => state?.albums?.allAlbums
  );
  const dispatch = useDispatch<AppDispatch>();

  useLayoutEffect(() => {
    if (!albums.length) dispatch(getAlbumsAction());
  }, []);

  return (
    <>
      <h2>ALBUM PAGE</h2>
      <Link href={"/"}>Home</Link>
      <br />
      <br />
      {albums.map((el) => (
        <div key={el.id}><Link href={`/albums/${el.id}`}>{el.title}</Link></div>
      ))}
    </>
  );
}
