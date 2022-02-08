import React from 'react';
import { Link } from 'react-router-dom';
const ProductsList = (props) => {
  const products = [
    {
      name: 'Redmi Note10 Pro Max ',
      price: 22879,
      battery :5020,
      color :'Dark Nebula',
      pic : 'https://m.media-amazon.com/images/I/8186D4Mph7L._AC_SS450_.jpg'
    },
    {
      name: 'RealMe X ',
      price: 20999,
      battery :4310,
      color :'Space Silver',
      pic:'https://www.bgr.in/wp-content/uploads/2019/05/realme-x-.jpg'
    },
    {
      name: 'Vivo V21e ',
      price: 24990,
      battery :4000,
      color :'Dear pearl',
      pic:'https://www.91-img.com/pictures/145210-v5-vivo-v21e-5g-mobile-phone-large-7.jpg?tr=h-241,c-at_max,q-80'
    },
    {
      name: 'Oppo F19Pro 5G ',
      price: 25990,
      battery :4310,
      color :'Fluid Black',
      pic:'https://www.gizbot.com/images/2021-03/oppo-f19-pro_16159638507.jpg'
    },
    {
      name: 'POCO F1 ',
      price: 24990,
      battery :4000,
      color :'Graphite Black',
      pic:'https://m.media-amazon.com/images/I/61LghzBuGzL._SL1000_.jpg'
    },
    {
      name: 'Samsung Galaxy F62 ',
      price: 25990,
      battery :7000,
      color :'Laser Grey',
      pic:'https://www.gizmochina.com/wp-content/uploads/2021/02/f62-500x500.jpg'
    },
  ];
  return (
    <div className="betterview">
      <h3>Products</h3>
      {products.map((p, i) => {
        return (
         <div className='mobilesdiv'>
           <div className='betterview'>
         <Link to={`/productDetails/${p.name}`} state={p} key={i}> <img src={p.pic} alt='mobile' width='100px' height='100px'/></Link>
         <h3>{p.name}</h3>
           </div>
         </div>
        );
      })}
      <hr/>
       <button onClick={()=>{history.back()}}>Back</button>
    </div>
  );
};
export default ProductsList;
