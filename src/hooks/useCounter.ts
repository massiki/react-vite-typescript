import { useState } from "react"

export const useCounter = () => {
  const [number, setNumber] = useState<number>(0)

  const increment = () => {
    setNumber(number + 1)
  }

  const decrement = () => {
    setNumber(number - 1)
  }

  return {
    number, increment, decrement
  }
}