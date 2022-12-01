import React from 'react';

import './ProductCard.scss';

function ProductCard({title, image}) {


const truncateTitle = (title) =>{
    if(title.lenght <= 30){
        return title;
    }else{
        return title.slice(0,27) + "..."
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