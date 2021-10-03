import React, { useState } from 'react';


export default function Products({ setFav, fav }) {
  console.log('fav',fav);
  
  const [products] = useState([
    {
      name: 'AA Battery',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ5-QAul_NfAs-s0XW9M087xWyPOGWvbfYjmqSl0QXabZRSYoid47i7kISiAteyIh0YOci5mtQ&usqp=CAc',
    },
    {
      name: 'Blanket',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSpwdYDmUL_ZEqhLV7ZWRdQAU7DGcGaxtCt7SrTlL9umrQs2Un7rj9Nbb9Vq01RtEfA0eAVmdt-&usqp=CAc',
    },
  ]);
// ---------------- add to favorite function ------------------------
  const addToFav = (product) => {
    let newFav = [...fav];
    let itemInFav = newFav.find(
      (item) => product.name === item.name
    );
    if (itemInFav) {
      itemInFav.quantity++;
    } else {
      itemInFav = {
        ...product,
        quantity: 1,
      };
      newFav.push(itemInFav);
    }
    console.log(newFav);
    setFav(newFav);
  };


  return (
    <>
      <h1>Products</h1>
     
      <div className="products">
        {products.map((item, idx) => (
          <div className="product" key={idx}>
            <h3>{item.name}</h3>
            <h4>${item.cost}</h4>
            <img src={item.image} alt={item.name} style={{width:'150px', height:'150px'}}/>
            <button onClick={() => addToFav(item)}>
              Add to Fav
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
