import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { DepartementService } from '../departement.service';
import { Departement } from 'src/app/model/departement.model';



@Component({
  selector: 'app-update-departement',
  templateUrl: './update-departement.component.html',
  styles: []
})
export class UpdateDepartementComponent implements OnInit {

  currentDepartement = new Departement();

  constructor(private activatedRoute: ActivatedRoute,
              private router : Router,
              private departementService: DepartementService) { }
    
    ngOnInit() {
    // console.log(this.route.snapshot.params.id);
    this.currentDepartement = this.departementService.consulterDepartement(this.activatedRoute.snapshot.params.id);
    console.log(this.currentDepartement);
    } 
    updateDepartement()
    { //console.log(this.currentProduit);
    this.departementService.updateDepartement(this.currentDepartement);

    this.router.navigate(['departements']);
    }
  
  }
