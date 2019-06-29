import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/services/crud.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers:[CrudService]
})
export class DashboardComponent implements OnInit {
produit : any =[];
  constructor(private http:HttpClient, private route:Router, private crud:CrudService) { }

  ngOnInit() {
    this.getAll();
    

    /*this.crud.getAllProducts().subscribe(res=>{
      this.produit = res;
      console.log(this.produit)
       })*/

      /* this.http.get('http://localhost:3000/produits').subscribe(res=>{
      this.produit = res;
      console.log(this.produit) 
      }) */
   
  }

  getAll(){
    this.crud.getAllProducts().subscribe(res=>{
      this.produit = res;
      console.log(this.produit)
    }) 
  }

  MajForm(produit){
    console.log(produit);
    this.route.navigate(['/gestion', produit])
  }
  SuppForm(produit){
    console.log(produit);
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this imaginary file!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        this.crud.deleteProductById(produit).subscribe(res=>{
  
          this.getAll();
          Swal.fire(
            'Deleted!',
            'Your imaginary file has been deleted.',
            'success'
          )
        })
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
}

}
  

