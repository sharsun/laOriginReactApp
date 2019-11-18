import React from 'react';
import hero from '../../static/img/hero-laorigin.jpeg';
import DesignerForm from '../form/index';


export default function Hero(){
    return(
     <div className="hero">
        <div className="hero__img">
            <img src={hero}/>
        </div>
        <DesignerForm/>
    </div>
    )
   

}