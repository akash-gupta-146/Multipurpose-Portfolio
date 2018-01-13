import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ThumbnailsComponent } from './thumbnails/thumbnails.component';
import { ImageDetailsComponent } from './image-details/image-details.component';
import { RouteModule } from './/router.module';
import { ImageService } from './image.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ThumbnailsComponent,
    ImageDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouteModule
  ],
  providers: [ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
