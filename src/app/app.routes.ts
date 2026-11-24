import { Routes } from '@angular/router';
import { Materias } from './Views/materias/materias';
import { Horarios } from './Views/horarios/horarios';

export const routes: Routes = [
  { path: 'materias', component: Materias },
  { path: 'horarios', component: Horarios },
  { path: '', redirectTo: 'materias', pathMatch: 'full' }
];
