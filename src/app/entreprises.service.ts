import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EntreprisesService {

  constructor(private httpClient: HttpClient) { }

  public host: string = "http://localhost:8080";
  getAllEntreprises( ){
    return this.httpClient.get(this.host+ "/entreprises");
  }

  getRessource(url : string){
    return this.httpClient.get(url);
  }


}
 