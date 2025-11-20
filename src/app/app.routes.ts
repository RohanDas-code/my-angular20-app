import { Routes } from '@angular/router';
import { DashboardPage } from './components/dashboard-page/dashboard-page';
import { Chatboat } from './components/chatboat/chatboat';

export const routes: Routes = [
    // { path: '', component: DashboardPage },
    { path: '', component: Chatboat },
    { path: 'dashboard', component: DashboardPage }
];
