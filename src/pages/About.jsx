import styles from "./About.module.css";

const skillGroups = [
	{
		title: "Frontend",
		skills: [
			"React",
			"TypeScript",
			"JavaScript (ES6+)",
			"Astro",
			"HTML5",
			"CSS3",
			"Tailwind CSS",
			"Three.js (en cours)",
		],
	},
	{
		title: "Backend",
		skills: [
			"Node.js",
			"Express",
			"Nitro",
			"Bun",
			"Hono",
			"Python",
			"FastAPI",
			"API REST",
		],
	},
	{ title: "Bases de données", skills: ["PostgreSQL", "Prisma ORM"] },
	{
		title: "Sécurité & validation",
		skills: [
			"Better Auth",
			"Zod",
			"Pydantic",
			"Gestion des sessions et des permissions",
		],
	},
	{
		title: "Intelligence artificielle",
		skills: ["Intégration de modèles IA", "Création d’API IA en Python"],
	},
	{ title: "CMS", skills: ["WordPress", "EmDash"] },
	{
		title: "DevOps & outils",
		skills: [
			"Git",
			"GitHub",
			"Docker (bases)",
			"Linux",
			"VPS",
			"SSH",
			"Vercel",
			"Postman",
			"VS Code",
		],
	},
];

export function About() {
	return (
		<section
			id="about"
			className={styles.aboutPage}
			aria-labelledby="about-title"
		>
			<div className={styles.aboutIntro}>
				<div>
					<h2 id="about-title" className={styles.aboutTitle}>
						À propos de moi
					</h2>
					<p className={styles.aboutRole}>Mohamed Chemirik · Développeur web</p>
				</div>
				<div className={styles.aboutStory}>
					<p>
						Développeur full-stack JavaScript / TypeScript avec 2 ans
						d’expérience entre startup et freelance. Je conçois des applications
						web complètes : interfaces React, API REST en Node.js, bases de
						données PostgreSQL et déploiement sur serveur Linux.
					</p>
					<p>
						J’intègre aussi des modèles d’IA dans des applications web avec
						Python et FastAPI.
					</p>
					<p>
						Issu d’une reconversion, j’ai créé mon agence web et un SaaS métier
						de A à Z : je sais transformer un besoin client en produit qui
						fonctionne.
					</p>
					<div className={styles.aboutActions}>
						<button
							type="button"
							className="btnPrimary"
							onClick={() => {
								window.location.href = "mailto:chemirik@icloud.com";
							}}
						>
							Me contacter
						</button>
					</div>
				</div>
			</div>
			<section className={styles.skillsSection} aria-labelledby="skills-title">
				<h3 id="skills-title" className={styles.blockTitle}>
					Mes compétences
				</h3>
				<dl className={styles.skillsList}>
					{skillGroups.map((group) => (
						<div key={group.title} className={styles.skillGroup}>
							<dt className={styles.skillTitle}>{group.title}</dt>
							<dd className={styles.skillDescription}>
								<ul className={styles.stackGrid}>
									{group.skills.map((skill) => (
										<li key={skill} className={styles.stackItem}>
											{skill}
										</li>
									))}
								</ul>
							</dd>
						</div>
					))}
				</dl>
			</section>
		</section>
	);
}
