import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../service/spotify.service';

@Component({
  selector: 'app-home',
  template: `<p>Welcome to the Home Page</p>`
})
export class HomeComponent implements OnInit {
  constructor(private spotifyService: SpotifyService) {}

  ngOnInit() {
    const accessToken = localStorage.getItem('access_token');
    if (accessToken) {
      this.spotifyService.getUserProfile(accessToken).subscribe(
      );
    }
  }
}