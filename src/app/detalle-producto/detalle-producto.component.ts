import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent implements OnInit {
  producto?:string;
  id?:number;
  constructor(private activatedRoute:ActivatedRoute,private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.httpClient.get(`${environment.reqResBaseUrl}/users/${this.id}`)
      .subscribe(data => {
        console.log(data);
        this.producto = JSON.stringify(data);
      });
  }

}
