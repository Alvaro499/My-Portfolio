import Link from "next/link";
import { useState, useEffect, useRef } from "react";

import styles from "./navbar.module.css"

import { Menu, User, Phone, Briefcase, Folder, GraduationCap, Cpu } from 'lucide-react';

export default function Navbar() {
    const [menuState, setMenuState] = useState(false);
     const navbarRef = useRef(null);
     
    useEffect(() => {
        function handleClickOutside(event) {
            if (
                menuState &&
                navbarRef.current &&
                !navbarRef.current.contains(event.target)
            ) {
                setMenuState(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [menuState]);

    return (
        <>
            <header className={styles.headerContainer} ref={navbarRef}>

                <nav className={styles.globalNavbar}>

                    <ul className={`${styles.navList} ${menuState ? styles.navListActive : ""}`}>
                        <li className={styles.menuLink} onClick={() => setMenuState(!menuState)}>
                            <Link href="#me"><Menu /><span>Menu</span></Link>
                        </li>

                        <li>
                            <Link href="/"><User /><span>Me</span></Link>
                        </li>
                        <li>
                            <Link href="/#degrees"><GraduationCap /><span>Degrees</span></Link>
                        </li>
                        <li>
                            <Link href="/#tech"><Cpu /><span>Technologies</span></Link>
                        </li>
                        <li>
                            <Link href="/#projects"><Briefcase /><span>Projects</span></Link>
                        </li>
                        <li>
                            <Link href="/#contact"><Phone /><span>Contact</span></Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}