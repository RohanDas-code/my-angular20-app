import { Routes } from '@angular/router';
import { DashboardPage } from './components/dashboard-page/dashboard-page';
import { Chatboat } from './components/chatboat/chatboat';
import { CreateNewDesign } from './components/new-design/create-new-design/create-new-design';
import { CreateSecondDesign } from './components/new-design/create-second-design/create-second-design';
import { CreateThirdDesignComponent } from './components/new-design/create-third-design/create-third-design';

export const routes: Routes = [
    // { path: '', component: DashboardPage },
    { path: '', component: DashboardPage },
    { path: 'dashboard', component: DashboardPage },
    { path: 'create-new-design', component: CreateNewDesign },
    { path: 'create-second-design', component: CreateSecondDesign },
    { path: 'create-third-design', component: CreateThirdDesignComponent },
];
