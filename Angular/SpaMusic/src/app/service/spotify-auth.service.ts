import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SpotifyAuthService {
  private tokenUrl = 'https://accounts.spotify.com/api/token';
  private authorizeUrl = 'https://accounts.spotify.com/authorize';

  constructor(private http: HttpClient) {}

  login() {
    const clientId = environment.spotifyClientId;
    const redirectUri = environment.spotifyRedirectUri;
    const scopes = 'user-read-private user-read-email';

    const authUrl = `${this.authorizeUrl}?response_type=code&client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${encodeURIComponent(scopes)}`;

    window.location.href = authUrl;
  }

  handleCallback(code: string, state: string): Promise<void> {
    return new Promise((resolve, reject) => {
      this.getAccessToken(code).subscribe(
        response => {
          if (response.access_token) {
            localStorage.setItem('access_token', response.access_token);
            localStorage.setItem('refresh_token', response.refresh_token);
            resolve();
          } else {
            reject('No access token in response');
          }
        },
        error => {
          reject('Error during token exchange: ' + error);
        }
      );
    });
  }

  getAccessToken(code: string): Observable<any> {
    const body = new HttpParams()
      .set('grant_type', 'authorization_code')
      .set('code', code)
      .set('redirect_uri', environment.spotifyRedirectUri)
      .set('client_id', environment.spotifyClientId)
      .set('client_secret', environment.spotifyClientSecret);

    return this.http.post(this.tokenUrl, body.toString(), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });
  }

  getStoredAccessToken(): string | null {
    return localStorage.getItem('access_token');
  }
}