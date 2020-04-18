import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }
  buildYear:number = 2020;
  nowYear:number = new Date().getFullYear();

  ngOnInit(): void {
  }

}
