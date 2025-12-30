import { useCounter } from "../hooks/useCounter"

const Counter = () => {
  const { number, increment, decrement } = useCounter()

  return (
    <div className="counter">
      <button className="btn-increment" onClick={increment}>+</button>
      <p className="number">{number}</p>
      <button className="btn-decrement" onClick={decrement}>-</button>
    </div>
  )
}

export default Counter