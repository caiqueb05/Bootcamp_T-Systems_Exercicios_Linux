import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MusicService } from '../../service/music.service';
import { SpotifyAuthService } from '../../service/spotify-auth.service';

@Component({
  selector: 'app-artist-detail',
  templateUrl: './artist-details.component.html',
  styleUrls: ['./artist-details.component.css']
})
export class ArtistDetailComponent implements OnInit {
  artist: any;

  constructor(
    private route: ActivatedRoute,
    private musicService: MusicService,
    private spotifyAuthService: SpotifyAuthService
  ) {}

  ngOnInit(): void {
  }
  
  getArtist(artistId: string) {
    this.musicService.getArtist(artistId).subscribe(
      (data) => {
        this.artist = data;
      }
    );
  }

  getArtistByName(artistName: string) {
    this.musicService.searchArtistByName(artistName).subscribe(
      (data) => {
        this.artist = data.artists.items[0];
      }
    );
  }
}