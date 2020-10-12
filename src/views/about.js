import React from 'react';
import './about.css';
import adel from './1.jpg';
import dola from './2.jpg';
import khaled from './3.jpg';
import shimaa from './4.jpg';
import yara from './5.jpg';


const about = () => {

    return (
      <>
      <div className="row">
        <div className="column">
        <div className="card">
        <img src={adel} alt="Adel Samir" style={{width:"100%"}}/>
            <h4>Adel Samir</h4>
            <h4 className="title">CEO & Co-Founder</h4>
            <p onClick={() => {
                                window.open("https://moadell.github.io/adelsamir/", 'blank');
                                }}><button>Learn more</button></p>
            
         </div>
        </div>
        <div className="column">
        <div className="card">
        <img src={dola} alt="Mohamed Adel" style={{width:"100%"}}/>
            <h4>Mohamed Adel</h4>
            <h4 className="title">CTO & Co-Founder</h4>
            <p onClick={() => {
                                window.open("https://moadell.github.io/MoAdelCV/", 'blank');
                                }}><button>Learn more</button></p>
            
         </div>
        </div>
        <div className="column">
        <div className="card">
        <img src={khaled} alt="Mohamed Khaled" style={{width:"100%"}}/>
            <h4>Mohamed Khaled</h4>
            <h4 className="title">Manager & Co-Founder</h4>
            <p onClick={() => {
                                window.open("https://moadell.github.io/mohamedkhaled/", 'blank');
                                }}><button>Learn more</button></p>
            
         </div>
        </div>
        <div className="column">
        <div className="card">
        <img src={shimaa} alt="Shimma Yasser" style={{width:"100%"}}/>
            <h4>Shimma Yasser</h4>
            <h4 className="title">CTO & Co-Founder</h4>
            <p onClick={() => {
                                window.open("https://shimaa-yasser.firebaseapp.com/?fbclid=IwAR08esuuKs3Lc47-YjdJDkZAYGP1eBucOYfqe9J3rMf3Gol71PM-XsBKJNk#blog", 'blank');
                                }}><button>Learn more</button></p>
            
         </div>
        </div>
        <div className="column">
        <div className="card">
        <img src={yara} alt="Yara Khaled" style={{width:"100%"}}/>
            <h4>Yara Khaled</h4>
            <h4 className="title">Manager & Co-Founder</h4>
            <p onClick={() => {
                                window.open("https://moadell.github.io/yarakhaled/", 'blank');
                                }}><button>Learn more</button></p>
            
         </div>
        </div>
      
        </div>
      </>
    );
  }
  
  export default about;