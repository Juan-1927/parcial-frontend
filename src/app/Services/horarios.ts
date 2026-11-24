import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HorariosService {
  private readonly url = `${environment.apiUrl}/horarios`;

  constructor(private http: HttpClient) {}

  // Obtener todos los horarios
  getHorarios(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }
}
