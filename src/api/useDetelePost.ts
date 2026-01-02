import { useState } from "react"
import { axiosIntance } from "../lib/axios";

type PostType = {
  id: string;
}

export const useDeletePost = () => {
  const [deleteIsLoading, setDeleteIsLoading] = useState<boolean>(false)

  const deletePost = async (postId: string) => {
    try {
      setDeleteIsLoading(true)
      await axiosIntance.delete<PostType>(`posts/${postId}`)
    } catch (error) {
      console.log((error as Error).message)
    } finally {
      setDeleteIsLoading(false)
    }
  }

  return { deletePost, deleteIsLoading }
}