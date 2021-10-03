import React from 'react';

export default function Cart({ fav, setFav }) {
// ---------------- clear all fav page ----------- 
  const clearFav = () => {
    setFav([]);
  };


// ----------------- remove one favorite item -----------
  const removeFromFav = (bookToRemove) => {
    setFav(
      fav.filter((item) => item !== bookToRemove)
    );
  };

  return (
    <>
      <h1>Favorites</h1>
      {fav.length > 0 && (
        <button onClick={clearFav}>Clear Favorites</button>
      )}
      <div className="products">
        {fav.map((item, idx) => (
          <div className="product" key={idx}>
            <h3>{item.name}</h3>
      
            <img src={item.image} alt={item.name} style={{width:'150px', height:'150px'}}/>
            <button onClick={() => removeFromFav(item)}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
