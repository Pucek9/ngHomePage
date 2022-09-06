import {Component, OnInit, ViewChild} from '@angular/core';
import {mockPage} from "./mockPage";
import {cmsMappingConfig} from "./cms-mapping.config";
import {DynamicComponentDirective} from "./dynamic-component.directive";
import {DynamicComponent} from "./DynamicComponent";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ngHomePage';
  @ViewChild(DynamicComponentDirective, { static: true }) dynamicComponentsHost!: DynamicComponentDirective;

  components = mockPage.entry.page_components
    .map(component => Object.entries(component)[0])
    .map(([componentTag, data]) => ({ref: cmsMappingConfig[componentTag as keyof typeof cmsMappingConfig], data}))

  ngOnInit(): void {
    this.loadComponent();
  }

  loadComponent() {
    const viewContainerRef = this.dynamicComponentsHost.viewContainerRef;

    this.components
      .filter(component => component.ref !== undefined)
      .forEach((component) => {

        const componentRef = viewContainerRef.createComponent<DynamicComponent>(
        component.ref
      );
      componentRef.instance.data = component.data;
    });
  }
}
