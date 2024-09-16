import { Routes } from '@angular/router';
import { SignupPageComponent } from './component/signup-page/signup-page.component';
import { AboutComponent } from './component/about/about.component';
import { ServiceComponent } from './component/service/service.component';
import { ContactComponent } from './component/contact/contact.component';

export const routes: Routes = [
    {
        path: 'signup',
        component: SignupPageComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'service',
        component: ServiceComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    }
];
