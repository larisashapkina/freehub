import React from 'react';

import './ProductCard.scss';

function ProductCard({title, image}) {


    function truncateTitle(title){

        if(title.length < 30){
          return title;

        }else{

          let truncatedString = title.slice(0,27);
    
          let indexOfLastSpace = truncatedString.lastIndexOf(' ');
          
          return truncatedString.slice(0, indexOfLastSpace) + " " + "...";
        }
      }

let formattedTitle = truncateTitle(title);


    return (
        <div className= "productCard">
            <div className="productCard__image">
                <img src={image}/>
            </div>
            <div className="productCard__info">
                    <div className="productCard__title">{formattedTitle}</div>
                    <div className="productCard__price">$87.00</div>
            </div>
        </div>
    );
}

export default ProductCard;