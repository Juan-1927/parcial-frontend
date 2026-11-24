import { HttpErrorResponse } from '@angular/common/http';

// Convierte un error de la API en un texto que se puede mostrar al usuario.
export function mensajeDeError(error: HttpErrorResponse, porDefecto: string): string {
  if (error.status === 0) {
    return 'No se pudo conectar con el servidor. Comprueba que el backend esté en marcha.';
  }

  return error.error?.message ?? porDefecto;
}
