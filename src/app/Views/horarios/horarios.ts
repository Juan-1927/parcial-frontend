import { Component, signal } from '@angular/core';
import { Table } from '../../Components/table/table';
import { HorariosService } from '../../Services/horarios';
import { mensajeDeError } from '../../Services/mensaje-error';

@Component({
  selector: 'app-horarios',
  standalone: true,
  imports: [Table],
  templateUrl: './horarios.html',
  styleUrl: './horarios.css',
})
export class Horarios {
  readonly horarios = signal<any[] | undefined>(undefined);
  readonly error = signal<string | null>(null);

  constructor(private horariosService: HorariosService) {
    this.horariosService.getHorarios().subscribe({
      next: (horarios) => this.horarios.set(horarios),
      error: (error) => this.error.set(mensajeDeError(error, 'No se pudieron cargar los horarios.')),
    });
  }
}
