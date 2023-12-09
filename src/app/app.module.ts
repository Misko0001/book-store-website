import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './components/footer/footer.component';
import { MaterialModule } from './material.module';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { CartComponent } from './pages/cart/cart.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { CartHistoryComponent } from './pages/cart/cart-history/cart-history.component';
import { CartContentComponent } from './pages/cart/cart-content/cart-content.component';
import { BookService } from './services/book.service';
import { BookComponent } from './pages/book/book.component';
import { BookAddedNotificationComponent } from './pages/book/book-added-notification/book-added-notification.component';
import { UserService } from './services/user.service';
import { ProfileComponent } from './components/nav/profile/profile.component';
import { OrderComponent } from './pages/cart/cart-content/order/order.component';
import { CartService } from './services/cart.service';
import { CartEditComponent } from './pages/cart/cart-history/cart-edit/cart-edit.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent, 
    NavComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    CartComponent,
    CartHistoryComponent,
    CartContentComponent,
    BookComponent,
    BookAddedNotificationComponent,
    ProfileComponent,
    OrderComponent,
    CartEditComponent
  ],
  imports: [
    BrowserModule,  
    BrowserAnimationsModule,
    MaterialModule,
    RoutingModule,
    FlexLayoutModule,
    FormsModule,
    NgbModule
  ],
  providers: [
    BookService, 
    UserService,
    CartService
  ],
  bootstrap: [AppComponent]
})

export class AppModule {}
