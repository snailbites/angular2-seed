import { Route } from '@angular/router';
import { BlogComponent } from './index';
import { BlogDetailComponent } from '../shared/blog-detail/index';

export const BlogRoutes: Route[] = [
  {
    path: 'blog/:id',
    component: BlogDetailComponent
  }
  // {
  //   path: 'blog',
  //   component: BlogComponent
  // },
  // {
  //   path: 'blog:id',
  //   component: BlogComponent
  // }
];
