import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MusicService } from './service/music.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    MatCardModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MusicService]
})
export class AppComponent {
  title = 'SpaMusic';
  searchQuery: string = '';
  artistId: string = '';
  artist: any;
  albums: any[] = [];
  topTracks: any[] = [];

  constructor(private musicService: MusicService) {}

  getArtist() {
    if (this.artistId.trim()) {
      this.musicService.getArtist(this.artistId).subscribe(
        (data) => {
          this.artist = data;
        }
      );
    }
  }

  getArtistByName(artistName: string): void {
    this.musicService.searchArtistByName(artistName).subscribe(
      (data) => {
        this.artist = data.artists.items[0];
        this.artist.followers.total = this.formatFollowers(this.artist.followers.total);

        if (this.artist) {
          this.getAlbum(this.artist.id);
          this.getTopTracks(this.artist.id);
        }
      }
    );
  }

  getAlbum(artistId: string): void {
    this.musicService.getAlbumsByArtist(artistId, 6).subscribe(
      (data) => {
        this.albums = data.items;
      }
    );
  }

  getTopTracks(artistId: string): void {
    this.musicService.getTopTracksByArtist(artistId, 6).subscribe(
      (data) => {
        this.topTracks = data;
      }
    );
  }

  formatFollowers(followers: number): string {
    if (followers >= 1000000) {
      return (followers / 1000000).toFixed(1) + 'M';
    }
    return followers.toString();
  }
}