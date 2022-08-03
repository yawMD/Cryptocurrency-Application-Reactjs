import React from 'react';
import './crypto.css'

const Crypto = (props) =>{
    return(
        <div>
<table>
  <tr>
  <td><img src={props.image} width="60px" alt=""/></td>
    <td><h4>{props.name}</h4></td>
    <td><p>{props.symbol}</p></td>
    <td><p>{props.marketcap}</p></td>
    <td><p>Rs. {props.price}</p></td>
  </tr>
</table>
        </div>
    )
}
export default Crypto;