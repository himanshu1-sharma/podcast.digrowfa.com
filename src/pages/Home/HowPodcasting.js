import styles from '@/styles/HowPodcasting.module.css'
import Link from 'next/link'

export default function HowPodcasting() {
    return (
        <>
            <section className="container-fluid p-0">
                <div className={styles.howPodcastingBg}>
                    <div className={styles.howPodcastingOverlay}>
                        <div className={styles.howPodcastingCircle}>
                            <div className={styles.circle}></div>
                        </div>
                        <div className='container' id="howPodcastingBg">
                            <div className='row'>
                                <div className='col-lg-12'>
                                    <div className={styles.howPodcastingTitle}>
                                        <h2>Our mission is to share our <span>Knowledge and Expertise</span> with our audience through insightful discussions and interviews with industry leaders and experts</h2>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12'>
                                    <div className={`${styles.howPodcastCard} ${styles.one}`}>
                                        <h4>Our Aim</h4>
                                        <p>Through our podcast, we aim to business owners and entrepreneurs share their business knowledge and navigate the challenges and opportunities of the modern business landscape. We cover a wide range of topics, including marketing, finance, leadership, innovation, and more.</p>
                                        <Link href="">
                                            {/* <button>Read the guide</button> */}
                                        </Link>
                                    </div>
                                </div>
                                <div className='col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12'>
                                    <div className={`${styles.howPodcastCard} ${styles.two}`}>
                                        <h4>Our goal</h4>
                                        <p>Our goal is to inspire our New or Young Business owners to achieve their goals and reach their full potential in business. We believe that by sharing our experiences and insights, we can help our audience overcome obstacles, find new opportunities, and succeed in their ventures.</p>
                                        <Link href="">
                                            {/* <button>Read the guide</button> */}
                                        </Link>
                                    </div>
                                </div>
                                <div className='col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12'>
                                    <div className={`${styles.howPodcastCard} ${styles.three}`}>
                                        <h4>Our objective</h4>
                                        <p>Our objective is to provide a platform for entrepreneurs, business leaders, and industry experts to share their insights and experiences. inspire and educate our listeners on topics ranging from starting a business to scaling up, marketing strategies, leadership, innovation, and much more. </p>
                                        <Link href="">
                                            {/* <button>Read the guide</button> */}
                                        </Link>
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
