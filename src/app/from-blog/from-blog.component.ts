import {Component, Input, OnInit} from '@angular/core';
import {DynamicComponent} from "../DynamicComponent";

@Component({
  selector: 'app-from-blog',
  templateUrl: './from-blog.component.html',
  styleUrls: ['./from-blog.component.css']
})
export class FromBlogComponent implements OnInit, DynamicComponent {

  constructor() { }
  @Input() data: any;
  ngOnInit(): void {
  }

}
