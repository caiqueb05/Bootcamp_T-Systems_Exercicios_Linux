import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../service/spotify.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userProfile: any;

  constructor(private spotifyService: SpotifyService) {}

  ngOnInit(): void {
    const accessToken = localStorage.getItem('access_token');
    if (accessToken) {
      this.spotifyService.getUserProfile(accessToken).subscribe(
        (data) => {
          this.userProfile = data;
        },
        (error) => {
        }
      );
    } else {
      console.error('No access token found');
    }
  }
}