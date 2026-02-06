import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";

export function App() {
	return (
		<Routes>
			<Route path="/" element={<MainLayout />}>
				<Route index element={<Home />} />
				<Route path="about" element={<About />} />
				<Route path="contact" element={<Contact />} />
			</Route>
		</Routes>
	);
}
