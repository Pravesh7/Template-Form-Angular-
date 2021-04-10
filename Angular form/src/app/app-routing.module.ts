import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateformComponent } from "./templateform/templateform.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { ReactiveformsComponent } from './reactiveforms/reactiveforms.component';
const routes: Routes = [
  // { path: '', component:NavbarComponent , pathMatch:'full'},
  { path: 'templateform', component:TemplateformComponent },
  { path: 'reactiveform', component:ReactiveformsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
