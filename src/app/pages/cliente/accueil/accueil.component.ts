import { Component, Input, OnInit } from '@angular/core';
import { MatTab, MatTabChangeEvent, MatTabLabel } from '@angular/material/tabs';
import { HeaderComponent } from 'src/app/shares/components/header/header.component';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

  constructor() {}

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

  slides = [
    1,2,3
  ];

  villeSlide = [
    {dispo: false, img:"assets/paris.svg", description:"Réserves ta coiffeuse à Paris et sa région"},
    {dispo: false, img:"assets/nantes.svg", description:"Réserves ta coiffeuse à Nantes"},
    {dispo: false, img:"assets/rennes.svg", description:"Réserves ta coiffeuse à Rennes"},
    {dispo: false, img:"assets/bordeaux.svg", description:"Réserves ta coiffeuse à Bordeaux"},
    {dispo: false, img:"assets/lille.svg", description:"Réserves ta coiffeuse à lille"},
  ]

  // slideConfig = {"slidesToShow": 4, "slidesToScroll": 4};
  slideConfig = {
    "slidesToShow":3,
    "slidesToScroll": 3,
    "dots": true,
    "infinite": false,
    "responsive": [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  slideConfigVille = {
    "slidesToShow":5,
    "slidesToScroll": 5,
    "dots": false,
    "infinite": false,
    "responsive": [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1
        }
      }
    ]
  };
  
  addSlide() {
    // this.slides.push({img: "http://placehold.it/350x150/777777"})
  }
  
  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }
  
  slickInit(e:any) {
    console.log('slick initialized');
  }
  
  breakpoint(e:any) {
    console.log('breakpoint');
  }
  
  afterChange(e:any) {
    console.log('afterChange');
  }
  
  beforeChange(e:any) {
    console.log('beforeChange');
  }


  
  ngOnInit(): void {
  }

  

}
