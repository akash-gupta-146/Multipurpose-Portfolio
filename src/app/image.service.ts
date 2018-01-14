import { Injectable } from '@angular/core';
import {Image, Images } from './images';

@Injectable()
export class ImageService {
  filterCategory: any;
  images:Image [];
  constructor() { 
    this.filterCategory='all';
  }

  getImages(){
    return Images;
  }

  getImage(id:number){
    return Images.find(image => image.id == id);
  }

  filterImages(filterBy:string){
    this.filterCategory = filterBy;
  }
}
