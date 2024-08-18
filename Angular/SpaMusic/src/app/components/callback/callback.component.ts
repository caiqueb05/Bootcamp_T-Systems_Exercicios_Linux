import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyAuthService } from '../../service/spotify-auth.service';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.css']
})
export class CallbackComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private spotifyAuthService: SpotifyAuthService
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const code = params['code'];
      const state = params['state'];
      if (code) {
        this.spotifyAuthService.handleCallback(code, state)
          .then(() => {
          })
          .catch(error => {
          });
      }
    });
  }
}