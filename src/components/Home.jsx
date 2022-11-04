import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home_image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />
      <div className="home_row">
        <Product
          id="100001"
          title="OnePlus Nord CE 2 5G (Bahamas Blue, 8GB RAM, 128GB Storage)"
          price={24999}
          rating={5}
          image="https://m.media-amazon.com/images/I/61+Q6Rh3OQL._SX679_.jpg"
        />
        <Product
          id="100002"
          title="Samsung Galaxy Book2 Pro 360 Intel 12th Gen i7 EvoTM 33.78 cm (13.3 in) Touchscreen 2-in-1 AMOLED Thin & Light Laptop  (16 GB/512 GB SSD/Windows 11/MS Office)"
          price={113990}
          rating={4}
          image="https://m.media-amazon.com/images/I/61lqAB8G4rL._SX679_.jpg"
        />
      </div>
      <div className="home_row">
        <Product
          id="100003"
          title="Atomic Habits: The life-changing million copy bestseller"
          price={444}
          rating={4}
          image="https://m.media-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg"
        />
        <Product
          id="100004"
          title="Amazon Brand - Solimo Polaris Engineered Wood Oak Finish Queen Bed with Box Storage (Imperial Teak)"
          price={10479}
          rating={5}
          image="https://m.media-amazon.com/images/I/81fuo-7V3zL._AC_UL480_QL65_.jpg"
        />
        <Product
          id="100005"
          title="Zebronics Zeb-JUKEBAR 3900, 80W Multimedia soundbar with subwoofer Supporting Bluetooth, HDMI(ARC)..."
          price={4799}
          rating={4}
          image="https://m.media-amazon.com/images/I/31flGUWUY9L._SX300_SY300_QL70_FMwebp_.jpg"
        />
      </div>
      <div className="home_row">
        <Product
          id="100006"
          title="Sony Bravia 139 cm (55 inches) 4K Ultra HD Smart LED Google TV KD-55X74K (Black)
          "
          price={60999}
          rating={5}
          image="https://m.media-amazon.com/images/S/aplus-media-library-service-media/5b79386d-80ab-4f80-ad9c-c91024629fd1.__CR0,0,1464,600_PT0_SX1464_V1___.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
