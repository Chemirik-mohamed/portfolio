import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Footer } from "../components/Footer/Footer";
import { Navbar } from "../components/Navbar/Navbar";
import { OverlayProvider } from "../context/OverlayContext";

export function MainLayout() {
	const { hash } = useLocation();
	useEffect(() => {
		if (hash)
			document
				.getElementById(hash.slice(1))
				?.scrollIntoView({ block: "start" });
	}, [hash]);
	return (
		<OverlayProvider>
			<div>
				<Navbar />
				<Outlet />
				<Footer />
			</div>
		</OverlayProvider>
	);
}
