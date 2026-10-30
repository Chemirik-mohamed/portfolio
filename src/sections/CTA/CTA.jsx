import styles from "./CTA.module.css";

export function CTA() {
	return (
		<section
			id="contact"
			className={styles.ctaSection}
			aria-labelledby="contact-title"
		>
			<div className={styles.ctaCard}>
				<p className={styles.ctaKicker}>Contact</p>
				<h2 id="contact-title" className={styles.ctaTitle}>
					Échangeons sur votre équipe et vos projets.
				</h2>
				<p className={styles.ctaSubtitle}>
					Vous recherchez un développeur web ? Contactez-moi à l’adresse{" "}
					<a href="mailto:chemirik@icloud.com">chemirik@icloud.com</a>.
				</p>
				<div className={styles.ctaActions}>
					<button
						type="button"
						className="btnPrimary"
						onClick={() => {
							window.location.href = "mailto:chemirik@icloud.com";
						}}
					>
						Me contacter
					</button>
					<a
						className="btnSecondary"
						href="https://www.linkedin.com/in/mohamed-chemirik-49b99a286/"
						target="_blank"
						rel="noreferrer"
					>
						LinkedIn
					</a>
					<a
						className="btnSecondary"
						href="https://github.com/Chemirik-mohamed"
						target="_blank"
						rel="noreferrer"
					>
						GitHub
					</a>
				</div>
			</div>
		</section>
	);
}
