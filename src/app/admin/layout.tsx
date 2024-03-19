import React from "react";
import Mona from "next/font/local";
import styles from './layout.module.css'
import {Navbar} from "@/app/admin/components/Navbar";
import {Footer} from "@/app/admin/components/Footer";

const mona = Mona({
	src: '../../../public/fonts/Mona/Mona-Sans.ttf',
	variable: '--font-mona',
});

export default function RootLayout({children}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<div className={`${styles.layout} ${mona.className}`}>
				<div className={styles.navContainer}>
					<Navbar />
				</div>
				<div className={styles.bodyContainer}>
					{children}
					<div className={styles.footerContainer}>
						<Footer />
					</div>
				</div>
			</div>
		</>
	);
}
