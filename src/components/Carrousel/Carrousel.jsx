import React, {useEffect, useRef} from 'react';
import styles from './Carrousel.module.css'
import dog1 from "../../assets/images/dog1.jpg"
import dog2 from "../../assets/images/dog2.jpg"
import dog3 from "../../assets/images/dog3.jpg"
import dog4 from "../../assets/images/dog4.png"
import dog5 from "../../assets/images/dog5.jpg"

function Carrousel() {

    const carouselRef = useRef();

    
    function scrolling(index) {
        const carouselList = carouselRef.current;

        const allImages = carouselList.querySelectorAll("[data-status]");
        allImages[index === 0 ? index : index-1].dataset.status = "unknown";
        allImages[index === 4 ? index : index+1].dataset.status = "unknown";

        const currentImg = allImages[index];
        currentImg.dataset.status = "active";

        carouselList.style.transform = `translateX(${index*-20}%)`;
    }

    // function retardedScrolling(i) {
    //     setTimeout(() => {
    //         scrolling(i)
    //         if(i === 4) i = 0;      
    //     }, i * 2500);
    // }

    // useEffect(() => {
        // for(let i = 0; i < 5 ; i++) {
        //     retardedScrolling(i)
        //     // if(i === 4) i = 0;
        // }
    // },[retardedScrolling])


    return (
        <div className={styles.mainBox}>
            <div className={styles.carrousel}>
                <div ref={carouselRef} className={styles.grande}>
                    <div className={styles.imgBox}><img className={styles.img} src={dog1} data-index="0" data-status="active" alt="img"/></div>
                    <div className={styles.imgBox}><img className={styles.img} src={dog2} data-index="1" data-status="unknown" alt="img"/></div>
                    <div className={styles.imgBox}><img className={styles.img} src={dog3} data-index="2" data-status="unknown" alt="img"/></div>
                    <div className={styles.imgBox}><img className={styles.img} src={dog4} data-index="3" data-status="unknown" alt="img"/></div>
                    <div className={styles.imgBox}><img className={styles.img} src={dog5} data-index="4" data-status="unknown" alt="img"/></div>
                </div>
                <ul className={styles.puntos}>
                    <li className={styles.punto} onClick={()=>scrolling(0)}></li>
                    <li className={styles.punto} onClick={()=>scrolling(1)}></li>
                    <li className={styles.punto} onClick={()=>scrolling(2)}></li>
                    <li className={styles.punto} onClick={()=>scrolling(3)}></li>
                    <li className={styles.punto} onClick={()=>scrolling(4)}></li>
                </ul>
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