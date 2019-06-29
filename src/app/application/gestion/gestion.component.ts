import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { CrudService } from 'src/app/services/crud.service';
import {Produit} from '../entities/produit.entity'
@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.css'],
  providers: [CrudService]
})
export class GestionComponent implements OnInit {
  //produit: any = {};
  produit: Produit = new Produit();
  idProduit: any;
  constructor(private http: HttpClient, private route: Router, private cr: ActivatedRoute, private crud: CrudService) {
    this.cr.params.subscribe(param => this.idProduit = param.id)
  }
  /*title: String;
  description: String;
  price: String;
  type: String;*/


  ngOnInit() {
    console.log(this.idProduit)

    this.crud.getProductById(this.idProduit).subscribe(res => {
      this.produit = <Produit>res
      /* this.title = this.produit.title
      this.description = this.produit.description
      this.price = this.produit.price
      this.type = this.produit.product_type */
    })

    /*this.http.get('http://localhost:3000/produit/'+this.idProduit).subscribe(res=>{
      this.produit =  res
      this.title = this.produit.title
      this.description =  this.produit.description
      this.price = this.produit.price
      this.type = this.produit.product_type
    })*/
  }

  Save() {
    /*let produit = {
      "title": this.title,
      "description": this.description,
      "price": this.price,
      "product_type": this.type
    }*/

    this.crud.createNewProduct(this.produit).subscribe(res => {
      console.log(res);
      /*this.http.post('http://localhost:3000/produits',produit).subscribe(res=>{
      console.log(res);*/
      this.route.navigate(['/'])
    }, err => {
      console.log(err);
    }, () => {
      console.log("Création OK");
    }
    )

  }

  Update() {
    /*let produit = {
      "title": this.title,
      "description": this.description,
      "price": this.price,
      "product_type": this.type
    }*/

    this.crud.updateProductById(this.idProduit, this.produit).subscribe(res => {
      
      console.log(res);

    })
  }
}
