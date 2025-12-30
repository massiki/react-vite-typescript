import { useLove } from "../hooks/useLove"

const Love = () => {
  const { isActiveLove, handleToggleLove } = useLove()

  return (
    <div className="love">
      <button onClick={handleToggleLove} className="love-toggle">
        <span>{isActiveLove ? '❤️' : '🩶'}</span>
      </button>
    </div>
  )
}

export default Love