import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from "./main/main.component";
import {UploadComponent} from "./upload/upload.component";



const routes: Routes = [
  {
    path: 'main',
    component: MainComponent,
    children: [
      {
        path: 'upload',
        component: UploadComponent
      }
    ]
  },

  {path: '', pathMatch: "full", redirectTo: '/main/upload'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
