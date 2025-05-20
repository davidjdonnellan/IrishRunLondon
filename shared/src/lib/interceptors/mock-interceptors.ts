// mock-http.interceptor.ts
import { HttpInterceptorFn } from '@angular/common/http';
import { HttpResponse } from '@angular/common/http';
import mockEvents from '../mock-data/events';
import { of } from 'rxjs';

export const mockHttpInterceptor: HttpInterceptorFn = (req, next) => {
  if (req.url.endsWith('/api/data/events') && req.method === 'GET') {
    console.log('here ')
    const mockData =mockEvents;
    return of(new HttpResponse({ status: 200, body: mockData }));
  }
  return next(req);
};
