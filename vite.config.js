import { defineConfig } from "vite";

export default defineConfig({
	base: "/JsEjercicios/",
	server: {
		watch: {
			usePolling: true,
		},
	},
});
