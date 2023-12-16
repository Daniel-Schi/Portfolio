import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsfolderComponent } from './componentsfolder/componentsfolder.component';
import { ImprintComponent } from './imprint/imprint.component';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

const routes: Routes = [
  { path: '', component: ComponentsfolderComponent},
  { path: 'imprint', component: ImprintComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
