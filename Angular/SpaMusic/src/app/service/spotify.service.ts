import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  private apiUrl = 'https://api.spotify.com/v1';

  constructor(private http: HttpClient) {}

  getUserProfile(accessToken: string): Observable<any> {
    const headers = { Authorization: `Bearer ${accessToken}` };
    return this.http.get(`${this.apiUrl}/me`, { headers });
  }
}