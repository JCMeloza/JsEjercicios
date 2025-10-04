import { defineConfig } from "vite";
import { resolve } from "path";
import fs from "fs";

// 🧠 Función que detecta todos los archivos HTML en src/
function getHtmlEntries() {
	const srcDir = resolve(__dirname, "src");
	const files = fs.readdirSync(srcDir);

	const htmlEntries = {
		main: resolve(__dirname, "index.html"), // tu index principal fuera de src
	};

	files.forEach((file) => {
		if (file.endsWith(".html")) {
			const name = file.replace(".html", ""); // elimina la extensión
			htmlEntries[name] = resolve(srcDir, file);
		}
	});

	return htmlEntries;
}

// 🚀 Configuración de Vite
export default defineConfig({
	base: "/JsEjercicios/",
	server: {
		watch: {
			usePolling: true,
		},
	},
	build: {
		outDir: "dist",
		assetsDir: "assets",
		rollupOptions: {
			input: getHtmlEntries(), // usamos la función dinámica
		},
	},
});
