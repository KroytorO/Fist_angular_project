import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { PaymentComponent } from './payment/payment.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ReturnComponent } from './return/return.component';
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import { ProductComponent } from './product/product.component';
import { CatalogComponent } from './catalog/catalog.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { LoginFormComponent } from './login-form/login-form.component';


// создаем роуты для навигационного меню, роуты необходимо зарегистрировать
const routes=[
  {path:'',component: HomePageComponent}, /**каждый элемент массивы должен иметь два
   обязательных поля 1- path, 2- component, куда передаем компонент,
   который должен подгрузится при определенном роуте */
  {path:'delivery', component:DeliveryComponent},
  {path:'payment', component:PaymentComponent },
  {path:'contacts', component:ContactsComponent},
  {path:'return', component:ReturnComponent },
  {path:'registration-form', component:RegistrationFormComponent },
  {path:'login-form', component:LoginFormComponent }
];

@NgModule
    ({
  declarations: [
    AppComponent,
    HomePageComponent,
    DeliveryComponent,
    PaymentComponent,
    ContactsComponent,
    ReturnComponent,
    ProductComponent,
    CatalogComponent,
    RegistrationFormComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
