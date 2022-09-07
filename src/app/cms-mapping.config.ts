import { SectionComponent } from './section/section.component';
import { FromBlogComponent } from './from-blog/from-blog.component';
import { HeroBannerComponent } from './hero-banner/hero-banner.component';

export const cmsMappingConfig = {
  hero_banner: () =>
    import('./hero-banner/hero-banner.component').then(
      (m) => m.HeroBannerComponent
    ),
  from_blog: () =>
    import('./from-blog/from-blog.component').then((m) => m.FromBlogComponent),
  section: () =>
    import('./section/section.component').then((m) => m.SectionComponent),
};
