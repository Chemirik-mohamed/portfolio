import conciergeriePreview from "../../assets/image/conciergerie-voyage.png";
import pizzaPreview from "../../assets/image/pizza.png";
import switchPreview from "../../assets/image/switch.png";
import zakatPreview from "../../assets/image/Zakat.png";
import styles from "./Projects.module.css";

const projects = [
	{
		title: "Velto Agency",
		description:
			"Un site d’agence de création et de développement web, déployé en production sur un VPS avec son propre nom de domaine.",
		tags: ["Web", "Site vitrine", "VPS"],
		link: "https://veltoagency.fr/",
		kind: "Web",
		image: "/images/velto-agency.png",
		imageWidth: 3160,
		imageHeight: 2004,
	},
	{
		title: "Off-grid",
		description:
			"Une API pour des projets solaires, avec calcul de consommation électrique, gestion des appareils et intégration des données PVGIS.",
		tags: ["TypeScript", "Express", "PostgreSQL", "Prisma"],
		link: "https://github.com/Chemirik-mohamed/offgrid-back",
		kind: "Back-End",
		image: "/images/offgrid.webp",
		imageWidth: 3408,
		imageHeight: 1782,
		linkLabel: "Voir le code sur GitHub",
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
		title: "Calculateur de Zakat",
		description:
			"Une application web pour calculer la Zakat.",
		tags: ["Web", "UI", "Produit"],
		link: "https://zakat-calculator-sigma.vercel.app/",
		kind: "Web",
		image: zakatPreview,
		imageWidth: 2750,
		imageHeight: 1362,
	},
	{
		title: "Switch — Pare-brise",
		description:
			"Un site de réparation et de remplacement de pare-brise à Grenoble, présentant les services et la demande de devis.",
		tags: ["Web", "Services", "Site vitrine"],
		link: "https://pare-brise-mu.vercel.app/",
		kind: "Web",
		image: switchPreview,
		imageWidth: 3424,
		imageHeight: 1760,
	},
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
		title: "Delaune Pizza",
		description:
			"Un site pour une pizzeria à Échirolles, avec une présentation du restaurant et de son offre.",
		tags: ["Web", "Restauration", "Site vitrine"],
		link: "https://delaune-pizza.vercel.app/",
		kind: "Web",
		image: pizzaPreview,
		imageWidth: 3376,
		imageHeight: 2006,
	},
	{
		title: "Conciergerie voyage",
		description:
			"Une vitrine élégante et rassurante pour une conciergerie premium, pensée pour inspirer confiance.",
		tags: ["Front‑End", "Branding", "Landing"],
		link: "https://leafy-pothos-1ced00.netlify.app/",
		kind: "Web",
		image: conciergeriePreview,
		imageWidth: 3422,
		imageHeight: 1672,
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
							{project.image ? (
								<img
									src={project.image}
									alt={`Aperçu ${project.title}`}
									loading="lazy"
									width={project.imageWidth}
									height={project.imageHeight}
								/>
							) : (
								<iframe
									title={`Aperçu ${project.title}`}
									src={project.preview}
									loading="lazy"
									referrerPolicy="no-referrer"
									sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
								/>
							)}
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
							{project.linkLabel || "Voir le projet"}
						</a>
					</article>
				))}
			</div>
		</section>
	);
}
