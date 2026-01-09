import Link from "next/link"

import Image from "next/image";

import styles from "@/styles/education-section.module.css";

export default function EducationSection() {

    return (

        <>
            <main className={styles.container} id="degrees">
                <h2>Education</h2>

                <section className={styles.cardContainer}>

                    {/* CARD 1 */}
                    <div className={styles.card}>

                        <div className={styles.cardHeader}>
                            <h4 className={styles.cardTitle}>
                                Bachelor’s Degree in Business Informatics
                            </h4>

                            {/* <ul className={styles.cardTitleEquivalents}>
                                <li>Bachelor of Science</li>
                                <li>Bachelor of Science</li>
                            </ul> */}
                        </div>

                        <div className={styles.cardBody}>
                            <p className={styles.cardInstitution}>
                                University of Costa Rica (UCR)
                            </p>
                            <p className={styles.cardDuration}>
                                2022 - 2026 (Expected)
                            </p>
                        </div>

                        <div className={styles.cardFooter}>
                            <span>In Progress</span>
                        </div>

                    </div>

                    {/* CARD 2 */}
                    <div className={styles.card}>

                        <div className={styles.cardHeader}>
                            <h4 className={styles.cardTitle}>
                                Web Design and Development Technician
                            </h4>

                            <ul className={styles.cardTitleEquivalents}>
                            </ul>
                        </div>

                        <div className={styles.cardBody}>
                            <p className={styles.cardInstitution}>
                                Instituto Nacional de Aprendizaje (INA)
                            </p>
                            <p className={styles.cardDuration}>
                                2021 - 2022
                            </p>
                        </div>

                        <div className={styles.cardFooter}>
                            <span>Completed</span>
                        </div>

                    </div>

                    

                </section>

            </main>

        </>

    )
}