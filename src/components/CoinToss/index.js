// Write your code here
import {useState} from 'react'
import './index.css'

const headsImage = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const tailsImage = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

const CoinToss = () => {
  const [total, setTotal] = useState(0)
  const [heads, setHeads] = useState(0)
  const [tails, setTails] = useState(0)
  const [imageUrl, setImageUrl] = useState(headsImage)

  const tossCoin = () => {
    const tossResult = Math.floor(Math.random() * 2)

    if (tossResult === 0) {
      setImageUrl(headsImage)
      setHeads(prevHeads => prevHeads + 1)
    } else {
      setImageUrl(tailsImage)
      setTails(prevTails => prevTails + 1)
    }

    setTotal(prevTotal => prevTotal + 1)
  }

  return (
    <div className="app-container">
      <div className="game-container">
        <h1 className="heading">Coin Toss Game</h1>
        <p className="description">Heads (or) Tails</p>

        <img src={imageUrl} alt="toss result" className="image" />

        <button type="button" className="toss-button" onClick={tossCoin}>
          Toss Coin
        </button>

        <div className="text-container">
          <p className="text">Total: {total}</p>
          <p className="text">Heads: {heads}</p>
          <p className="text">Tails: {tails}</p>
        </div>
      </div>
    </div>
  )
}

export default CoinToss
