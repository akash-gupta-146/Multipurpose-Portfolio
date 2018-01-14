import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  activeFilter:string;
  para:any;

  constructor(private imageService:ImageService,
              private location:Location,
              private route:Router,          
              ) { }

  ngOnInit() {
    this.activeFilter = 'all';
  }

  filterBy(category: string) {
    this.activeFilter = category;
    this.route.navigateByUrl('thumbnails');
    this.imageService.filterImages(category);
  }
}
