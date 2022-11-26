import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { CartComponent } from './pages/cart/cart.component';
import { FormsModule } from '@angular/forms';
import { ItemlistComponent } from './components/itemlist/itemlist.component';
import { AuthService } from './services/auth.service';
import { LoginComponent } from './pages/login/login.component';
import { ItemsService } from './services/items.service';
import { CartcardComponent } from './components/cartcard/cartcard.component';
import { AdminComponent } from './admin/admin/admin.component';
import { AdminbarComponent } from './components/adminbar/adminbar.component';
import { UsersComponent } from './admin/users/users.component';
import { ProductsComponent } from './admin/products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CartComponent,
    ItemlistComponent,
    LoginComponent,
    CartcardComponent,
    AdminComponent,
    AdminbarComponent,
    UsersComponent,
    ProductsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [
    AuthService,
    ItemsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){
  }
 }
