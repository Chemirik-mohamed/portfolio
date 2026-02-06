import styles from "./Testimonial.module.css";

export function Testimonial() {
	return (
		<section className={styles.testimonialSection}>
			<div className={styles.testimonialCard}>
				<p className={styles.testimonialKicker}>Témoignage</p>
				<p className={styles.testimonialQuote}>
					“Le travail livré est propre, rapide et très soigné. Communication
					claire, exécution impeccable, je recommande sans hésiter.”
				</p>
				<div className={styles.testimonialAuthor}>
					<span className={styles.authorName}>Ihsan</span>
					<span className={styles.authorRole}>Client — E‑commerce</span>
				</div>
			</div>
		</section>
	);
}
