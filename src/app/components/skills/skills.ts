import { Component } from '@angular/core';
import { RevealOnScroll } from '../../shared/reveal-on-scroll';

@Component({
  selector: 'app-skills',
  imports: [RevealOnScroll],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {

  readonly skills = [
    {
      name: 'Angular',
      accent: 'from-rose-400/20 via-fuchsia-400/15 to-indigo-400/20',
      icon: {
        viewBox: '0 0 24 24',
        paths: [
          { d: 'M12 2 3 6l1.7 12.8L12 22l7.3-3.2L21 6 12 2Z' },
          { d: 'M12 6.2 7.5 18h2.2l.9-2.6h2.8l.9 2.6h2.2L12 6.2Zm0 4.1 1.1 3.2h-2.2L12 10.3Z' },
        ],
      },
    },
    {
      name: 'TypeScript',
      accent: 'from-sky-400/20 via-indigo-400/15 to-cyan-400/20',
      icon: {
        viewBox: '0 0 24 24',
        paths: [
          { d: 'M4 4h16v16H4V4Z' },
          { d: 'M9 9h6v2h-2v7h-2v-7H9V9Z' },
        ],
      },
    },
    {
      name: '.NET Core',
      accent: 'from-indigo-400/20 via-purple-400/15 to-fuchsia-400/20',
      icon: {
        viewBox: '0 0 24 24',
        paths: [
          { d: 'M12 2c5.5 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12 6.5 2 12 2Z' },
          { d: 'M7.2 15.8V8.2h2.1l2.5 4.1V8.2h2v7.6h-2l-2.6-4.2v4.2h-2Z' },
        ],
      },
    },
    {
      name: 'Tailwind CSS',
      accent: 'from-cyan-400/20 via-sky-400/15 to-purple-400/20',
      icon: {
        viewBox: '0 0 24 24',
        paths: [
          { d: 'M7 10c1-3 3-4 6-4 4 0 5 3 7 3-1 3-3 4-6 4-4 0-5-3-7-3Zm-2 8c1-3 3-4 6-4 4 0 5 3 7 3-1 3-3 4-6 4-4 0-5-3-7-3Z' },
        ],
      },
    },
    {
      name: 'SQL Server',
      accent: 'from-amber-400/20 via-rose-400/10 to-purple-400/20',
      icon: {
        viewBox: '0 0 24 24',
        paths: [
          { d: 'M12 3c-4.9 0-9 1.4-9 3.2v11.6C3 19.6 7.1 21 12 21s9-1.4 9-3.2V6.2C21 4.4 16.9 3 12 3Zm0 2c4.1 0 7 .9 7 1.2S16.1 7.4 12 7.4 5 6.5 5 6.2 7.9 5 12 5Zm7 5.2v2.3c0 .3-2.9 1.2-7 1.2s-7-.9-7-1.2v-2.3c1.9 1 4.9 1.3 7 1.3s5.1-.3 7-1.3Zm0 5v2.3c0 .3-2.9 1.2-7 1.2s-7-.9-7-1.2v-2.3c1.9 1 4.9 1.3 7 1.3s5.1-.3 7-1.3Z' },
        ],
      },
    },
    {
      name: 'PostgreSQL',
      accent: 'from-sky-400/20 via-cyan-400/12 to-indigo-400/20',
      icon: {
        viewBox: '0 0 24 24',
        paths: [
          { d: 'M12 3c4.6 0 8 3.2 8 7.6 0 4.7-2.4 9.2-5.8 10.9-.6.3-1.3-.2-1.3-.9v-3.2c-1 0-2-.2-3-.6-.6.8-1.3 1.1-2.2 1.2-1.7.2-3-1-3.3-2.6-.6-3.6.3-12.4 7.6-12.4Zm2.1 8.8a1.6 1.6 0 1 0 0-3.2 1.6 1.6 0 0 0 0 3.2ZM9.9 11.8a1.6 1.6 0 1 0 0-3.2 1.6 1.6 0 0 0 0 3.2Z' },
        ],
      },
    },
    {
      name: 'Git',
      accent: 'from-orange-400/20 via-rose-400/12 to-fuchsia-400/18',
      icon: {
        viewBox: '0 0 24 24',
        paths: [
          { d: 'M12 2 3 11l9 9 9-9-9-9Zm1 6.2V9.6l2.1 2.1a1.7 1.7 0 1 1-1.2 1.6L12.8 12v4.4a1.7 1.7 0 1 1-1.6 0V9.7a1.7 1.7 0 1 1 1.8-1.5Z' },
        ],
      },
    },
    {
      name: 'Docker',
      accent: 'from-sky-400/20 via-indigo-400/12 to-purple-400/18',
      icon: {
        viewBox: '0 0 24 24',
        paths: [
          { d: 'M4 13h16c-.4 4.5-3.6 7-8 7s-7.6-2.5-8-7Zm3-6h2v2H7V7Zm3 0h2v2h-2V7Zm3 0h2v2h-2V7Zm-6 3h2v2H7v-2Zm3 0h2v2h-2v-2Zm3 0h2v2h-2v-2Z' },
        ],
      },
    },
  ] as const;
}
