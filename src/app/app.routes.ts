import { Routes } from '@angular/router';
import { DashboardPage } from './components/dashboard-page/dashboard-page';

export const routes: Routes = [
    { path: '', component: DashboardPage },
    { path: 'dashboard', component: DashboardPage }
];
