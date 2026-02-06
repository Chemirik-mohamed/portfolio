import styles from "./Process.module.css";

const steps = [
	{
		title: "Découverte",
		text: "On clarifie vos objectifs, le contexte et la cible pour cadrer un plan solide.",
	},
	{
		title: "Conception",
		text: "On design l’interface et les interactions, puis on pose une base technique propre.",
	},
	{
		title: "Livraison",
		text: "On livre une version stable, performante et prête à évoluer.",
	},
];

export function Process() {
	return (
		<section className={styles.processSection}>
			<div className={styles.processIntro}>
				<p className={styles.processKicker}>Process</p>
				<h2 className={styles.processTitle}>Une méthode claire</h2>
				<p className={styles.processSubtitle}>
					Un parcours simple, efficace et transparent pour avancer vite.
				</p>
			</div>
			<div className={styles.processGrid}>
				{steps.map((step, index) => (
					<article key={step.title} className={styles.processCard}>
						<div className={styles.stepIndex}>{`0${index + 1}`}</div>
						<h3 className={styles.stepTitle}>{step.title}</h3>
						<p className={styles.stepText}>{step.text}</p>
					</article>
				))}
			</div>
		</section>
	);
}
