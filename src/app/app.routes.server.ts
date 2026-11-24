import { RenderMode, ServerRoute } from '@angular/ssr';

// Estas rutas piden datos a la API, por eso se renderizan en el navegador.
export const serverRoutes: ServerRoute[] = [
  { path: 'materias', renderMode: RenderMode.Client },
  { path: 'horarios', renderMode: RenderMode.Client },
  { path: '**', renderMode: RenderMode.Prerender }
];
