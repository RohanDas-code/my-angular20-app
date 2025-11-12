import { Component, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { Toast } from 'primeng/toast';
import { DashboardPage } from "./components/dashboard-page/dashboard-page";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ButtonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  providers: [MessageService]
})
export class App {
  protected readonly title = signal('my-angular20-app');
  constructor(private messageService: MessageService, private router: Router) {}

    show() {
      this.router.navigate(['/dashboard']);
        // this.messageService.add({ severity: 'info', summary: 'Info', detail: 'Message Content', life: 3000 });
    }
}
