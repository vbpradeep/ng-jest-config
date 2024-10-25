import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { APIResolver } from '../services/api.resolver';
import { ResolverComponentComponent } from '../components/Resolver-component/resolver-component/resolver-component.component';

export const routes: Routes = [
    {
        path: 'data',
        component: ResolverComponentComponent,
        resolve: { data: APIResolver },
      }
];
