import React from "react";
import { tarotData } from "../tarotData";

const Gallery = () =>{

    const tarmap = tarotData.map((card) =>
        <li class="galleryLi" key={card.id}>
            {<img class="galImage" src={`/images/${card.id}.jpg`} />}
        </li>
    );

    return(
        <div>
            <h1>
            Gallery
            </h1>
            <ul class="galleryUl">{tarmap}</ul>
        </div>
        
    )
    
}

export default Gallery;