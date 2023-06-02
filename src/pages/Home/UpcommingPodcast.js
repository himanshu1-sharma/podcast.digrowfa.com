import CommonButton from '@/components/CommonButton/CommonButton';
import styles from '@/styles/UpcommingPodcast.module.css'
import Image from 'next/image';

export default function UpcommingPodcast() {
    return (
        <>
            <section className="container-fluid p-0">
                <div className={styles.upcommingPodcastBg} id="upcommingPodcastBg">
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-12'>
                                <div className={styles.upcommingPodcastTitle} id="upcommingPodcastTitle">
                                    <h2>Register, and be part of our upcoming podcast</h2>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12'>
                                <div className={styles.upcommingPodcastCard}>
                                    <div className={styles.upcommingPodcastCardImg}>
                                        <Image src="/home/card.webp" alt="card" width={412} height={165} className="img-fluid" />
                                    </div>
                                    <div className={styles.upcommingPodcastCardContent} id="upcommingPodcastCardContent">
                                        <h4>Masters’ Union Summer Startup Week</h4>
                                        <ul>
                                            <li>5th Jun 2023 - 11th Jun 2023</li>
                                            <li>Online</li>
                                        </ul>
                                        <p>Join the 7-day saga to experience a jam-packed week full of workshops, mentorship hours, panel discussions, fireside chats etc.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12'>
                                <div className={styles.upcommingPodcastCard}>
                                    <div className={styles.upcommingPodcastCardImg}>
                                        <Image src="/home/card.webp" alt="card" width={412} height={165} className="img-fluid" />
                                    </div>
                                    <div className={styles.upcommingPodcastCardContent} id="upcommingPodcastCardContent">
                                        <h4>Masters’ Union Summer Startup Week</h4>
                                        <ul>
                                            <li>5th Jun 2023 - 11th Jun 2023</li>
                                            <li>Online</li>
                                        </ul>
                                        <p>Join the 7-day saga to experience a jam-packed week full of workshops, mentorship hours, panel discussions, fireside chats etc.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12'>
                                <div className={styles.upcommingPodcastCardNext} id="upcommingPodcastCardNext">
                                    <h2>You are gonna be next!</h2>
                                    <CommonButton name="Register Now" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};
