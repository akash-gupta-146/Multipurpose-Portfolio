import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image.service';
import { Image } from '../images';

@Component({
  selector: 'app-thumbnails',
  templateUrl: './thumbnails.component.html',
  styleUrls: ['./thumbnails.component.css']
})
export class ThumbnailsComponent implements OnInit {

  imageList: Image[];

  constructor(private imageService: ImageService) { }

  ngOnInit() {
    this.getImages();
  }

  getImages(){
    this.imageList = this.imageService.getImages();
  }
}