import { Routes } from '@angular/router';

import { AboutRoutes } from './about/index';
import { HomeRoutes } from './home/index';
import { BlogRoutes } from './blog/index';

export const routes: Routes = [
  ...HomeRoutes,
  ...AboutRoutes,
  ...BlogRoutes
];
