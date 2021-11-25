import { Component, OnInit } from '@angular/core';
import {Departement} from "../model/departement.model";
import { ActivatedRoute,Router } from '@angular/router';
import { DepartementService } from '../services/departement.service';


@Component({
  selector: 'app-add-departement',
  templateUrl: './add-departement.component.html',
  styleUrls: ['./add-departement.component.css']
})
export class AddDepartementComponent implements OnInit {

  newDepartement = new Departement();

  message :String ;

  constructor(private activatedRoute: ActivatedRoute,
    private router :Router,
    private departementServices : DepartementService) { }

  ngOnInit(): void {
  }

  addDepartement(){
    //console.log(this.newDepartement);
    this.departementServices.ajouterDepartement(this.newDepartement);
    this.router.navigate(['departements']);
    
  
    }


}
