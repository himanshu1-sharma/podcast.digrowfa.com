import CommonButton from '@/components/CommonButton/CommonButton'
import styles from '@/styles/CallToAction.module.css'
import Image from 'next/image'

export default function CallToAction() {
    return (
        <>
            <section className="container-fluid p-0">
                <div className={styles.callToActionBg} id="callToActionBg">
                    <div className={styles.callToActionOverlay}>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12'>
                                    <div className={styles.callToActionContent} id="callToActionContent">
                                        <h2 className="mb-5">Explore Digrowfa  latest or previously <span>Launched Successful Business </span> podcast series</h2>
                                        <CommonButton name="Explore Now" />
                                    </div>
                                </div>
                                {/* <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12'>
                                    <div className={styles.callToActionImg}>
                                        <Image src="/home/02.png" alt="calltoaction" width={648} height={280} className='img-fluid' />
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};
