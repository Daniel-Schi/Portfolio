import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsfolderComponent } from './componentsfolder/componentsfolder.component';
import {HttpClientModule, HttpClient} from '@angular/common/http';

const routes: Routes = [
  { path: '', component: ComponentsfolderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
