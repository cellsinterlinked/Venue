import React, { useEffect } from "react";
import price1 from "../../Assets/AdobeStock_3373223899.jpeg";
import price2 from "../../Assets/AdobeStock_234502878.jpeg";
import price3 from "../../Assets/AdobeStock_142006249.jpeg";
import './Pricing.css';
import {BsCheck} from 'react-icons/bs';
import {IoCloseSharp} from 'react-icons/io5';

const Pricing = () => {
  let pricingParallax;
  let pricingParallaxMobile;

  useEffect(() => {
    pricingParallax = document.getElementById("parallaxPhoto");
    pricingParallaxMobile = document.getElementById("parallaxPhotoMobile");
    return;
  }, []);

  window.addEventListener("scroll", function () {
    let offsetPricing = window.pageYOffset;
    pricingParallax.style.backgroundPositionY = offsetPricing * 0.7 + "px";
  });

  window.addEventListener("scroll", function () {
    let offsetPricingMobile = window.pageYOffset;
    pricingParallaxMobile.style.backgroundPositionY = offsetPricingMobile * 0.7 + "px";
  });

  return (
    <div className="parallax-wrapper">
      <div className="page-head_pricing" id="parallaxPhoto">
        <div
          className="title-wrapper_right"
          style={{ marginTop: "4%", marginLeft: "5%" }}
        >
          <h3 className="page-title_light">Pricing and Admenities</h3>
          <p className="page-details" >
            Take a look at what we have to offer. <strong> </strong>
          </p>
        </div>
      </div>

      <div className="page-head-mobile_pricing" id="parallaxPhotoMobile">
        <div
          className="title-wrapper_mobile"
          // style={{ marginTop: "4%", marginLeft: "5%" }}
        >
          <h3 className="page-title_mobile">Pricing and Admenities</h3>
            <p className="page-details_mobile" style={{color: "white"}}>
            Take a look at what we have to offer. <strong> </strong>
          </p>
        </div>
      </div>

    <div className="about-text_wrapper">

      <div className="about-text">
        <h2>Amet purus gravida quis blandit turpis.</h2>
        <p>
          Amet purus gravida quis blandit turpis. In arcu cursus euismod quis.
          Dolor morbi non arcu risus quis varius quam quisque. Id porta nibh
          venenatis cras. Eleifend donec pretium vulputate sapien nec. Ut diam
          quam nulla porttitor massa id neque. Pharetra pharetra massa massa
          ultricies mi quis hendrerit dolor. Urna molestie at elementum eu
          facilisis. Eget arcu dictum varius duis at consectetur. Ut enim
          blandit volutpat maecenas volutpat blandit. At quis risus sed
          vulputate odio ut. A lacus vestibulum sed arcu non odio euismod.
          Accumsan lacus vel facilisis volutpat est velit egestas. Lectus
          vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt
          ornare. Et netus et malesuada fames. Tellus pellentesque eu tincidunt
          tortor aliquam nulla facilisi cras. Odio ut sem nulla pharetra diam
          sit amet nisl suscipit. Facilisi etiam dignissim diam quis enim
          lobortis scelerisque. Aliquam vestibulum morbi blandit cursus risus.
        </p>
        <br/>
        <img
          alt=""
          src={price1}
          className="about-image"
          style={{ float: "right" }}
        />
        <h2>Ipsum dolor sit amet</h2>
        <p>
          Lorem ipsum dolor sit amet. consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet
          nec ullamcorper sit amet risus nullam eget felis. Quisque non tellus
          orci ac auctor augue mauris. Faucibus nisl tincidunt eget nullam non
          nisi est. Quis enim lobortis scelerisque fermentum dui faucibus in.
          Arcu cursus vitae congue mauris rhoncus aenean vel elit. Tristique
          senectus et netus et malesuada.
        </p>
        <br />
        <p>
          Consequat semper viverra nam libero justo. Tortor at auctor urna nunc
          id cursus metus aliquam eleifend. Habitant morbi tristique senectus et
          netus et malesuada fames ac. Mollis nunc sed id semper risus in
          hendrerit gravida rutrum. Netus et malesuada fames ac. Amet mauris
          commodo quis imperdiet. Egestas maecenas pharetra convallis posuere.
          Vestibulum sed arcu non odio euismod lacinia at quis. Eu ultrices
          vitae auctor eu. Ultricies mi quis hendrerit dolor magna eget est. In
          hendrerit gravida rutrum quisque non tellus orci ac auctor. Facilisis
          mauris sit amet massa vitae tortor. Nam libero justo laoreet sit amet
          cursus sit amet. Mattis ullamcorper velit sed ullamcorper morbi
          tincidunt ornare massa. Sapien nec sagittis aliquam malesuada bibendum
          arcu vitae elementum.
        </p>
        <br />
        <p>
          Ipsum dolor sit amet consectetur adipiscing. Laoreet id donec ultrices
          tincidunt arcu non sodales. Orci eu lobortis elementum nibh tellus
          molestie nunc non blandit. Amet purus gravida quis blandit turpis. In
          arcu cursus euismod quis. Dolor morbi non arcu risus quis varius quam
          quisque. Id porta nibh venenatis cras. Eleifend donec pretium
          vulputate sapien nec. Ut diam quam nulla porttitor massa id neque.
          Pharetra pharetra massa massa ultricies mi quis hendrerit dolor. Urna
          molestie at elementum eu facilisis. Eget arcu dictum varius duis at
          consectetur. Ut enim blandit volutpat maecenas volutpat blandit. At
          quis risus sed vulputate odio ut. A lacus vestibulum sed arcu non odio
          euismod. Accumsan lacus vel facilisis volutpat est velit egestas.
        </p>
        <img
          alt=""
          className="about-image"
          src={price2}
          style={{ float: "left" }}
        />
        <p>
          Ipsum dolor sit amet consectetur adipiscing. Laoreet id donec ultrices
          tincidunt arcu non sodales. Orci eu lobortis elementum nibh tellus
          molestie nunc non blandit. Amet purus gravida quis blandit turpis. In
          arcu cursus euismod quis. Dolor morbi non arcu risus quis varius quam
          quisque. Id porta nibh venenatis cras. Eleifend donec pretium
          vulputate sapien nec. Ut diam quam nulla porttitor massa id neque.
          Pharetra pharetra massa massa ultricies mi quis hendrerit dolor. Urna
          molestie at elementum eu facilisis. Eget arcu dictum varius duis at
          consectetur. Ut enim blandit volutpat maecenas volutpat blandit. At
          quis risus sed vulputate odio ut. A lacus vestibulum sed arcu non odio
          euismod. Accumsan lacus vel facilisis volutpat est velit egestas.
        </p>

        <br />
        <h2>Ipsum dolor sit amet</h2>
        <p>
          Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi
          tincidunt ornare. Et netus et malesuada fames. Tellus pellentesque eu
          tincidunt tortor aliquam nulla facilisi cras. Odio ut sem nulla
          pharetra diam sit amet nisl suscipit. Facilisi etiam dignissim diam
          quis enim lobortis scelerisque. Aliquam vestibulum morbi blandit
          cursus risus.
        </p>
        <img
          alt=""
          className="about-image"
          src={price3}
          style={{ float: "left" }}
        />
        <p>
          Morbi quis commodo odio aenean sed adipiscing diam donec. Eu feugiat
          pretium nibh ipsum consequat nisl vel pretium. Placerat duis ultricies
          lacus sed turpis tincidunt id aliquet. Sit amet commodo nulla facilisi
          nullam vehicula ipsum a. Mauris pharetra et ultrices neque ornare
          aenean. Elementum facilisis leo vel fringilla est ullamcorper eget
          nulla. A pellentesque sit amet porttitor eget dolor morbi. Et
          malesuada fames ac turpis egestas maecenas pharetra convallis.
          Facilisi nullam vehicula ipsum a.
        </p>
        <br />
        <p>
          Tellus cras adipiscing enim eu. Pulvinar sapien et ligula ullamcorper
          malesuada proin libero nunc. Adipiscing elit pellentesque habitant
          morbi tristique senectus. Bibendum arcu vitae elementum curabitur.
          Massa eget egestas purus viverra. At urna condimentum mattis
          pellentesque id nibh tortor id aliquet. Semper viverra nam libero
          justo laoreet sit amet cursus. Commodo nulla facilisi nullam vehicula.
          Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar
          pellentesque habitant. Mauris nunc congue nisi vitae suscipit tellus
          mauris.
        </p>
        <br />
        <p>
          Eget arcu dictum varius duis at consectetur. Ut enim blandit volutpat
          maecenas volutpat blandit. At quis risus sed vulputate odio ut. A
          lacus vestibulum sed arcu non odio euismod. Accumsan lacus vel
          facilisis volutpat est velit egestas.
        </p>
      </div>
    </div>


    <div className="pricing-table">
        <div className="price-wrapper">
            <h3>Package X</h3>
            <div className="price-divide"></div>
            <h1>$<strong>200</strong></h1>
            <h2>Holder Text</h2>
            <p>Commodo nulla facilisi nullam vehicula. Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant.</p>
            <div className="included-wrapper">
                <div className="included-item"><BsCheck className="price-check"/><p>Consequat</p></div>
                <div className="included-item"><BsCheck className="price-check"/><p>Habitant</p></div>
                <div className="included-item"><IoCloseSharp className="price-x"/><p>Maecenas</p></div>
                <div className="included-item"><IoCloseSharp className="price-x"/><p>Adipiscing</p></div>
               

            </div>

        </div>
        <div className="price-wrapper">
        <h3>Package Y</h3>
            <div className="price-divide green"></div>
            <h1>$<strong>400</strong></h1>
            <h2>Holder Text</h2>
            <p>Commodo nulla facilisi nullam vehicula. Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant.</p>
            <div className="included-wrapper">
                <div className="included-item"><BsCheck className="price-check"/><p>Consequat</p></div>
                <div className="included-item"><BsCheck className="price-check"/><p>Habitant</p></div>
                <div className="included-item"><BsCheck className="price-check"/><p>Maecenas</p></div>
                <div className="included-item"><IoCloseSharp className="price-x"/><p>Adipiscing</p></div>
                </div>

        </div>
        <div className="price-wrapper">
        <h3>Package Z</h3>
            <div className="price-divide purple"></div>
            <h1>$<strong>600</strong></h1>
            <h2>Holder Text</h2>
            <p>Commodo nulla facilisi nullam vehicula. Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant.</p>
            <div className="included-wrapper">
                <div className="included-item"><BsCheck className="price-check"/><p>Consequat</p></div>
                <div className="included-item"><BsCheck className="price-check"/><p>Habitant</p></div>
                <div className="included-item"><BsCheck className="price-check"/><p>Maecenas</p></div>
                <div className="included-item"><BsCheck className="price-check"/><p>Adipiscing</p></div>
                </div>
        </div>
    </div>
    </div>
  );
};

export default Pricing;
