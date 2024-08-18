import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { SpotifyAuthService } from './spotify-auth.service';

@Injectable({
  providedIn: 'root'
})
export class MusicService {
  private apiUrl = 'https://api.spotify.com/v1';

  constructor(private http: HttpClient, private spotifyAuthService: SpotifyAuthService) {}

  private getHeaders(accessToken: string): HttpHeaders {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${accessToken}`
    });
    return headers;
  }

  getSongs(albumId: string): Observable<any> {
    const accessToken = this.spotifyAuthService.getStoredAccessToken();
    if (!accessToken) {
      return throwError('Access token is null');
    }
    const headers = this.getHeaders(accessToken);
    return this.http.get<any>(`${this.apiUrl}/albums/${albumId}/tracks`, { headers }).pipe(
      map(res => res),
      catchError(err => {
        console.error('Error getting songs', err);
        return of(null);
      })
    );
  }
  
  getAlbumsByArtist(artistId: string, limit: number = 6): Observable<any> {
    const accessToken = this.spotifyAuthService.getStoredAccessToken();
    if (!accessToken) {
      return throwError('Access token is null');
    }
    const headers = this.getHeaders(accessToken);
    return this.http.get<any>(`${this.apiUrl}/artists/${artistId}/albums?limit=${limit}`, { headers }).pipe(
      map(res => res),
      catchError(err => {
        console.error('Error getting albums', err);
        return of(null);
      })
    );
  }

  getArtist(artistId: string): Observable<any> {
    const accessToken = this.spotifyAuthService.getStoredAccessToken();
    if (!accessToken) {
      return throwError('Access token is null');
    }
    const headers = this.getHeaders(accessToken);
    return this.http.get<any>(`${this.apiUrl}/artists/${artistId}`, { headers }).pipe(
      map(res => res),
      catchError(err => {
        console.error('Error getting artist', err);
        return of(null);
      })
    );
  }

  searchArtistByName(name: string): Observable<any> {
    const accessToken = this.spotifyAuthService.getStoredAccessToken();
    if (!accessToken) {
      return throwError('Access token is null');
    }
    const headers = this.getHeaders(accessToken);
    const url = `${this.apiUrl}/search?q=${encodeURIComponent(name)}&type=artist`;
    return this.http.get<any>(url, { headers }).pipe(
      map(res => res),
      catchError(err => {
        console.error('Error searching artist by name', err);
        return of(null);
      })
    );
  }

  getTopTracksByArtist(artistId: string, limit: number = 6): Observable<Track[]> {
    const accessToken = this.spotifyAuthService.getStoredAccessToken();
    if (!accessToken) {
      return throwError('Access token is null');
    }
    const headers = this.getHeaders(accessToken);
    return this.http.get<any>(`${this.apiUrl}/artists/${artistId}/top-tracks?market=US`, { headers }).pipe(
      map(res => res.tracks.slice(0, limit).map((track: any) => ({
        name: track.name,
        album: track.album.name,
        albumImage: track.album.images[0]?.url,
        popularity: track.popularity,
        preview_url: track.preview_url
      }))),
      catchError(err => {
        console.error('Error getting top tracks', err);
        return of([]);
      })
    );
  }
}

interface Track {
  name: string;
  album: string;
  albumImage: string;
  popularity: number;
  preview_url: string | null;
}