import { Injectable } from '@angular/core';
import {Departement} from "../model/departement.model";
@Injectable({
  providedIn: 'root'
})
export class DepartementService {

  departements : Departement[];
  departement: Departement ;

  constructor() {
    this.departements = [
      {idDepartement : 1, nomDepartement : "Technologie de l informatique     ", nombreEtudiants : 500, dateCreation : new Date("01/14/2011")},
      {idDepartement : 2, nomDepartement : "Genie mecanique", nombreEtudiants : 450, dateCreation : new Date("12/17/2010")},
      {idDepartement : 3, nomDepartement :"Genie Civil", nombreEtudiants : 200, dateCreation : new Date("02/20/2013")}
      ];
   }

   listeDepartements():Departement[] {
    return this.departements;
  }
  ajouterDepartement( prod: Departement){
  this.departements.push(prod);
  }

  supprimerDepartement( dep: Departement){
    //supprimer le departement dep du tableau departements
    const index = this.departements.indexOf(dep, 0);
    if (index > -1) {
    this.departements.splice(index, 1);
    }
    //ou Bien
    /* this.departements.forEach((cur, index) => {
    if(dep.idDepartement === cur.idDepartement) {
    this.departements.splice(index, 1);
    }
    }); */
    }

    consulterDepartement(id:number): Departement{
      this.departement = this.departements.find(p => p.idDepartement == id);
      return this.departement;
      }

      updateDepartement(dep:Departement)
{
// console.log(p);
this.supprimerDepartement(dep);
this.ajouterDepartement(dep);
this.trierDepartements();
}

trierDepartements(){
  this.departements = this.departements.sort((n1,n2) => {
  if (n1.idDepartement > n2.idDepartement) {
  return 1;
  }
  if (n1.idDepartement < n2.idDepartement) {
  return -1;
  }
  return 0;
  });
  }

}
