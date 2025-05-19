// libs/data-access/services/user.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Events} from '../models/events.model'
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class EventsService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient) {}

  getEvents(): Observable<Events[]> {
    return this.http.get<Events[]>(this.apiUrl);
  }
}
