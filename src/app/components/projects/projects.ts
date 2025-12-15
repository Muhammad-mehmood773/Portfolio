import { Component } from '@angular/core';
import { RevealOnScroll } from '../../shared/reveal-on-scroll';

@Component({
  selector: 'app-projects',
  imports: [RevealOnScroll],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  items = [
    {
      title: 'Example Project',
      description: 'A web app for visualizing personalized Spotify data. View your top artists, tracks, and detailed audio information. Create and save new playlists based on recommendations.',
      image: 'assets/projects/p1.png',
      featured: true
    },
    {
      title: 'Example Project',
      description: 'A web app for visualizing personalized Spotify data. View your top artists, tracks, and detailed audio information. Create and save new playlists based on recommendations.',
      image: 'assets/projects/p2.png',
      featured: true
    }
  ];
}
