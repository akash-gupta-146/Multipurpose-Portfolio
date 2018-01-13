import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image.service';
import { Location } from '@angular/common';

import { ActivatedRoute } from '@angular/router';
import { Image } from '../images';

@Component({
  selector: 'app-image-details',
  templateUrl: './image-details.component.html',
  styleUrls: ['./image-details.component.css']
})
export class ImageDetailsComponent implements OnInit {
  image: Image;

  constructor(private imageService:ImageService, 
    private route:ActivatedRoute,
    private location:Location) { }

  ngOnInit() {
    this.image = this.imageService.getImage(this.route.snapshot.params['id']);
  }

  goBack(){
    this.location.back();
  }

}
