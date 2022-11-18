import { Injectable } from '@angular/core';

export interface Producto {
  id: number,
  titulo: string,
  precio: number,
  url:string
}

@Injectable({
  providedIn: 'root'
})
export class ProductoServiceService {
  private productos:Producto[] = [];
  constructor() {
    this.productos.push(
      {
      id: 1,
      titulo: 'Producto1',
      precio: Math.floor(1+Math.random()),
      url: 'https://static.carrefour.es/hd_350x_/img_pim_food/231394_00_1.jpg'
      },
      {
        id: 2,
        titulo: 'Producto2',
        precio: Math.floor(1+Math.random()),
        url: 'https://static.carrefour.es/hd_350x_/img_pim_food/251204_00_1.jpg'
        },
        {
          id: 3,
          titulo: 'Producto3',
          precio: Math.floor(1+Math.random()),
          url: 'https://static.carrefour.es/hd_350x_/img_pim_food/226607_00_1.jpg'
          },

    );
  }

  getProductos(): Producto[] {
    return this.productos;
  }
}
