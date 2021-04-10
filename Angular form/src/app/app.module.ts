import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import  { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TemplateformComponent } from './templateform/templateform.component';
import { ReactiveformsComponent } from './reactiveforms/reactiveforms.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TemplateformComponent,
    ReactiveformsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
