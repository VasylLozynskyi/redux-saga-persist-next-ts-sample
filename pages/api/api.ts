import { IDataAlbumResult, IDataPostResult} from "@/types/types";

export const getPosts = async (): Promise<Array<IDataPostResult>> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_PATH}posts`)
  return await res.json();
};

export const getAlbums = async (): Promise<Array<IDataAlbumResult>> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_PATH}albums`)
  return await res.json();
};

export const getAlbumById = async (id: string): Promise<Array<IDataAlbumResult>> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_PATH}albums/${id}`)
  return await res.json();
}

