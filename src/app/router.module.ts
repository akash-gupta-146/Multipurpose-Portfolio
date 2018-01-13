import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ThumbnailsComponent } from './thumbnails/thumbnails.component';
import { ImageDetailsComponent } from './image-details/image-details.component';

export const appRouter: Routes = [
  {path:'', redirectTo:'thumbnails', pathMatch:'full'},
  {path:'thumbnails', component:ThumbnailsComponent},
  {path:'viewDetails/:id', component:ImageDetailsComponent},

]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRouter)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class RouteModule { }
