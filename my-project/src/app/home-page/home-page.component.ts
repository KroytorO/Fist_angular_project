import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  products=[
    {product: "Штукатурка 1"},
    {product: "Штукатурка 2"},
    {product: "Штукатурка 3"},
    {product: "Штукатурка 4"},
    {product: "Штукатурка 5"},
    {product: "Штукатурка 6"}
  ]
  constructor() { }

  ngOnInit() {
  }


}
