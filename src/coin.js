import React from 'react'
import './coin.css'

export const coin = ({ name, image, symbol, price, volume, priceChange, marketcap }) => {
    return (
        <div className="coin-container">
            <div className="coin-row">
                <div className="coin">
                    <img src={image} alt="crypto" />
                    <h1 className="name">{name}</h1>
                    <p className="coin-symbol">{symbol}</p>
                </div>
                <div className="coin-data">
                    <p className="coin-price">PLN {price}</p>
                    <p className="coin-volume">PLN {volume.toLocaleString()}</p>
                    {priceChange < 0 ? (
                        <p className="coint-percent red">{priceChange.toFixed(2)}%</p>
                    ) : <p className="coint-percent green">{priceChange.toFixed(2)}%</p>}
                    <p className="coin-marketcap">
                        Mkt Cap: PLN {marketcap.toLocaleString()}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default coin
