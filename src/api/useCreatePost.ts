import { useState } from "react"
import { axiosIntance } from "../lib/axios";

type PostType = {
  id: string;
  title: string;
  views: number;
}

export const useCreatePost = () => {
  const [inputTitle, setInputTitle] = useState<string>('')
  const [createIsLoading, setCreateIsLoading] = useState<boolean>(false)

  const createPost = async () => {
    try {
      setCreateIsLoading(true)
      await axiosIntance.post<PostType>('/posts', {
        title: inputTitle,
        views: 0
      })
      setInputTitle('')
    } catch (error) {
      console.log((error as Error).message)
    } finally {
      setCreateIsLoading(false)
    }
  }

  return { inputTitle, createIsLoading, setInputTitle, createPost }
}