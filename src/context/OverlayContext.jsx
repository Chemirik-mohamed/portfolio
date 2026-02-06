import {
	createContext,
	useCallback,
	useContext,
	useMemo,
	useState,
} from "react";

const OverlayContext = createContext(null);

export function OverlayProvider({ children }) {
	const [activeOverlay, setActiveOverlay] = useState(null);

	const openOverlay = useCallback((type) => {
		setActiveOverlay(type);
	}, []);

	const closeOverlay = useCallback(() => {
		setActiveOverlay(null);
	}, []);

	const value = useMemo(
		() => ({ activeOverlay, openOverlay, closeOverlay }),
		[activeOverlay, openOverlay, closeOverlay],
	);

	return (
		<OverlayContext.Provider value={value}>{children}</OverlayContext.Provider>
	);
}

export function useOverlay() {
	const context = useContext(OverlayContext);

	if (!context) {
		throw new Error("useOverlay must be used within OverlayProvider");
	}

	return context;
}
