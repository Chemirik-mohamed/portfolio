import styles from "./Projects.module.css";

const projects = [
	{
		title: "Système solaire",
		description:
			"Une exploration 3D immersive avec des orbites fluides, une lumière précise et une navigation qui donne envie d’explorer.",
		tags: ["Three.js", "3D", "Expérience immersive"],
		link: "https://threejs-solar-system-beta.vercel.app/",
		kind: "3D",
		preview: "https://threejs-solar-system-beta.vercel.app/",
	},
	{
		title: "Maison hantée",
		description:
			"Une scène 3D atmosphérique avec éclairages dramatiques et micro‑interactions pour une ambiance cinématique.",
		tags: ["Three.js", "3D", "Ambiance"],
		link: "https://haunted-house-green-xi.vercel.app/",
		kind: "3D",
		preview: "https://haunted-house-green-xi.vercel.app/",
	},
	{
		title: "IHSEN — e‑commerce",
		description:
			"Une boutique full‑stack rapide et claire, orientée conversion, avec un parcours utilisateur fluide.",
		tags: ["Full‑Stack", "UI", "E‑commerce"],
		link: "https://ihsan-front-v2-d3l2.vercel.app/",
		kind: "Full‑Stack",
		preview: "https://ihsan-front-v2-d3l2.vercel.app/",
	},
	{
		title: "Conciergerie voyage",
		description:
			"Une vitrine élégante et rassurante pour une conciergerie premium, pensée pour inspirer confiance.",
		tags: ["Front‑End", "Branding", "Landing"],
		link: "https://leafy-pothos-1ced00.netlify.app/",
		kind: "Web",
		preview: "https://leafy-pothos-1ced00.netlify.app/",
	},
	{
		title: "Zakatmaal",
		description:
			"Une plateforme claire et rassurante, centrée sur la confiance et la simplicité du parcours utilisateur.",
		tags: ["Web", "UI", "Produit"],
		link: "https://zakatmaal.fr/",
		kind: "Web",
		preview: "https://zakatmaal.fr/",
	},
];

export function Projects() {
	return (
		<section id="projects" className={styles.projectsSection}>
			<div className={styles.projectsIntro}>
				<p className={styles.projectsKicker}>Projets</p>
				<h2 className={styles.projectsTitle}>Projets sélectionnés</h2>
				<p className={styles.projectsSubtitle}>
					Des expériences 3D immersives et des produits full‑stack construits
					pour durer.
				</p>
			</div>
			<div className={styles.projectsGrid}>
				{projects.map((project) => (
					<article key={project.title} className={styles.projectCard}>
						<div className={styles.projectPreview}>
							<iframe
								title={`Aperçu ${project.title}`}
								src={project.preview}
								loading="lazy"
								referrerPolicy="no-referrer"
								sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
							/>
						</div>
						<div className={styles.projectBadge}>{project.kind}</div>
						<h3 className={styles.projectTitle}>{project.title}</h3>
						<p className={styles.projectText}>{project.description}</p>
						<div className={styles.projectTags}>
							{project.tags.map((tag) => (
								<span key={tag} className={styles.projectTag}>
									{tag}
								</span>
							))}
						</div>
						<a
							className={`${styles.projectButton} btnSecondary`}
							href={project.link}
							target="_blank"
							rel="noreferrer"
						>
							Voir le projet
						</a>
					</article>
				))}
			</div>
		</section>
	);
}
