import CommonButton from '@/components/CommonButton/CommonButton'
import styles from '@/styles/StartPodcast.module.css'

export default function StartPodcast() {
    return (
        <>
            <section className="container-fluid p-0">
                <div className={styles.startPodcastBg} id="startPodcastBg">
                    <div className='container'>
                        <div className='row d-flex justify-content-center'>
                            <div className='col-xl-5 col-lg-5 col-md-6 col-sm-12 col-12'>
                                <div className={styles.StartPodcastCard} id="StartPodcastCard">
                                    <h2>Just starting out?</h2>
                                    <h4>Create and host your show here</h4>
                                    <p>Enjoy unlimited hosting and distribute your podcast everywhere. Take advantage of our all-in-one, free platform with recording, editing, analytics, fan engagement, and monetization tools.</p>
                                    <CommonButton name="Start a podcast" />
                                </div>
                            </div>
                            <div className='col-xl-5 col-lg-5 col-md-6 col-sm-12 col-12'>
                                <div className={styles.StartPodcastCard} id="StartPodcastCard">
                                    <h2>Just starting out?</h2>
                                    <h4>Create and host your show here</h4>
                                    <p>Enjoy unlimited hosting and distribute your podcast everywhere. Take advantage of our all-in-one, free platform with recording, editing, analytics, fan engagement, and monetization tools.</p>
                                    <CommonButton name="Start a podcast" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};
