import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  constructor(private http: HttpClient) {}
  
  loadCustomer() {
    return this.http.get(environment.apiUrls + 'designations'); //concatination
  }
}
