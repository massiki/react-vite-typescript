import { useState } from "react"
import { axiosIntance } from "../lib/axios";

type PostType = {
  id: string;
  title: string;
  views: number;
}

export const usePosts = () => {
  const [posts, setPosts] = useState<PostType[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const getPosts = async () => {
    try {
      // use fetch native
      // setIsLoading(true)
      // const response = await fetch('http://localhost:3000/posts', {
      //   method: 'GET'
      // })
      // const data = await response.json()
      // setPosts(data)

      setIsLoading(true)
      const response = await axiosIntance.get<PostType[]>('/posts')
      setPosts(response.data)
    } catch (error) {
      console.log((error as Error).message)
    } finally {
      setIsLoading(false)
    }
  }

  return { posts, getPosts, isLoading }
}