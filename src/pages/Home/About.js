import CommonButton from '@/components/CommonButton/CommonButton'
import styles from '@/styles/About.module.css'
import Image from 'next/image'

export default function About() {
    return (
        <>
            <section className="container-fluid p-0">
                <div className={styles.aboutBg} id="aboutBg">
                    <div className='container'>
                        <div className={styles.aboutContentBox}>
                            <div className='row'>
                                <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12'>
                                    <div className={styles.aboutImage}>
                                        <Image src="/home/about.png" alt='about' width={608} height={608} className="img-fluid" />
                                    </div>
                                </div>
                                <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12'>
                                    <div className={styles.aboutContent} id="aboutContent">
                                        <h4>Digrowfa Podcast</h4>
                                        <p>Whether you're a seasoned entrepreneur or just starting out, Digrowfa’s podcast is designed to offer valuable information and practical advice to help you succeed. Join us as we explore the world of business and uncover the secrets to building and growing successful companies. Our guests come from various industries and backgrounds, giving our listeners a diverse range of perspectives and ideas to apply to their own businesses. </p>
                                        <CommonButton name="Start a podcast" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className={styles.aboutContentBox}>
                            <div className='row'>
                                <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12'>
                                    <div className={styles.aboutContent} id="aboutContent">
                                        <h4>Connect with fans</h4>
                                        <p>Grow your audience with fan engagement tools like Q&A and polls – millions of people on Spotify can interact directly with your episodes.</p>
                                        <CommonButton name="Start a podcast" />
                                    </div>
                                </div>
                                <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12'>
                                    <div className={styles.aboutImage}>
                                        <Image src="/home/1.png" alt='about' width={608} height={518} className="img-fluid" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.aboutContentBox}>
                            <div className='row'>
                                <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12'>
                                    <div className={styles.aboutImage}>
                                        <Image src="/home/1.png" alt='about' width={608} height={518} className="img-fluid" />
                                    </div>
                                </div>
                                <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12'>
                                    <div className={styles.aboutContent} id="aboutContent">
                                        <h4>Connect with fans</h4>
                                        <p>Grow your audience with fan engagement tools like Q&A and polls – millions of people on Spotify can interact directly with your episodes.</p>
                                        <CommonButton name="Start a podcast" />
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>
        </>
    )
};
