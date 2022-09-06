import {Component, Input, OnInit} from '@angular/core';
import {DynamicComponent} from "../DynamicComponent";

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit, DynamicComponent {

  constructor() { }
  @Input() data: any;
  ngOnInit(): void {
  }

}
