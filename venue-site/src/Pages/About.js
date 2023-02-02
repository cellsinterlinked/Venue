import "./About.css";
import React, { useEffect } from "react";
import ReviewCard from "../Components/Card/ReviewCard";
import image1 from "../Assets/albert-dera-ILip77SbmOE-unsplash.jpg";
import image2 from "../Assets/jake-nackos-IF9TK5Uy-KI-unsplash.jpg";
import image3 from "../Assets/joseph-gonzalez-iFgRcqHznqg-unsplash.jpg";
import image4 from "../Assets/jurica-koletic-7YVZYZeITc8-unsplash.jpg";
import image5 from "../Assets/michael-dam-mEZ3PoFGs_k-unsplash.jpg";
import bio1 from "../Assets/AdobeStock_3636306255.jpeg";
import bio2 from "../Assets/AdobeStock_4476997911.jpeg";
import {HiArrowDown} from 'react-icons/hi2';

const About = () => {
  let aboutParallax;
  let aboutParallaxMobile;
  useEffect(() => {
    aboutParallax = document.getElementById("parallaxAbout");
    aboutParallaxMobile = document.getElementById("parallaxAboutMobile");

    return;
  }, []);

  window.addEventListener("scroll", function () {
    let offsetAbout = window.pageYOffset;
    aboutParallax.style.backgroundPositionY = offsetAbout * 0.7 + "px";
  });
  window.addEventListener("scroll", function () {
    let offsetAboutMobile = window.pageYOffset;
    aboutParallaxMobile.style.backgroundPositionY = offsetAboutMobile * 0.7 + "px";
  });

  return (
    <div className="parallax-wrapper">
      <div className="page-head_about" id="parallaxAbout">
        <div className="title-wrapper-left_about">
          <h3 className="page-title_light">Creating Elegant Experiences</h3>
          <p className="page-details">
       
          </p>
        </div>
      </div>

      <div className="page-head-mobile_about" id="parallaxAboutMobile">
        <div className="title-wrapper_mobile">
          <h3 className="page-title_mobile">Creating Elegant Experiences</h3>
          <p className="page-details_mobile">
       
          </p>
        </div>
      </div>

      <div className="about-text_wrapper">
        <div className="about-text">
          <h2>Ipsum dolor sit amet</h2>
            <p>Lorem ipsum dolor sit amet. consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet
          nec ullamcorper sit amet risus nullam eget felis. Quisque non tellus
          orci ac auctor augue mauris. Faucibus nisl tincidunt eget nullam non
          nisi est. Quis enim lobortis scelerisque fermentum dui faucibus in.
          Arcu cursus vitae congue mauris rhoncus aenean vel elit. Tristique
          senectus et netus et malesuada.
          </p>
          <img
            alt=""
            src={bio1}
            className="about-image"
            style={{ float: "right" }}
          />
          <br/>
          <p>
           Consequat semper viverra nam libero
          justo. Tortor at auctor urna nunc id cursus metus aliquam eleifend.
          Habitant morbi tristique senectus et netus et malesuada fames ac.
          Mollis nunc sed id semper risus in hendrerit gravida rutrum. Netus et
          malesuada fames ac. Amet mauris commodo quis imperdiet. Egestas
          maecenas pharetra convallis posuere. Vestibulum sed arcu non odio
          euismod lacinia at quis. Eu ultrices vitae auctor eu. Ultricies mi
          quis hendrerit dolor magna eget est. In hendrerit gravida rutrum
          quisque non tellus orci ac auctor. Facilisis mauris sit amet massa
          vitae tortor. Nam libero justo laoreet sit amet cursus sit amet.
          Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa.
          Sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum.

          </p>
          <br/>
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
        
          <br/>
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
            src={bio2}
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
          <br/>
        <p>
           Tellus cras adipiscing enim eu.
          Pulvinar sapien et ligula ullamcorper malesuada proin libero nunc.
          Adipiscing elit pellentesque habitant morbi tristique senectus.
          Bibendum arcu vitae elementum curabitur. Massa eget egestas purus
          viverra. At urna condimentum mattis pellentesque id nibh tortor id
          aliquet. Semper viverra nam libero justo laoreet sit amet cursus.
          Commodo nulla facilisi nullam vehicula. Rhoncus aenean vel elit
          scelerisque mauris pellentesque pulvinar pellentesque habitant. Mauris
          nunc congue nisi vitae suscipit tellus mauris.

        </p>
          <br />
         <p>

          Eget arcu dictum varius duis at
          consectetur. Ut enim blandit volutpat maecenas volutpat blandit. At
          quis risus sed vulputate odio ut. A lacus vestibulum sed arcu non odio
          euismod. Accumsan lacus vel facilisis volutpat est velit egestas.
         </p>
        </div>
      </div>

      <div className="review-head">
<h2>See What Others are Saying about Club Dapper.</h2>
<HiArrowDown classname="review-arrow" />

      </div>

      <div className="review_wrapper">
        <ReviewCard
          image={image1}
          name="Andrew Reed"
          review="Since moving from Carmel I hadn't found a venue where I could avoid the peasants, until I found Club Dapper!"
        />
        <ReviewCard
          image={image2}
          name="Megan Morano"
          review="Club Dapper really came through for my wedding when the security wouldn't let the barbarians from Country Squire Lakes in!"
        />
        <ReviewCard
          image={image3}
          name="Blake Shimoto"
          review="Finally a place where I won't get made fun of for my top hat, monacle and tweed. Thanks Club Dapper!"
        />
        <ReviewCard
          image={image4}
          name="Paul Gibbens"
          review="I expected the bar to only have natty light, so imagine my surprise when they had not one, but two kinds of scotch! Jennings County upper crust, here I come! "
        />
        <ReviewCard
          image={image5}
          name="Nikki Barns"
          review="I would have been mad about not catching the bouquet at my best friend's wedding, but I was soooo preoccupied admiring all the beautiful decorations and sipping Moscato on ice! "
        />
      </div>
    </div>
  );
};

export default About;
