import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import styles from "./Signature.module.css";

export function Signature() {
	const cardsRef = useRef([]);
	const sectionRef = useRef(null);

	useEffect(() => {
		const section = sectionRef.current;
		const cards = cardsRef.current.filter(Boolean);

		if (!section || cards.length === 0) {
			return;
		}

		gsap.registerPlugin(ScrollTrigger);

		const ctx = gsap.context(() => {
			gsap.fromTo(
				cards,
				{ opacity: 0, y: 24, filter: "blur(6px)" },
				{
					opacity: 1,
					y: 0,
					filter: "blur(0px)",
					stagger: 0.15,
					duration: 0.6,
					ease: "power2.out",
					scrollTrigger: {
						trigger: section,
						start: "top 80%",
					},
				},
			);
		}, section);

		return () => ctx.revert();
	}, []);

	return (
		<section ref={sectionRef} className={styles.signatureSection}>
			<div className={styles.signatureIntro}>
				<p className={styles.signatureKicker}>Signature</p>
				<h2 className={styles.signatureTitle}>Ce que j’apporte</h2>
				<p className={styles.signatureSubtitle}>
					Un équilibre entre performance, design et immersion.
				</p>
			</div>
			<div className={styles.signatureGrid}>
				<article
					className={styles.signatureCard}
					ref={(el) => {
						cardsRef.current[0] = el;
					}}
				>
					<h3 className={styles.cardTitle}>Full‑Stack solide</h3>
					<p className={styles.cardText}>
						Architecture claire, API propres, base robuste.
					</p>
				</article>
				<article
					className={styles.signatureCard}
					ref={(el) => {
						cardsRef.current[1] = el;
					}}
				>
					<h3 className={styles.cardTitle}>Expériences immersives</h3>
					<p className={styles.cardText}>
						Interfaces 3D et interactions fluides avec Three.js.
					</p>
				</article>
				<article
					className={styles.signatureCard}
					ref={(el) => {
						cardsRef.current[2] = el;
					}}
				>
					<h3 className={styles.cardTitle}>Exécution propre</h3>
					<p className={styles.cardText}>
						Code maintenable, animations maîtrisées, détails soignés.
					</p>
				</article>
			</div>
		</section>
	);
}
