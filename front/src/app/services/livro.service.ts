import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Livro } from '../models/livro';


@Injectable({
  providedIn: 'root'
})
export class LivroService {

  private baseUrl = "http://localhost:5000/api/livro"

  constructor(private http: HttpClient) { }

  list(): Observable<Livro[]> {
    return this.http.get<Livro[]>(`${this.baseUrl}/list`);
  }
  create(livro: Livro): Observable<Livro>{
    return this.http.post<Livro>(`${this.baseUrl}/create`, livro);
  }

}
