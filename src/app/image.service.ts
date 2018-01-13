import { Injectable } from '@angular/core';
import {Image, Images } from './images';

@Injectable()
export class ImageService {
  images:Image [];
  constructor() { }

  getImages(){
    return Images;
  }

  getImage(id:number){
    return Images.find(image => image.id == id);
  }
}
