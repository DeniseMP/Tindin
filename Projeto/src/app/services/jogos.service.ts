import{Jogos} from '../models/placeholder.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JogosService {
  constructor(private http: HttpClient) { }

  public getJogos(): Observable<any>{
    return this.http.get('https://api-labs.tindin.com.br/games');
  }


}
