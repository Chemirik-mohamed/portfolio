import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import logoKyros from "../../assets/image/logo-kyros.png";
import { useOverlay } from "../../context/OverlayContext";
import { IconWrap } from "../IconWrap/IconWrap";
import styles from "./Navbar.module.css";

export function Navbar() {
	const { activeOverlay, openOverlay, closeOverlay } = useOverlay();
	const overlayRef = useRef(null);
	const overlayContentRef = useRef(null);
	const overlayMenuRef = useRef(null);

	useEffect(() => {
		const overlay = overlayRef.current;
		const content = overlayContentRef.current;

		if (!overlay) {
			return;
		}

		if (activeOverlay) {
			gsap.set(overlay, { pointerEvents: "auto" });
			gsap.to(overlay, {
				height: "100vh",
				duration: 0.6,
				ease: "power3.out",
			});
			if (content) {
				gsap.fromTo(
					content,
					{ opacity: 0, y: 16 },
					{ opacity: 1, y: 0, duration: 0.45, delay: 0.15, ease: "power2.out" },
				);
			}
			document.body.style.overflow = "hidden";
		} else {
			gsap.to(overlay, {
				height: "0vh",
				duration: 0.5,
				ease: "power3.in",
				onComplete: () => {
					gsap.set(overlay, { pointerEvents: "none" });
				},
			});
			if (content) {
				gsap.to(content, {
					opacity: 0,
					y: 10,
					duration: 0.2,
					ease: "power2.in",
				});
			}
			document.body.style.overflow = "";
		}
	}, [activeOverlay]);

	useEffect(() => {
		if (activeOverlay !== "menu") {
			return;
		}

		const menu = overlayMenuRef.current;
		if (!menu) {
			return;
		}

		const letters = menu.querySelectorAll("[data-letter]");
		gsap.set(letters, { opacity: 0, y: 12 });
		gsap.to(letters, {
			opacity: 1,
			y: 0,
			stagger: 0.03,
			duration: 0.4,
			ease: "power2.out",
			delay: 0.2,
		});
	}, [activeOverlay]);

	const renderLetters = (text) => {
		const counts = new Map();

		return Array.from(text).map((char) => {
			const count = (counts.get(char) ?? 0) + 1;
			counts.set(char, count);

			return (
				<span key={`${char}-${count}`} data-letter className={styles.letter}>
					{char}
				</span>
			);
		});
	};

	const menuLinks = [
		{ to: "#home", label: "Accueil" },
		{ to: "#projects", label: "Projets" },
		{ to: "#about", label: "À propos" },
		{ to: "#contact", label: "Contact" },
	];

	return (
		<nav className={styles.navbar}>
			<div className={styles.navbarlogo}>
				<img src={logoKyros} alt="" className={styles.logoImg} />
			</div>
			<div className={styles.navbarLinks}>
				{menuLinks.map((link) => (
					<a key={link.to} className={styles.link} href={link.to}>
						{link.label}
					</a>
				))}
			</div>
			<button
				type="button"
				className={styles.navbarButton}
				onClick={() => {
					window.location.href = "mailto:chemirik@icloud.com";
				}}
			>
				Me contacter
			</button>
			<button
				type="button"
				className={styles.menuButton}
				onClick={() => openOverlay("menu")}
				aria-label="Ouvrir le menu"
				aria-expanded={activeOverlay === "menu"}
			>
				<IconWrap name={activeOverlay === "menu" ? "X" : "Menu"} size={22} />
			</button>
			<div
				ref={overlayRef}
				className={styles.fullscreenOverlay}
				aria-hidden={!activeOverlay}
			>
				<div ref={overlayContentRef} className={styles.overlayContent}>
					<div className={styles.overlayTop}>
						<p className={styles.overlayKicker}>
							{activeOverlay === "menu" ? "Menu" : "Me contacter"}
						</p>
						<button
							type="button"
							className={styles.overlayClose}
							onClick={closeOverlay}
							aria-label="Fermer"
						>
							<IconWrap name="X" size={20} />
						</button>
					</div>
					{activeOverlay === "menu" && (
						<div ref={overlayMenuRef} className={styles.overlayMenu}>
							{menuLinks.map((link) => (
								<a
									key={link.to}
									className={styles.overlayLink}
									href={link.to}
									onClick={closeOverlay}
								>
									{renderLetters(link.label)}
								</a>
							))}
						</div>
					)}
					{activeOverlay === "project" && (
						<>
							<h2 className={styles.overlayTitle}>
								Construisons quelque chose de précis.
							</h2>
							<p className={styles.overlaySubtitle}>
								Parlez-moi de votre idée, du planning et de vos objectifs. Je
								réponds avec un plan clair.
							</p>
							<div className={styles.overlayActions}>
								<button type="button" className="btnPrimary">
									Planifier un appel
								</button>
								<button type="button" className="btnSecondary">
									Envoyer un message
								</button>
							</div>
						</>
					)}
				</div>
			</div>
		</nav>
	);
}
