import { useOverlay } from "../../context/OverlayContext";
import styles from "./CTA.module.css";

export function CTA() {
	const { openOverlay } = useOverlay();

	return (
		<section className={styles.ctaSection}>
			<div className={styles.ctaCard}>
				<p className={styles.ctaKicker}>Prêt à démarrer</p>
				<h2 className={styles.ctaTitle}>
					Construisons quelque chose de précis.
				</h2>
				<p className={styles.ctaSubtitle}>
					Parlez‑moi de votre idée, du planning et de vos objectifs. Je vous
					réponds avec un plan clair.
				</p>
				<div className={styles.ctaActions}>
					<button
						type="button"
						className="btnPrimary"
						onClick={() => openOverlay("project")}
					>
						Démarrer un projet
					</button>
					<button type="button" className="btnSecondary">
						Envoyer un message
					</button>
				</div>
			</div>
		</section>
	);
}
