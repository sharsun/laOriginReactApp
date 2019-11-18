import React , {useState} from 'react';
import logo from './logo.svg';
import hero from './static/img/hero3.jpg';
import heroVideo from './static/videos/hero.mp4';
import bedroom from './static/img/bedroom.png';
import diningroom from './static/img/dining-room.png';
import livingroom from './static/img/living-room.png';
import BaseCarousel from './components/carousel/carousel';

import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <div className="hero">
          <video className="hero__video" poster={hero} autoPlay muted loop>
             <source src={heroVideo} type="video/mp4"></source>
           </video>
           </div>
      </header>
      <main>
        <section>
          <h2 className="heading">What do we design?</h2>
         <article id="one" class="feature-outer odd accent1">
            <div class="feature-inner">
                <div class="feature-inner__image" data-position="top right">
                  <img src={bedroom} alt=""/>
                </div>
                <h2>Personalized<br/>bedroom<br/></h2>
                <div class="feature-inner__content">
                  <h3>Morbi purus sed libero <br/>faucibus adipiscing</h3>
                  <p>Sed egestas, ante et vulputate lorem ipsum dolor sit amet nullam pede semper est, vitae luctus metus libero eu augue. Morbi purus sed libero, faucibus adipiscing, gravida lorem ipsum.</p>
                  <ul class="feature-inner__actions">
            
                  </ul>
                </div>
            </div>
          </article>
          <article id="one" class="feature-outer even accent2">
            <div class="feature-inner">
                <div class="feature-inner__image" data-position="top right">
                  <img src={livingroom} alt=""/>
                </div>
                <h2>Personalized<br/>  Living-room<br/> </h2>
                <div class="feature-inner__content">
                  <h3>Morbi purus sed libero <br/>faucibus adipiscing</h3>
                  <p>Sed egestas, ante et vulputate lorem ipsum dolor sit amet nullam pede semper est, vitae luctus metus libero eu augue. Morbi purus sed libero, faucibus adipiscing, gravida lorem ipsum.</p>
                  <ul class="feature-inner__actions">
          
                  </ul>
                </div>
            </div>
          </article>
          <article id="one" class="feature-outer odd accent3">
            <div class="feature-inner">
                <div class="feature-inner__image" data-position="top right">
                  <img src={diningroom} alt=""/>
                </div>
                <h2>Personalized<br/>Dining-room<br/></h2>
                <div class="feature-inner__content">
                  <h3>Morbi purus sed libero <br/>faucibus adipiscing</h3>
                  <p>Sed egestas, ante et vulputate lorem ipsum dolor sit amet nullam pede semper est, vitae luctus metus libero eu augue. Morbi purus sed libero, faucibus adipiscing, gravida lorem ipsum.</p>
                  <ul class="feature-inner__actions">
                   
                  </ul>
                </div>
            </div>
          </article>
         </section>
          <section>
          <h2 className="heading heading--2">Testimonials</h2>
          <BaseCarousel/>
          </section>
         
      </main>
     
    </div>
  );
}

export default App;
