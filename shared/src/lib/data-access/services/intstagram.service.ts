import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InstagramService {
  private accessToken = 'YOUR_ACCESS_TOKEN';  // Replace with your Access Token

  constructor(private http: HttpClient) {}

  getUserMedia(): Observable<any> {
    const url = `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,timestamp&access_token=${this.accessToken}`;
    return this.http.get<any>(url);
  }
}
