import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';


export interface User {
  id?: number;
  name: string;
  email: string;
  created_at?: string;
}

interface ChatRequest {
  message: string;
}

interface ChatResponse {
  reply: string;
}

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  constructor(private http: HttpClient) {}
  
  loadCustomer() {
    return this.http.get(environment.apiUrls + 'designations'); //concatination
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(environment.apiUrls + 'api/users');
  }

  createUser(user: any): Observable<User> {
    return this.http.post<User>(environment.apiUrls + 'api/users', user);
  }

  // Send only the user input (single string) and get back a reply
  sendMessage(message: string): Observable<ChatResponse> {
    const body: ChatRequest = { message };
    return this.http.post<ChatResponse>(environment.apiUrls + 'api/chat', body);
  }
}
