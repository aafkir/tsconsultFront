import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { EmployesService } from '../employes.service';
import { EntreprisesService } from '../entreprises.service';

@Component({
  selector: 'app-employes',
  templateUrl: './employes.component.html',
  styleUrls: ['./employes.component.css']
})
export class EmployesComponent implements OnInit {

  constructor( private employesService: EmployesService, private route: ActivatedRoute, private router : Router) {
    this.router.events.subscribe(e=>{
      if(e instanceof NavigationEnd){
        this.getEmployes(atob(route.snapshot.params.url));
      }
    });
    
   }
  products : any;
  employes : any;
  ngOnInit(): void {
    console.log(this.route);
  }

  getEmployes(url: any){
    this.employesService.getRessource(url)
      .subscribe(data=> {this.employes=data;
      console.log(data); }
        ,err=>console.log(err));
  }


}
