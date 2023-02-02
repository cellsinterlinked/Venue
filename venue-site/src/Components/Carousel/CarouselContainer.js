import './CarouselContainer.css'
import React, {useState  } from 'react'
import image from '../../Assets/al-elmes-ULHxWq8reao-unsplash.jpg';
import image1 from '../../Assets/Landing1.jpg';
import image2 from '../../Assets/Landing2.jpg';
import image3 from '../../Assets/Landing3.jpg';
import image4 from '../../Assets/Landing4.jpg';
import {BsChevronLeft} from 'react-icons/bs';
import {BsChevronRight} from 'react-icons/bs';


const CarouselContainer = () => {
    const images = [image, image1, image2, image3, image4]

    const [displayImage, setDisplayImage] = useState(0)

    const foreward = () => {
        if (displayImage !== 4) {
            setDisplayImage(displayImage + 1)
        } else {
            setDisplayImage(0)
        }
    }

    const backward = () => {
        if (displayImage !== 0) {
            setDisplayImage(displayImage - 1)
        } else {
            setDisplayImage(4)
        }
    }

    setTimeout(function() {
        if (displayImage !== 4) {
            setDisplayImage(displayImage + 1)
        } else {
            setDisplayImage(0)
        }
    }, 5000)
      






    return(
        <div className="carousel_container">
            <BsChevronRight onClick={() => foreward()} className="scroll-right" />
            <BsChevronLeft onClick={() => backward()}className="scroll-left" />
             <div className="title_container">
                <h3>CD</h3>
            </div>
            <div className="title_container">
                <p>Pretentious in spirit</p>
            </div>
            {displayImage === 0 && <img alt="" src={images[0]} />}
            {displayImage === 1 && <img alt="" src={images[1]} />}
            {displayImage === 2 && <img alt="" src={images[2]} />}
            {displayImage === 3 && <img alt="" src={images[3]} />}
            {displayImage === 4 && <img alt="" src={images[4]} />}
           
            <div className="carousel-dot_container">
                <div className={displayImage === 0 ? "image-dot_selected" : "image_dot" } onClick={() => setDisplayImage(0)}></div>
                <div className={displayImage === 1 ? "image-dot_selected" : "image_dot" } onClick={() => setDisplayImage(1)}></div>
                <div className={displayImage === 2 ? "image-dot_selected" : "image_dot" } onClick={() => setDisplayImage(2)}></div>
                <div className={displayImage === 3 ? "image-dot_selected" : "image_dot" } onClick={() => setDisplayImage(3)}></div>
                <div className={displayImage === 4 ? "image-dot_selected" : "image_dot" } onClick={() => setDisplayImage(4)}></div>
            </div>
        </div>
    )
}

export default CarouselContainer