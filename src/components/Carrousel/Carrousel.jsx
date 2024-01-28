import React, {useState, useEffect, useRef} from 'react';
import styles from './Carrousel.module.css'
import dog1 from "../../assets/images/dog1.jpg"
import dog2 from "../../assets/images/dog2.jpg"
import dog3 from "../../assets/images/dog3.jpg"
import dog4 from "../../assets/images/dog4.png"
import dog5 from "../../assets/images/dog5.jpg"

function Carrousel() {

    const carouselRef = useRef(null);
    const [isMouseOver, setIsMouseOver] = useState(false);
    const intervalRef = useRef(null);
  
    const scrolling = (index) => {
      const carouselList = carouselRef.current;
  
      const allImages = carouselList.querySelectorAll("[data-status]");
      allImages.forEach(image => image.dataset.status = "unknown");
  
      const currentImg = allImages[index];
      currentImg.dataset.status = "active";
  
      carouselList.style.transform = `translateX(${index * -20}%)`;
    };
  
    const autoScroll = () => {
      let currentIndex = 0;
  
      intervalRef.current = setInterval(() => {
        if (!isMouseOver) {
          currentIndex = (currentIndex + 1) % 5;
          scrolling(currentIndex);
        }
      }, 3000);
    };
  
    const handleMouseEnter = () => {
      setIsMouseOver(true);
      clearInterval(intervalRef.current);
    };
  
    const handleMouseLeave = () => {
      setIsMouseOver(false);
    };
  
    useEffect(() => {
      autoScroll();
      return () => clearInterval(intervalRef.current);
    }, [isMouseOver]);


    return (
        <div className={styles.mainBox}>
            <div className={styles.carrousel}>
                <div ref={carouselRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={styles.grande}>
                    <div className={styles.imgBox}><img className={styles.img} src={dog1} data-index="0" data-status="active" alt="img"/></div>
                    <div className={styles.imgBox}><img className={styles.img} src={dog2} data-index="1" data-status="unknown" alt="img"/></div>
                    <div className={styles.imgBox}><img className={styles.img} src={dog3} data-index="2" data-status="unknown" alt="img"/></div>
                    <div className={styles.imgBox}><img className={styles.img} src={dog4} data-index="3" data-status="unknown" alt="img"/></div>
                    <div className={styles.imgBox}><img className={styles.img} src={dog5} data-index="4" data-status="unknown" alt="img"/></div>
                </div>
                {/* <ul className={styles.puntos}>
                    <li className={styles.punto} onClick={()=>scrolling(0)}></li>
                    <li className={styles.punto} onClick={()=>scrolling(1)}></li>
                    <li className={styles.punto} onClick={()=>scrolling(2)}></li>
                    <li className={styles.punto} onClick={()=>scrolling(3)}></li>
                    <li className={styles.punto} onClick={()=>scrolling(4)}></li>
                </ul> */}
            </div>
            <div id="box">
                A
            </div>

                {/* {images?.map((e) => {
                return (
                    <div key={e.id}>
                        <img src={e.url}/>
                    </div>
                )
            })} */}
        </div>
    );
}

export default Carrousel;