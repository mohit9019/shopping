import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { CartComponent } from './pages/cart/cart.component';
import { UsersComponent } from './admin/users/users.component';
import { ProductsComponent } from './admin/products/products.component';
import { AdminComponent } from './admin/admin/admin.component';
import { AuthGuard } from './services/auth.guard';
import { AdminGuard } from './services/admin.guard';

const routes: Routes = [
  {path:'', component:LoginComponent,pathMatch:'full'},
  {path:'home',component:HomeComponent,canActivate:[AuthGuard]},
  {path:'cart', component: CartComponent,canActivate:[AuthGuard]},
  {path:'admin',
  children:[{
    path:'',
    component:UsersComponent,
    }, 
    {
      path:'products',
      component:ProductsComponent,
    },
    {
      path:'productform',
      component:AdminComponent,
    }
  ],
  canActivateChild:[AdminGuard],
},
{path:'**', component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
