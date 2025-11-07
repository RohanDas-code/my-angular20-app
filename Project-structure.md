### create service page
 ```
ng generate service api.service

```

### app.config.ts->

```typescript

providers: [
    provideHttpClient(), // ✅ Required for HttpClient to work
  ],

```

### api call without service page

```typescript
   constructor(private http: HttpClient) {}
   customerArray: any[] = [];

//   direct urls use->

  getCustomer() {
    this.http.get('https://api.example.com').subscribe((data: any) => {
      this.customerArray = res.data;
    });
  }

```

### with service file

## api.service.ts->

```typescript

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'https://api.example.com';

  constructor(private http: HttpClient) {}
  loadCustomer() {
    return this.http.get(this.apiUrl + 'url-last-change-portion'); //concatination
  }
}

```

## component

```typescript
constructor(private apiService: ApiService) {}

  customerArray: any [] = [];
this.apiService.loadCustomer().subscribe((res: any) => {
      this.customerArray = res.data;
      console.log(this.customerArray);
    });
```


# 📡 API Call Methods in Angular 20

This document explains different ways to make HTTP API calls in Angular using `HttpClient`.  
It includes examples **with and without services**, along with **error handling**, **complete callbacks**, and **multiple API call handling**.

---

### 🧩 1. Without Using a Service File

You can call an API directly inside your component using Angular’s built-in `HttpClient`.

```typescript
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html'
})
export class CustomerComponent {
  customerArray: any[] = [];

  constructor(private http: HttpClient) {}

  // Direct URL usage
  getCustomer() {
    this.http.get('https://api.example.com/customers').subscribe({
      next: (res: any) => {
        this.customerArray = res.data;
      },
      error: (err) => {
        console.error('Error fetching customers:', err);
      }
    });
  }
}
```

---

### 🧩 2. With a Dedicated Service File

## api.service.ts->

```typescript

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://api.example.com/';

  constructor(private http: HttpClient) {}

  loadCustomers(): Observable<any> {
    return this.http.get(this.apiUrl + 'customers');
  }
}

```

## component.ts

```typescript

import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html'
})
export class CustomerComponent {
  customerArray: any[] = [];

  constructor(private apiService: ApiService) {}

  getCustomer() {
    this.apiService.loadCustomers().subscribe({
      next: (res: any) => {
        this.customerArray = res.data;
      },
      error: (err) => {
        console.error('API Error:', err);
      },
      complete: () => {
        console.log('Customer fetch complete.');
      }
    });
  }
}


```
✅ Recommended — best practice for all medium/large Angular projects.
✅ Centralizes URLs, handles common headers, tokens, interceptors, etc.

---

### 3. Error Handling (Reusable Way)

You can create a generic error handler in your service to avoid writing error blocks everywhere.

```typescript

import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

loadCustomers(): Observable<any> {
  return this.http.get(this.apiUrl + 'customers').pipe(
    catchError((error) => {
      console.error('Error occurred:', error);
      return throwError(() => error);
    })
  );
}

```

---

### 4. Using next, error, and complete in Subscribe

The subscribe() method supports 3 callbacks:

```typescript

this.apiService.loadCustomers().subscribe({
  next: (res) => console.log('Data:', res),
  error: (err) => console.error('Error:', err),
  complete: () => console.log('Request completed')
});


```
Always use the object form of subscribe() — it’s cleaner and supports TypeScript type safety.

---

### Multiple API Calls with forkJoin

```typescript

import { forkJoin } from 'rxjs';

loadAllData() {
  forkJoin({
    customers: this.apiService.loadCustomers(),
    products: this.apiService.loadProducts(),
    orders: this.apiService.loadOrders()
  }).subscribe({
    next: (result) => {
      console.log('All data:', result);
      // result.customers, result.products, result.orders
    },
    error: (err) => console.error('Error in one of the API calls:', err),
    complete: () => console.log('All APIs completed.')
  });
}

```
✅ All calls execute in parallel.
✅ next triggers after all calls complete successfully.

---

### Use Environment Variables

## environment.ts->

```typescript

export const environment = {
  production: false,
  apiUrl: 'https://api.example.com/'
};

```
```typescript
this.http.get(`${environment.apiUrl}customers`);
```

