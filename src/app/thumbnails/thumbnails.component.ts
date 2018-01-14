import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image.service';
import { Image } from '../images';

@Component({
  selector: 'app-thumbnails',
  templateUrl: './thumbnails.component.html',
  styleUrls: ['./thumbnails.component.css']
})
export class ThumbnailsComponent implements OnInit{

  imageList: Image[];
  filterBy:any;

  constructor(private imageService: ImageService) { }

  ngOnInit() {
    this.filterBy = 'all';
    this.getImages();
  }

  getImages(){
    this.imageList = this.imageService.getImages();
  }
}