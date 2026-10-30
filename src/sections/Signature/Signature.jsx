import styles from "./Signature.module.css";

export function Signature() {
	return (
		<section
			className={styles.signatureSection}
			aria-labelledby="contribution-title"
		>
			<div className={styles.signatureIntro}>
				<h2 id="contribution-title" className={styles.signatureTitle}>
					Ce que j’apporte
				</h2>
				<p className={styles.signatureSubtitle}>
					Une pratique du web qui relie l’interface, les données et la mise en
					ligne.
				</p>
			</div>
			<div className={styles.signatureGrid}>
				<article className={styles.signatureCard}>
					<h3 className={styles.cardTitle}>
						Des interfaces pensées pour l’usage
					</h3>
					<p className={styles.cardText}>
						Je développe des interfaces avec React, TypeScript et Astro, en
						travaillant la lisibilité, la navigation et l’adaptation aux
						différents écrans.
					</p>
					<p className={styles.cardExample}>
						Dans mes projets : Delaune Pizza et Switch.
					</p>
				</article>
				<article className={styles.signatureCard}>
					<h3 className={styles.cardTitle}>La logique derrière l’écran</h3>
					<p className={styles.cardText}>
						Je construis des API et relie les données aux besoins de
						l’application : calculs métier, validation des entrées, sessions et
						permissions.
					</p>
					<p className={styles.cardExample}>
						Dans Off-grid : calcul de consommation et API TypeScript.
					</p>
				</article>
				<article className={styles.signatureCard}>
					<h3 className={styles.cardTitle}>
						Le suivi jusqu’à la mise en ligne
					</h3>
					<p className={styles.cardText}>
						Je déploie mes projets sur Vercel et sur VPS. Je travaille avec
						Linux, SSH et Git pour passer du développement local à un site
						accessible en ligne.
					</p>
					<p className={styles.cardExample}>
						Avec Velto Agency : un site en production sur VPS.
					</p>
				</article>
			</div>
		</section>
	);
}
