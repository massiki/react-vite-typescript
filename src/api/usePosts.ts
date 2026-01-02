import { useState } from "react"

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
      setIsLoading(true)
      const response = await fetch('http://localhost:3000/posts', {
        method: 'GET'
      })

      const data = await response.json()
      setPosts(data)
    } catch (error) {
      console.log((error as Error).message)
    } finally {
      setIsLoading(false)
    }
  }

  return { posts, getPosts, isLoading }
}