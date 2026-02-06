import styles from "./Footer.module.css";

export function Footer() {
	const year = new Date().getFullYear();

	return (
		<footer className={styles.footer}>
			<div className={styles.footerInner}>
				<p className={styles.footerText}>
					© {year} — Développeur Full‑Stack & 3D.
				</p>
				<div className={styles.footerLinks}>
					<a
						className={styles.footerLink}
						href="https://github.com/Chemirik-mohamed"
						target="_blank"
						rel="noreferrer"
					>
						GitHub
					</a>
					<a
						className={styles.footerLink}
						href="https://www.linkedin.com/in/mohamed-chemirik-49b99a286/"
						target="_blank"
						rel="noreferrer"
					>
						LinkedIn
					</a>
				</div>
			</div>
		</footer>
	);
}
