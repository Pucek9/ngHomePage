import { Component, OnInit, ViewChild } from '@angular/core';
import { mockPage } from './mockPage';
import { cmsMappingConfig } from './cms-mapping.config';
import { DynamicComponentDirective } from './dynamic-component.directive';
import { DynamicComponent } from './DynamicComponent';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  @ViewChild(DynamicComponentDirective, { static: true })
  dynamicComponentsHost!: DynamicComponentDirective;

  components = mockPage.entry.page_components
    .map(
      (component) =>
        Object.entries(component)[0] as [keyof typeof cmsMappingConfig, any]
    )
    .filter(([componentTag]) => {
      const isMappingDefined = cmsMappingConfig[componentTag] !== undefined;
      if (!isMappingDefined) {
        console.warn('Missing mapping for componentTag:', componentTag);
      }
      return isMappingDefined;
    })
    .map(([componentTag, data]) => ({
      ref: cmsMappingConfig[componentTag],
      data,
    }));

  ngOnInit(): void {
    this.loadComponent();
  }

  loadComponent() {
    const viewContainerRef = this.dynamicComponentsHost.viewContainerRef;

    this.components.forEach(async (component) => {
      const ref = await component.ref();
      const componentRef =
        viewContainerRef.createComponent<DynamicComponent>(ref);
      componentRef.instance.data = component.data;
    });
  }
}
