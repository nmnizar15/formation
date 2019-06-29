import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Employe';
  nom: string="bouabdallah";
    prenom: string="nizar";
    date_naissance: Date= new Date("05/15/1987");
    num_tel: number=53989833;
    poste: string="dev";
    adresse: string="bardo";
    Iage:number;
    Iposte:string;


    calculateAge(): number { // birthday is a date
        var anne_naissance =this.date_naissance.getFullYear();
        var anne_today = new Date().getUTCFullYear(); // miliseconds from epoch
        return anne_today-anne_naissance;
    }

    get_poste():string {
        return this.poste;
    }

    ngOnInit(){
     this.Iage =  this.calculateAge();
     this.Iposte = this.get_poste();
    }
}

