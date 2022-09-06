import {Component, Input, OnInit} from '@angular/core';
import {DynamicComponent} from "../DynamicComponent";

@Component({
  selector: 'app-hero-banner',
  templateUrl: './hero-banner.component.html',
  styleUrls: ['./hero-banner.component.css']
})
export class HeroBannerComponent implements OnInit, DynamicComponent {

  constructor() { }
  @Input() data: any;
  ngOnInit(): void {
  }

}
