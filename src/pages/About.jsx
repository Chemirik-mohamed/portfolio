import { useOverlay } from "../context/OverlayContext";
import styles from "./About.module.css";

export function About() {
	const { openOverlay } = useOverlay();

	return (
		<main className={styles.aboutPage}>
			<section className={styles.aboutHero}>
				<p className={styles.aboutKicker}>À propos</p>
				<h1 className={styles.aboutTitle}>Développeur web junior</h1>
				<p className={styles.aboutSubtitle}>
					Je construis des expériences web claires et efficaces. Ma stack :
					JavaScript, React, Tailwind, Node.js, PostgreSQL, Prisma et Express.
					J’apprends Three.js en ce moment.
				</p>
				<div className={styles.aboutActions}>
					<button
						type="button"
						className="btnPrimary"
						onClick={() => openOverlay("project")}
					>
						Démarrer un projet
					</button>
					<button type="button" className="btnSecondary">
						Télécharger le CV
					</button>
				</div>
			</section>

			<section className={styles.aboutContent}>
				<div className={styles.aboutBlock}>
					<h2 className={styles.blockTitle}>À propos</h2>
					<p className={styles.blockText}>
						Développeur web junior, je crée des sites et applications modernes
						avec une attention particulière à la clarté, aux performances et à
						la qualité du code.
					</p>
				</div>
			</section>
		</main>
	);
}
