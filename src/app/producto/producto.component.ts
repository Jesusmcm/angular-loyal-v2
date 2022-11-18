import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto, ProductoServiceService } from '../producto-service.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  productoId?:number;
  id?:number;

  productos:Producto[] = [];

  constructor(private activatedRoute:ActivatedRoute,
    private productoService:ProductoServiceService) { }

  ngOnInit(): void {
    //snapshot
    //alert(JSON.stringify(this.activatedRoute.snapshot.params));
    this.id = this.activatedRoute.snapshot.params['id'];
    //alert(id);
    console.log(this.activatedRoute.snapshot.params);

    //observable
    this.productos = this.productoService.getProductos();
  }

  cargarProductoId(id: number):void{
    this.productoId = id;
  }

}
