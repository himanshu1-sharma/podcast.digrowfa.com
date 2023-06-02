import React, { useState, useEffect } from 'react';
import styles from '@/styles/Navigation.module.css'
import Image from 'next/image'

export default function Navigation() {

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        // Function to handle scroll event
        const handleScroll = () => {
            // Check if window has scrolled beyond a certain threshold
            if (window.scrollY > 100) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener on unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <section className="container-fluid p-0">
                <nav className={isScrolled ? `${styles.navigation} ${styles.active}` : styles.navigation} id="navigation">
                    <div className='container'>
                        <div className={styles.logo}>
                            <Image src="/logo/logo.png" alt="logo" width={400} height={60} className='img-fluid' id="darkLogo" />
                            {/* <Image src="/logo/digrowfa.webp" alt="logo" width={200} height={40} className='img-fluid' id="lightLogo" /> */}
                        </div>
                    </div>
                </nav>
            </section>
        </>
    )
};
