import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
        <div className="banner_image"></div>
      
      <div className="padding"></div>
      

      <div className="home_row">
        <Product
          id="12354"
          title="Samsung Galaxy M12 (Blue,4GB RAM, 64GB Storage) 6000 mAh with 8nm Processor | True 48 MP Quad Camera | 90Hz Refresh Rate"
          price={11499.00}
          rating={5}
          image='https://m.media-amazon.com/images/I/71r69Y7BSeL._SX679_.jpg'
        />
        <Product
          id="12354"
          title="ASUS VivoBook Flip 14 (2020), Intel Core i3-10110U 10th Gen, 14 (35.56cms) FHD Touch, 2-in-1 Laptop (8GB/256GB SSD/Office 2019/Windows 10/Integrated Graphics/Blue/1.5 kg), TP412FA-EC382TS"
          price={46490.00}
          rating={5}
          image='https://m.media-amazon.com/images/I/71C-YpFn0zS._SX522_.jpg'
        />
              
      </div>

      <div className="home_row">
        <Product
          id="12354"
          title="AmazonBasics 127cm (50 inch) 4K Ultra HD Smart LED Fire TV AB50U20PS (Black)"
          price={32999.00}
          rating={5}
          image='https://m.media-amazon.com/images/I/71YTwU1IexL._SX522_.jpg'
        />
        <Product
          id="12354"
          title="Dynamic Cookwares, Mini Paniyaram Pan Cast Iron Flat Bottom Tawa 8 Inches 12 Cavity, Works with Gas, Induction Base, and Electrical Cook top, Black"
          price={1199.00}
          rating={5}
          image='https://m.media-amazon.com/images/I/91tt6XltxzS._SX679_.jpg'
        />
        <Product
          id="12000"
          title="Redgear A-10 Wired, USB Mouse and RGB Gaming Headphones with Microphone"
          price={1198.00}
          rating={5}
          image='https://m.media-amazon.com/images/I/81hn87AHIDL._SX522_.jpg'
        />
        
      </div>


      <div className="home_row">
        <Product
          id="12000"
          title="Acer Nitro VG280K 28 Inch UHD 4K (3840 X 2160) IPS Gaming Monitor I AMD Radeon Freesync Technology I I DCI-P3 90%, HDR10 Technology I 2 x HDMI and 1 x DP Ports I Stereo Speakers"
          price={449.00}
          rating={5}
          image='https://assets2.rockpapershotgun.com/grow-home-ultrawide-monitor.jpg/BROK/resize/1920x1920%3E/format/jpg/quality/80/grow-home-ultrawide-monitor.jpg'
        />   
        
               
      </div>

    </div>
  );
}

export default Home;
