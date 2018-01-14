import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image.service';
import { Location } from '@angular/common';

import { ActivatedRoute, Router } from '@angular/router';
import { Image } from '../images';

@Component({
  selector: 'app-image-details',
  templateUrl: './image-details.component.html',
  styleUrls: ['./image-details.component.css']
})
export class ImageDetailsComponent implements OnInit {
  imageId: number;
  image: Image;

  constructor(private imageService:ImageService, 
    private route:ActivatedRoute,
    private router: Router,
    private location:Location) { }

  ngOnInit() {
    this.image = this.imageService.getImage(this.route.snapshot.params['id']);
  }

  goBack(){
    this.location.back();
  }

  previousImage(){
    this.imageId = +this.route.snapshot.params['id']-1;
    this.router.navigateByUrl('viewDetails/'+this.imageId);
    this.image = this.imageService.getImage(this.imageId);
  }

  nextImage(){
    this.imageId = +this.route.snapshot.params['id'] + 1;
    this.router.navigateByUrl('viewDetails/'+this.imageId);
    this.image = this.imageService.getImage(this.imageId);
  }

  gotoThumbnails(){
    this.router.navigateByUrl('thumbnails');
  }
}
