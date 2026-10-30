import { useState } from "react";
import styles from "./Hero.module.css";

export function Hero() {
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
	const [isHovering, setIsHovering] = useState(false);

	const scrollToProjects = () => {
		const section = document.getElementById("projects");
		if (section) {
			section.scrollIntoView({ behavior: "smooth", block: "start" });
		}
	};

	const handleMouseMove = (e) => {
		const rect = e.currentTarget.getBoundingClientRect();
		setMousePosition({
			x: e.clientX - rect.left,
			y: e.clientY - rect.top,
		});
	};

	// Objet de variables pour le CSS
	const cssVariables = {
		"--x": `${mousePosition.x}px`,
		"--y": `${mousePosition.y}px`,
	};

	return (
		<header className={styles.headerContainer} style={cssVariables}>
			<section
				className={styles.headerInteractive}
				onMouseMove={handleMouseMove}
				onMouseEnter={() => setIsHovering(true)}
				onMouseLeave={() => setIsHovering(false)}
				aria-label="Zone de survol du hero"
			/>
			{isHovering && <div className={styles.spotlightOverlay} />}

			<div className={styles.headerContent}>
				<p className={styles.headerKicker}>Portfolio</p>
				<h1 className={styles.headerTitle}>Développeur Full-Stack</h1>
				<p className={styles.headerSubtitle}>
					Je conçois des expériences web immersives et des interfaces 3D avec
					Three.js.
				</p>
				<div className={styles.headerActions}>
					<button
						type="button"
						className={`${styles.heroButton} btnPrimary`}
						onClick={() => {
							window.location.href = "mailto:chemirik@icloud.com";
						}}
					>
						Me contacter
					</button>
					<button
						type="button"
						className={`${styles.heroButton} btnSecondary`}
						onClick={scrollToProjects}
					>
						Voir les projets
					</button>
				</div>
			</div>
		</header>
	);
}
