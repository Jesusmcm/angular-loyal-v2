import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleProductoComponent } from './detalle-producto/detalle-producto.component';
import { BasicoComponent } from './ejemplos/basico/basico.component';
import { NotFoundComponent } from './errores/not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductoComponent } from './producto/producto.component';

const routes: Routes = [
  {
    path: '', component: LoginComponent
  },
{
  path: 'login', component: LoginComponent
},
{
  path: 'basico', component: BasicoComponent
},
{
  path: 'producto/:id', component: ProductoComponent
},
{
  path: 'producto2/:id', component: ProductoComponent
},
{
  path: 'detalle/:id', component: DetalleProductoComponent
},
{
  path: '**', component: NotFoundComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
