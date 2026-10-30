import { Navigate, Route, Routes } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";
import { Home } from "./pages/Home";

export function App() {
	return (
		<Routes>
			<Route path="/" element={<MainLayout />}>
				<Route index element={<Home />} />
				<Route path="about" element={<Navigate to="/#about" replace />} />
				<Route path="contact" element={<Navigate to="/#contact" replace />} />
			</Route>
		</Routes>
	);
}
