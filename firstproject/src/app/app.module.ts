import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TitleComponent } from './title/title.component';
import { HeaderComponent } from './header/header.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductListComponent } from './product-list/product-list.component';
import { ZoomDirective } from './mydirectives/zoom.directive';
import { DiscountPipe } from './mypipes/discount.pipe';
import { StarComponent } from './star/star.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { Routes,RouterModule} from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductReviewFormComponent } from './product-review-form/product-review-form.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
 
const routes:Routes=[
  {path:"",redirectTo:"/home",pathMatch:"full"},
  {path:"home",component:HomeComponent},
  {path:"product/list",component:ProductListComponent},
  {path:"about-us",component:AboutUsComponent},
  {path:"contact-us",component:ContactUsComponent},
  {path:"product/details/:id",component:ProductDetailsComponent},
  {path:"user/login",component:LoginComponent},
  {path:"user/register",component:RegisterComponent},
  {path:"user/profile",component:ProfileComponent},
  {path:"**",component:PageNotFoundComponent},
]


@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    NavbarComponent,
    HeaderComponent,
    SearchBoxComponent,
    ProductListComponent,
    ZoomDirective,
    DiscountPipe,
    StarComponent,
    HomeComponent,
    AboutUsComponent,
    ContactUsComponent,
    PageNotFoundComponent,
    ProductDetailsComponent,
    ProductReviewFormComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    // [FormControl,FormGroup(fix set of controls),FormArray(flexible set of control)]
    RouterModule.forRoot(routes)
  ],
  exports:[

  ],
  bootstrap: [AppComponent],
  providers: [],
 
})
export class AppModule { }

// It Root Module of Application
