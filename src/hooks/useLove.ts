import { useState } from "react"

export const useLove = () => {
  const [isActiveLove, setIsActiveLove] = useState<boolean>(false)
  const handleToggleLove = () => {
    setIsActiveLove(!isActiveLove)
  }

  return {
    isActiveLove,
    handleToggleLove
  }
}