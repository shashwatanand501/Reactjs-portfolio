import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import './LandingPage.css';
import Header from '../../Component/Header/Header';

function LandingPage() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div className='Header_Pages'>
      <Header />
      <div id='one' className='Landing_container'>
        <section>
          <div className="content">
            <h2>ShashwatAnand</h2>
            <h2>ShashwatAnand</h2>
          </div>
        </section>
        <p className='about_text'>I am a passionate and enthusiastic Software Developer with 2 years’ experience in development. Constantly eager to learn, explore and try new things in technologies</p>
        <button className='download'>Download Resume</button>
      </div>
      <div id='two' className='Poject_page'>
        {/* Project Component */}
      </div>
      <div id='three' className='Certificate_page'>
        {/* Certificate Component */}
      </div>
      <div id='four' className='ContactUs_page'>
        {/* ContactUs Component */}
      </div>
    </div>
  );
}

export default LandingPage;
