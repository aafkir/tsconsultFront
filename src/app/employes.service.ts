import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployesService {

  constructor(private httpClient: HttpClient) { }
  
  getRessource(url : string){
    return this.httpClient.get(url);
  }
}
