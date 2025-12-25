import Link from "next/link"

import Image from "next/image";

import styles from "@/styles/education-section.module.css";

export default function EducationSection() {

    return (

        <>
            <main className={styles.container}>

                <section className={styles.cardContainer}>
                    <h2>Education</h2>
                    <div style={styles.card}>

                        <div cardTitleContainer>
                            <h2 className={styles.cardTitle}>Bachelor of Science in Computer Science</h2>
                            <ul style={styles.cardTitleEquivalents}>
                                <li>Bachelor of Science </li>
                                <li>Bachelor of Science </li>
                                <li>Bachelor of Science </li>
                            </ul>
                        </div>
                        <p className={styles.cardInstitution}>University of Technology</p>
                        <p className={styles.cardDuration}>2015 - 2019</p>
                        <span>In Progress</span>
                    </div>

                    <div style={styles.card}>

                        <div cardTitleContainer>
                            <h2 className={styles.cardTitle}>Technician in Design and Development Web</h2>
                            <ul style={styles.cardTitleEquivalents}>
                                
                            </ul>
                        </div>
                        <p className={styles.cardInstitution}>Instituto Nacional de Aprendizaje (INA)</p>
                        <p className={styles.cardDuration}>201 - 2019</p>
                        <span>In Progress</span>
                    </div>
                </section>
            </main>

        </>

    )
}