import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.tsx";

const root = document.getElementById("root") as Element;

createRoot(root).render(
	<StrictMode>
		<App />
	</StrictMode>,
);
