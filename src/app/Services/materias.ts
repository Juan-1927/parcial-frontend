import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MateriasService {
  private readonly url = `${environment.apiUrl}/materias`;

  constructor(private http: HttpClient) {}

  // Obtener todas las materias
  getMaterias(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }
}
