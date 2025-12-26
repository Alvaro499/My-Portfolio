import Link from "next/link"

import Image from "next/image";

import styles from "@/styles/education-section.module.css";

export default function EducationSection() {

    return (

        <>
            <main className={styles.container}>
                <h2>Education</h2>

                <section className={styles.cardContainer}>

                    {/* CARD 1 */}
                    <div className={styles.card}>

                        <div className={styles.cardHeader}>
                            <h4 className={styles.cardTitle}>
                                Bachelor of Science in Computer Science
                            </h4>

                            <ul className={styles.cardTitleEquivalents}>
                                <li>Bachelor of Science</li>
                                <li>Bachelor of Science</li>
                            </ul>
                        </div>

                        <div className={styles.cardBody}>
                            <p className={styles.cardInstitution}>
                                University of Technology
                            </p>
                            <p className={styles.cardDuration}>
                                2015 - 2019
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
                                Technician in Design and Development Web
                            </h4>

                            <ul className={styles.cardTitleEquivalents}>
                            </ul>
                        </div>

                        <div className={styles.cardBody}>
                            <p className={styles.cardInstitution}>
                                Instituto Nacional de Aprendizaje (INA)
                            </p>
                            <p className={styles.cardDuration}>
                                201 - 2019
                            </p>
                        </div>

                        <div className={styles.cardFooter}>
                            <span>In Progress</span>
                        </div>

                    </div>

                    

                </section>

            </main>

        </>

    )
}