import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EntreprisesService } from '../entreprises.service';

@Component({
  selector: 'app-entreprises',
  templateUrl: './entreprises.component.html',
  styleUrls: ['./entreprises.component.css']
})
export class EntreprisesComponent implements OnInit {

  constructor(private entreprisesService : EntreprisesService, private router: Router) { }
  entreprises : any;
  currentEntreprise : any;
  employes : any;
  ngOnInit(): void {
    this.entreprisesService.getAllEntreprises()
        .subscribe(data =>{this.entreprises = data;
        } 
        , err => {
          console.log(err);
        });
  }

  onGetEmployes(entreprise: any){
    this.currentEntreprise = entreprise;
    let url= entreprise._links.employes.href;
    console.log(url);
    this.router.navigateByUrl("/employes/"+btoa(url));
  }

}
