import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { mainImages } from "../Data";
import styles from "./home.module.css";
import About from "../components/about/About";
import Gallery from "../components/gallery/Gallery";
import Footer from "../components/footer/Footer";
const Home = () => {
  return (
    <div className={styles.homeContaier}>
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        // emulateTouch={false}
        autoPlay
        showIndicators={false}
        useKeyboardArrows={true}
        swipeable={false} // Disable swipe actions
        transitionTime={2000}
        // axis="vertical"
        // selectedItem={imgPosition}
        width="100%"
        stopOnHover={false}
        // renderArrowNext={(clickHandler, hasNext) => {
        //     return (
        //         hasNext && (
        //             <MdOutlineArrowForwardIos
        //                 style={{
        //                     fontSize: '30px',
        //                     cursor: 'pointer',
        //                     position: 'absolute',
        //                     right: '0',
        //                     top: '50%',
        //                 }}
        //                 onClick={clickHandler}
        //             />
        //         )
        //     );
        // }}
        // renderArrowPrev={(clickHandler, hasNext) => {
        //     return (
        //         hasNext && (
        //             <MdOutlineArrowBackIos
        //                 style={{
        //                     fontSize: '30px',
        //                     cursor: 'pointer',
        //                     position: 'absolute',
        //                     left: '0',
        //                     top: '50%',
        //                     zIndex: 555,
        //                 }}
        //                 onClick={clickHandler}
        //             />
        //         )
        //     );
        // }}
      >
        {mainImages?.map((sliderImage, i) => (
          <div className={styles.imageContainer} key={i}>
            {sliderImage ===
              "/static/media/banner1.eddcf45f53196565a911.jpg" && (
              <div className={styles.bannerInfo}>
                <h1>Welcome to Our Church Family</h1>
                <h2>Where Love Abides and Faith Thrives</h2>
                <p>
                  "Beloved, let us love one another, for love is from God, and
                  whoever loves has been born of God and knows God." - 1 John
                  4:7
                </p>
              </div>
            )}
            <img src={sliderImage} className={styles.sliderImage} alt={i} />
          </div>
        ))}
      </Carousel>
      <About />
      <Gallery />
      <Footer />
    </div>
  );
};

export default Home;
