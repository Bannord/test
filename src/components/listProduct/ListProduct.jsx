import React, { useEffect, useState } from 'react';
import axios from "axios";


const ListProduct = () => {
    

      const [appState, setAppState] = useState();
      useEffect(() => {
        const apiUrl = 'https://651d4aca44e393af2d597ff1.mockapi.io/products';
        axios.get(apiUrl).then((resp) => setAppState(resp.data));
      }, [setAppState]);
    return ( 
        <>
        {appState?.map(el => 
        (   
            <div className="content_item" key={el.id}>
            <div className="img_wrapper">
              {console.log(el)}
              {console.log(el.img)}
              <div className="img_product">
                <img src={el.image} alt="#image" />
              </div>
            </div>
            <span className="text_item">
            {el.title.length > 30 ? `${el.title.slice(0, 45)}...` : el.title}
            </span>
            <div className="pcire_wrapper">
                <span className="main_price">{el.oldPrice !== null ? el.oldPrice.toFixed(2) : ''}</span>
                <span className="sale_price">{el.price.toFixed(2)}</span>
            </div>
          </div>
        ))}
        </>
     );
}
 
export default ListProduct;