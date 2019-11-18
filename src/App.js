import React from 'react';
import Header from './components/header/index';
import './sass/main.scss';
import Hero from './components/hero/index';
import FeatureBox from './components/featureBox/index'

function App(){
    return(
        <div className="laOrigin-app">
        
            <Header/>
              <Hero/>  
            <main>
                <section>
                    <h2>Why Are We Diffrent</h2>
                    <FeatureBox/>
                </section>
            </main>
        </div>
    )
}

export default App;