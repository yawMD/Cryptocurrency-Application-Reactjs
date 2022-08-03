import React,{useState,useEffect} from 'react';
import Crypto from './components/Crypto';
import './App.css';
import axios from 'axios'

function App() {
  const [coins,setCoins] = useState([])

  useEffect(() =>{
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then((res)=>{
      setCoins(res.data)
      console.log(res.data)
    }).catch(error=>console.log(error))
  }, [])

  const [search,setSearch] = useState('')
    const filteredCoins = coins.filter(coin=>
        coin.name.toLowerCase().includes(search.toLowerCase())
        )


        const handleChange = e =>{
          setSearch(e.target.value)
        }



  return (
    <>
    <div id="CryptoHeader">
    <div className="CryptoHeader">
    <h3>CryptoCoins.com</h3>
    <form action="">
    <input type="text" id="searchCrypto" className="coin-input" placeholder="Provide the coin name" onChange={handleChange}/>

  </form>
    <ul>
    <li><a href="https://www.blockchain.com/explorer">USD</a></li>
    <li><a href="https://www.blockchain.com/explorer">Indian Rupees</a></li>
    <li><a href="https://www.blockchain.com/explorer">Pounds</a></li>
    </ul>
    </div>
    </div>
    <table>
    <tr>
      <th>Coin</th>
      <th>Name</th>
      <th>symbol</th>
      <th>marketcap</th>
      <th>price</th>
    </tr>
    </table>
    {filteredCoins.map(coin=>{
      return(
        <Crypto 
        key={coin.id} 
        name={coin.name} 
        image={coin.image} 
        symbol={coin.symbol}
        marketcap={coin.market_cap}
        price={coin.current_price}
        pricechange={coin.price_change_percentage_24h}
//           volume={coin.total_volume}
        />
      );
    })}
    </>
  );
}

export default App;
