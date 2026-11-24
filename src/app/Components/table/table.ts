import { Component, input } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

// Tabla reutilizable: no tiene datos propios. Cada vista le pasa sus datos
// y la tabla crea sus columnas a partir de ellos.
@Component({
  selector: 'app-table',
  imports: [MatTableModule],
  templateUrl: './table.html',
  styleUrl: './table.css',
})
export class Table {
  // undefined mientras la vista todavia esta cargando los datos.
  readonly datos = input<any[] | undefined>(undefined);
  readonly etiqueta = input.required<string>();
  readonly error = input<string | null>(null);

  // Las columnas son los campos del primer registro (id, nombre, nrc...).
  columnas(): string[] {
    const primero = this.datos()?.[0];

    if (!primero) {
      return [];
    }

    return Object.keys(primero);
  }

  // Convierte el nombre del campo en un titulo: "nombre" -> "Nombre".
  titulo(campo: string): string {
    return campo.charAt(0).toUpperCase() + campo.slice(1);
  }
}
