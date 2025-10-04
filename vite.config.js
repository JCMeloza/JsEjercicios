import { defineConfig } from "vite";
import { resolve } from 'path';

export default defineConfig({
    base: "/JsEjercicios/",
    server: {
        watch: {
            usePolling: true,
        },
    },
    build: {
        outDir: 'dist',
        assetsDir: 'assets',
        rollupOptions: {
            input: {
				main: '/index.html',
				ejercicio1: '/src/js_ejercicio_1.html',
				ejercicio2: '/src/js_ejercicio_2.html',
				ejercicio3: '/src/js_ejercicio_3.html',
				ejercicio4: '/src/js_ejercicio_4.html',
				ejercicio5: '/src/js_ejercicio_5.html',
				ejercicio6: '/src/js_ejercicio_6.html',
				ejercicio7: '/src/js_ejercicio_7.html',
				ejercicio8: '/src/js_ejercicio_8.html',
				ejercicio9: '/src/js_ejercicio_9.html',
			},
		},
	},
});
