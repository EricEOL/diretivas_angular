import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export type ApiResponse = {
  infos: any[];
  results: any[];
}

@Injectable({
  providedIn: 'root'
})
export class ListService {

  private apiUrl: string = 'https://rickandmortyapi.com/api/character';
  
  constructor(private httpClient: HttpClient) {}

  getList(): Observable<ApiResponse> {
    return this.httpClient.get<ApiResponse>(this.apiUrl);
  }

}