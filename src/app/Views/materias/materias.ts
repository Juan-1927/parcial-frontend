import { Component, signal } from '@angular/core';
import { Table } from '../../Components/table/table';
import { MateriasService } from '../../Services/materias';
import { mensajeDeError } from '../../Services/mensaje-error';

@Component({
  selector: 'app-materias',
  standalone: true,
  imports: [Table],
  templateUrl: './materias.html',
  styleUrl: './materias.css',
})
export class Materias {
  readonly materias = signal<any[] | undefined>(undefined);
  readonly error = signal<string | null>(null);

  constructor(private materiasService: MateriasService) {
    this.materiasService.getMaterias().subscribe({
      next: (materias) => this.materias.set(materias),
      error: (error) => this.error.set(mensajeDeError(error, 'No se pudieron cargar las materias.')),
    });
  }
}
