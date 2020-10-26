import React from 'react';
import './App.css';
import TestImg from './TestImg.png';
import testimg2 from './testimg2.jpg';
import testimg3 from './testimg3.jpg';
import testimg4 from './testimg4.jpg';
import testimg5 from './testimg5.jpg';
import testimg6 from './testimg6.jpg';
import testimg8 from './testimg8.jpg';
import './bootstrap.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <span className="appname">
          FurnIt 
        </span>
        <span className = "MenuList">
           Catalog
        </span>
        <span className = "Cart">
          <i className='fas fa-shopping-cart'></i> (0) Cart
        </span>
      </header>
      <main className="bannerdefault"></main>
      <span className="container">
      <div className="row">
        <div className="ItemDisplay col">
          <img className="ImgStyle" src={testimg2} alt="TestImg" />
          <span className="ItemName"> Item</span>
          <br />
          <span className="DescStyle">  In vel arcu volutpat, tempor lorem eget, sollicitudin felis. 
          Etiam volutpat dolor id maximus rutrum. 
          Donec sit amet faucibus augue. </span>
          <br />
          <span className="PriceStyle"> $000.00</span>
          <button className="CartAdd"> Add to cart</button>
        </div>

        <div className="ItemDisplay col">
          <img className="ImgStyle" src={testimg3} alt="TestImg" />
          <span className="ItemName"> Item</span>
          <br />
          <span className="DescStyle">  In vel arcu volutpat, tempor lorem eget, sollicitudin felis. 
          Etiam volutpat dolor id maximus rutrum. 
          Donec sit amet faucibus augue. </span>
          <br />
          <span className="PriceStyle"> $00.00</span>
          <button className="CartAdd"> Add to cart</button>
        </div>

        <div className="ItemDisplay col">
          <img className="ImgStyle" src={TestImg} alt="TestImg" />
          <span className="ItemName"> Item</span>
          <br />
          <span className="DescStyle">  In vel arcu volutpat, tempor lorem eget, sollicitudin felis. 
          Etiam volutpat dolor id maximus rutrum. 
          Donec sit amet faucibus augue. </span>
          <br />
          <span className="PriceStyle"> $00.00</span>
          <button className="CartAdd"> Add to cart</button>
          
        </div>
        </div>
        </span>

        <span className="container">
      <div className="row">
        <div className="ItemDisplay col">
          <img className="ImgStyle" src={testimg4} alt="TestImg" />
          <span className="ItemName"> Item</span>
          <br />
          <span className="DescStyle">  In vel arcu volutpat, tempor lorem eget, sollicitudin felis. 
          Etiam volutpat dolor id maximus rutrum. 
          Donec sit amet faucibus augue. </span>
          <br />
          <span className="PriceStyle"> $000.00</span>
          <button className="CartAdd"> Add to cart</button>
        </div>

        <div className="ItemDisplay col">
          <img className="ImgStyle" src={testimg5} alt="TestImg" />
          <span className="ItemName"> Item</span>
          <br />
          <span className="DescStyle">  In vel arcu volutpat, tempor lorem eget, sollicitudin felis. 
          Etiam volutpat dolor id maximus rutrum. 
          Donec sit amet faucibus augue. </span>
          <br />
          <span className="PriceStyle"> $00.00</span>
          <button className="CartAdd"> Add to cart</button>

        </div>

        <div className="ItemDisplay col">
          <img className="ImgStyle" src={testimg6} alt="TestImg" />
          <span className="ItemName"> Item</span>
          <br />
          <span className="DescStyle">  In vel arcu volutpat, tempor lorem eget, sollicitudin felis. 
          Etiam volutpat dolor id maximus rutrum. 
          Donec sit amet faucibus augue. </span>
          <br />
          <span className="PriceStyle"> $00.00</span>
          <button className="CartAdd"> Add to cart</button>
        </div>
        </div>
        </span>

        <span className="container">
      <div className="row">
        <div className="ItemDisplay col">
          <img className="ImgStyle" src={TestImg} alt="TestImg" />
          <span className="ItemName"> Item</span>
          <br />
          <span className="DescStyle">  In vel arcu volutpat, tempor lorem eget, sollicitudin felis. 
          Etiam volutpat dolor id maximus rutrum. 
          Donec sit amet faucibus augue. </span>
          <br />
          <span className="PriceStyle"> $000.00</span>
          <button className="CartAdd"> Add to cart</button>
        </div>

        <div className="ItemDisplay col">
          <img className="ImgStyle" src={testimg8} alt="TestImg" />
          <span className="ItemName"> Item</span>
          <br />
          <span className="DescStyle">  In vel arcu volutpat, tempor lorem eget, sollicitudin felis. 
          Etiam volutpat dolor id maximus rutrum. 
          Donec sit amet faucibus augue. </span>
          <br />
          <span className="PriceStyle"> $00.00</span>
          <button className="CartAdd"> Add to cart</button>

        </div>

        <div className="ItemDisplay col">
          <img className="ImgStyle" src={TestImg} alt="TestImg" />
          <span className="ItemName"> Item</span>
          <br />
          <span className="DescStyle">  In vel arcu volutpat, tempor lorem eget, sollicitudin felis. 
          Etiam volutpat dolor id maximus rutrum. 
          Donec sit amet faucibus augue. </span>
          <br />
          <span className="PriceStyle"> $00.00</span>
          <button className="CartAdd"> Add to cart</button>
        </div>
        </div>
        </span>
    </div>
  );
}


// const header {

// }



export default App;
