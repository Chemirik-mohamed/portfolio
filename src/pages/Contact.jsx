import styles from "./Contact.module.css";

export function Contact() {
	return (
		<main className={styles.contactPage}>
			<section className={styles.contactHero}>
				<p className={styles.contactKicker}>Contact</p>
				<h1 className={styles.contactTitle}>Parlons de votre projet</h1>
				<p className={styles.contactSubtitle}>
					Expliquez-moi votre besoin et je vous propose une réponse claire et
					rapide.
				</p>
			</section>

			<section className={styles.contactGrid}>
				<form className={styles.contactForm}>
					<label className={styles.field}>
						<span>Nom</span>
						<input type="text" name="name" placeholder="Votre nom" />
					</label>
					<label className={styles.field}>
						<span>Email</span>
						<input type="email" name="email" placeholder="vous@email.com" />
					</label>
					<label className={styles.field}>
						<span>Message</span>
						<textarea name="message" rows="5" placeholder="Votre message..." />
					</label>
					<button type="submit" className="btnPrimary">
						Envoyer
					</button>
				</form>

				<div className={styles.contactInfo}>
					<div className={styles.infoBlock}>
						<h2>Coordonnées</h2>
						<p>
							Email :{" "}
							<a href="mailto:contact@exemple.com">contact@exemple.com</a>
						</p>
					</div>
					<div className={styles.infoBlock}>
						<h2>Réseaux</h2>
						<p>
							<a
								href="https://github.com/Chemirik-mohamed"
								target="_blank"
								rel="noreferrer"
							>
								GitHub
							</a>
						</p>
						<p>
							<a
								href="https://www.linkedin.com/in/mohamed-chemirik-49b99a286/"
								target="_blank"
								rel="noreferrer"
							>
								LinkedIn
							</a>
						</p>
					</div>
				</div>
			</section>
		</main>
	);
}
