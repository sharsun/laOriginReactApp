import React, { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';
import {carouselConfig} from '../../configs/config';
import chevroletRight from '../../static/img/angle-right.svg';
import chevroletLeft from '../../static/img/angle-left.svg';
import story1 from '../../static/img/story1.jpg';
import story2 from '../../static/img/story2.jpg';
import story3 from '../../static/img/story3.jpg';
import story4 from '../../static/img/story4.jpg';
import story5 from '../../static/img/story5.jpg';
import user1 from '../../static/img/user1.jpg';
import user2 from '../../static/img/user2.png';
import user3 from '../../static/img/user3.jpg';
import user4 from '../../static/img/user4.jpg';

 
const BaseCarousel = () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
  return (
    <div style={{ padding: `0 ${chevronWidth}px` }}>
      <ItemsCarousel
        infiniteLoop = {carouselConfig.infiniteLoop}
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={carouselConfig.numberOfCards}
        gutter={20}
        leftChevron={<a className="ItemCarousel__chevron"><img src={chevroletLeft}></img></a>}
        rightChevron={<a className="ItemCarousel__chevron"><img src={chevroletRight}></img></a>}
        outsideChevron
        chevronWidth={chevronWidth}
      >
        <div className="ItemCarouselCard">
            <img className="ItemCarouselCard__img" src={story1}></img>
             <div className="ItemCarouselCard__desc">
             <div className="ItemCarouselCard__imagecropper">
                  <img src={user1} className="ItemCarouselCard__img2"></img>
                  </div>
                  <div className="ItemCarouselCard__text">
                  "We have very busy schedules and didn’t have time to spare but the entire Livspace team was very accomodating"
                  </div>
                  <span className="ItemCarouselCard__name">Charu - Full House Interior</span>
                  <address>Mumbai</address>
             </div>
        </div>
        <div className="ItemCarouselCard">
       
             <img className="ItemCarouselCard__img" src={story2}></img>
             <div className="ItemCarouselCard__desc">
             <div className="ItemCarouselCard__imagecropper">
                  <img src={user2} className="ItemCarouselCard__img2"></img>
                  </div>
                  <div className="ItemCarouselCard__text">
                 "We have very busy schedules and didn’t have time to spare but the entire Livspace team was very accomodating"
                  </div>
                  <span className="ItemCarouselCard__name">Charu - Full House Interior</span>
                  <address>Mumbai</address>
             </div>
        </div>
       
        <div className="ItemCarouselCard" >
        <img className="ItemCarouselCard__img" src={story4}></img>
        <div className="ItemCarouselCard__desc">
                  <div className="ItemCarouselCard__imagecropper">
                   <img src={user3} className="ItemCarouselCard__img2"></img>
                   </div>
                  <div className="ItemCarouselCard__text">
                  “Our dream kitchen is exactly what we wanted.”
                  </div>
                  <span className="ItemCarouselCard__name">Charu - Full House Interior</span>
                  <address>Mumbai</address>
             </div>
        </div>
        <div className="ItemCarouselCard" >
        <img className="ItemCarouselCard__img" src={story5}></img>
        <div className="ItemCarouselCard__desc">
        <div className="ItemCarouselCard__imagecropper">
                  <img src={user4} className="ItemCarouselCard__img2"></img>
                  </div>
                  <div className="ItemCarouselCard__text">
                  “We’d visualised a minimalist concept like this and Livspace successfully delivered it.”
                  </div>
                  <span className="ItemCarouselCard__name">Charu - Full House Interior</span>
                  <address>Mumbai</address>
             </div>
        </div>
      </ItemsCarousel>
    </div>
  );
};

export default BaseCarousel;