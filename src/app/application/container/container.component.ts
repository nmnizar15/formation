import { Component, OnInit } from '@angular/core';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { log } from 'util';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  imageURL:string = "https://www.logogenie.fr/images/articles/logo-sprucing.jpg";
  state: boolean = false;
  Count: number = 10;
  message:string = "hello"
  Name:string
  Email:string
  Phone:string
  About:string
  date : Date = new Date()

  NameX:string
  EmailX:string
  PhoneX:string
  
  HEROES = [
    {id: 1, name:'Superman'},
    {id: 2, name:'Batman'},
    {id: 5, name:'BatGirl'},
    {id: 3, name:'Robin'},
    {id: 4, name:'Flash'}
    ];

    personne = [];

  constructor() { console.log('Const exe')}

  ngOnInit() {
    console.log('OnInit exe')
  }

  
  ClickEvent(){
    this.state = true;
    alert(this.state);
  }
  ClickPlus(){
    this.Count ++;
  }
  ClickMoins(){
    this.Count --;
  }
  AfficheMessage(){
    alert(this.message);
  }
  AfficherForm(){
    alert(" Nom et Prénom: "+this.Name+" Email: "+this.Email+" Phone: "+this.Phone+" About: "+this.About);
    let Data = {
      nom : this.Name,
      mail : this.Email,
      tel : this.Phone,
      des : this.About,
    }
    console.log(Data)
  }
  Annuler(){
    this.Name ="";
    this.Email ="";
    this.Phone ="";
    this.About ="";
  }
  AjouterLigne(){
    let Data = {
      NameY : this.NameX,
      EmailY : this.EmailX,
      PhoneY : this.PhoneX,
    }
    
    this.personne.push(Data); /* ajouter dans un tableau à la fin */

    this.NameX ="";
    this.EmailX ="";
    this.PhoneX ="";
  }
}
