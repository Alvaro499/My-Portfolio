
import Link from "next/link";
import Image from "next/image";

import styles from "@/styles/introduction-banner.module.css";


import {
    Menu,
    User,
    Phone,
    Folder,
    Github, 
    Linkedin,
    FileText
} from 'lucide-react';


export default function IntroductionBanner() {

    return (
        <>

            <section className={styles.container}>

                <div className={styles.profilePhoto}>
                    <Image
                        src="/profile-photo/photo1.jpg"
                        alt="Profile Photo"
                        width={600}
                        height={400}
                    ></Image>

                </div>

                <div className={styles.hero}>

                    <h1 className={styles.heroGreet}>
                        Alvaro Siles
                    </h1>

                    <div className={styles.heroContent}>
                        <p>Lorem ipsum dolor sit ametam tempora, sequi et amet nesciunt, voluptatibus placeat temporibus voluptate, odit a laudantium fugit rerum ducimus. Ipsum.</p>
                    </div>

                    <div className={styles.heroOptions}>
                        <button className={styles.heroBtnResume}>
                            <FileText /> <span>Resumé</span>
                        </button>

                        <button className={styles.heroBtnLinked}>
                            <Linkedin /> <span>Linkedin</span>
                        </button>

                        <button className={styles.heroBtnGithub}>
                            <Github /> <span>GitHub</span>
                        </button>
                    </div>
                </div>

            </section>


        </>
    )
}