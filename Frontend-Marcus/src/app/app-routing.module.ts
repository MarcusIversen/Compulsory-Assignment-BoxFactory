import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreateBoxComponent} from '../app/create-box/create-box.component'
import {OverviewBoxComponent} from "./overview-box/overview-box.component";
import {FrontPageComponent} from "./front-page/front-page.component";

const routes: Routes = [
  {path: '', component: FrontPageComponent},
  {path: 'CreateBox', component: CreateBoxComponent},
  {path: 'OverviewBox', component: OverviewBoxComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
