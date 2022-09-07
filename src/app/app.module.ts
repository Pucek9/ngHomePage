import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroBannerComponent } from './hero-banner/hero-banner.component';
import { SectionComponent } from './section/section.component';
import { FromBlogComponent } from './from-blog/from-blog.component';
import { DynamicComponentDirective } from './dynamic-component.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeroBannerComponent,
    SectionComponent,
    FromBlogComponent,
    DynamicComponentDirective,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
