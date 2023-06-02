import styles from '@/styles/Home.module.css'
import { Link } from "react-scroll";

export default function CommonButton({ name }) {
    return (
        <>
            <div className={styles.commonButton} id="commonButton">
                <Link to="contact" spy={true} smooth={true} offset={0} duration={500}>
                    <button>{name}</button>
                </Link>
            </div>
        </>
    )
};
