import Link from "next/link";
import { useState } from "react";

import styles from "./navbar.module.css"

import { Menu, User, Phone, Telephone, Folder} from 'lucide-react';

export default function Navbar() {
    const [menuState, setMenuState] = useState(false);

    return (
        <>
            <header className={styles.headerContainer}>

                <nav className={styles.globalNavbar}>
    
                    <ul className={`${styles.navList} ${menuState ? styles.navListActive : ""}`}>
                        <li className={styles.menuLink} onClick={() => setMenuState(!menuState)}>
                            <Link href="/"><Menu /><span>Menu</span></Link>
                        </li>

                        <li>
                            <Link href="/"><User /><span>Inicio</span></Link>
                        </li>
                        <li>
                            <Link href="/"><User /><span>Technologies</span></Link>
                        </li>
                        <li>
                            <Link href="/"><Folder/><span>Projects</span></Link>
                        </li>
                        <li>
                            <Link href="/"><Folder/><span>Degrees</span></Link>
                        </li>
                        <li>
                            <Link href="/"><Phone /><span>Contact</span></Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}