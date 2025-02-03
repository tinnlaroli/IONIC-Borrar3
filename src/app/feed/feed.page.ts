import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
  standalone: false
})
export class FeedPage implements OnInit {
  constructor() { }
  ngOnInit() {
  }

  stories = [
    { imgSrc: 'https://ionicframework.com/docs/img/demos/card-media.png' },
    { imgSrc: 'https://ionicframework.com/docs/img/demos/card-media.png' },
    { imgSrc: 'https://ionicframework.com/docs/img/demos/card-media.png' },
    { imgSrc: 'https://ionicframework.com/docs/img/demos/card-media.png' },
  ];
  
}
