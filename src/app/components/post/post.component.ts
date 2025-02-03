import { Component, OnInit } from '@angular/core';

interface Card {
  title: string;
  subtitle: string;
  content: string;
  imgSrc: string;
  liked: boolean;
}

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  standalone: false
})
export class PostComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  cardsFeed: Card[] = [
    {
      title: 'Card Title 1',
      subtitle: 'Card Subtitle 1',
      content: 'Here\'s a small text description for the card content. Nothing more, nothing less.',
      imgSrc: 'https://ionicframework.com/docs/img/demos/card-media.png',
      liked: false
    },
    {
      title: 'Card Title 2',
      subtitle: 'Card Subtitle 2',
      content: 'Here\'s another small text description for the card content. Nothing more, nothing less.',
      imgSrc: 'https://ionicframework.com/docs/img/demos/card-media.png',
      liked: false
    },
    {
      title: 'Card Title 3',
      subtitle: 'Card Subtitle 3',
      content: 'Here\'s yet another small text description for the card content. Nothing more, nothing less.',
      imgSrc: 'https://ionicframework.com/docs/img/demos/card-media.png',
      liked: false
    },
    {
      title: 'Card Title 4',
      subtitle: 'Card Subtitle 4',
      content: 'Here\'s a small text description for the card content. Nothing more, nothing less.',
      imgSrc: 'https://ionicframework.com/docs/img/demos/card-media.png',
      liked: false
    },
    {
      title: 'Card Title 5',
      subtitle: 'Card Subtitle 5',
      content: 'Here\'s another small text description for the card content. Nothing more, nothing less.',
      imgSrc: 'https://ionicframework.com/docs/img/demos/card-media.png',
      liked: false
    }
  ];

  toggleLike(card: Card) {
    card.liked = !card.liked;
  }
}