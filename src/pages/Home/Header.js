import CommonButton from '@/components/CommonButton/CommonButton'
import styles from '@/styles/Header.module.css'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from "swiper";


export default function Header() {
    return (
        <>
            <section className="container-fluid p-0">
                <div className={styles.headerBg} id="headerBg">
                    <div className={styles.headerOverlay}>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12'>
                                    <div className={styles.headerContent} id="headerContent">
                                        <h1>Make Your Business Voice Loud
                                            With Digrowfa Podcast </h1>
                                        <p>1st Podcast Organizers for online business owners.</p>
                                        <CommonButton name="Get Started" />
                                    </div>
                                </div>
                                <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12'>
                                    <div className={styles.headerSlider}>
                                        <Swiper
                                            effect={"coverflow"}
                                            grabCursor={true}
                                            centeredSlides={true}
                                            slidesPerView={"auto"}
                                            coverflowEffect={{
                                                rotate: 0,
                                                stretch: 0,
                                                depth: 70,
                                                modifier: 2,
                                                slideShadows: true,
                                            }}
                                            autoplay={{
                                                delay: 2500,
                                                disableOnInteraction: false,
                                            }}
                                            loop={true}
                                            modules={[Autoplay, EffectCoverflow, Pagination]}
                                            className="mySwiper"
                                        >
                                            <SwiperSlide>
                                                <div className={`${styles.homeSilderCard} ${styles.one}`}></div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className={`${styles.homeSilderCard} ${styles.two}`}></div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className={`${styles.homeSilderCard} ${styles.three}`}></div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className={`${styles.homeSilderCard} ${styles.four}`}></div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className={`${styles.homeSilderCard} ${styles.five}`}></div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className={`${styles.homeSilderCard} ${styles.six}`}></div>
                                            </SwiperSlide>
                                        </Swiper>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};
