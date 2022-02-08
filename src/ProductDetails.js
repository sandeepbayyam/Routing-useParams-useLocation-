import React from 'react';
import {useParams,useLocation} from 'react-router-dom'
const ProductDetails = (props) => {
  var x = useParams();
  var y = useLocation();
  return (
    <div className="betterview">
      <img src={y.state.pic} alt='mobile' height='200px' width='200px'/>
      <h1>Name:{x.name}</h1>
      <h2>Price:{y.state.price}</h2>
      <h2>Battery:{y.state.battery}</h2>
      <h2>Color:{y.state.color}</h2>
      <hr/>
      <button onClick={()=>{history.back()}}>Back</button>
    </div>
    
  );
};
export default ProductDetails;
