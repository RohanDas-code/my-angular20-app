import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard-page',
  imports: [CommonModule],
  templateUrl: './dashboard-page.html',
  styleUrl: './dashboard-page.scss',
})
export class DashboardPage {

  constructor(private apiService: ApiService) {}

  customerArray: any [] = [];


  ngOnInit() {
    this.apiService.loadCustomer().subscribe((res: any) => {
      this.customerArray = res.data;
      console.log(this.customerArray);
    });
  }

}
