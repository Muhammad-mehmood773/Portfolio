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
    accent: 'from-red-600/20 via-red-500/15 to-red-400/20',
    svgColor: '#DD0031', // Angular red
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
    accent: 'from-blue-600/20 via-blue-500/15 to-blue-400/20',
    svgColor: '#3178C6', // TypeScript blue
    icon: {
      viewBox: '0 0 24 24',
      paths: [
        { d: 'M4 4h16v16H4V4Z' },
        { d: 'M9 9h6v2h-2v7h-2v-7H9V9Z' },
      ],
    },
  },
  {
    name: 'React',
    accent: 'from-cyan-500/20 via-blue-500/15 to-blue-400/20',
    svgColor: '#61DAFB', // React cyan
    icon: {
      viewBox: '0 0 24 24',
      paths: [
        { d: 'M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18a8 8 0 110-16 8 8 0 010 16z' },
        { d: 'M12 6a6 6 0 100 12 6 6 0 000-12z' },
      ],
    },
  },
  {
    name: 'GitHub',
    accent: 'from-gray-900/20 via-gray-800/15 to-gray-700/20',
    svgColor: '#181717', // GitHub dark gray
    icon: {
      viewBox: '0 0 24 24',
      paths: [
        { d: 'M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.167 6.84 9.49...' },
      ],
    },
  },
  {
    name: 'HTML',
    accent: 'from-orange-600/20 via-orange-500/15 to-yellow-400/20',
    svgColor: '#E34F26', // HTML orange
    icon: {
      viewBox: '0 0 24 24',
      paths: [
        { d: 'M4 2h16l-1.5 18L12 22l-6.5-2L4 2zm11.25 14.25l.75-4h-4v1.5h2l-.25 1.5H12v1.5h3.25z' },
      ],
    },
  },
  {
    name: 'CSS',
    accent: 'from-blue-600/20 via-blue-500/15 to-indigo-400/20',
    svgColor: '#1572B6', // CSS blue
    icon: {
      viewBox: '0 0 24 24',
      paths: [
        { d: 'M4 2h16l-1.5 18L12 22l-6.5-2L4 2zm12.5 14H12v-1.5h3.5l-.25-1.5H12V12h4v1.5z' },
      ],
    },
  },
  {
    name: 'SCSS',
    accent: 'from-pink-600/20 via-purple-500/15 to-purple-400/20',
    svgColor: '#CC6699', // SCSS pink/purple
    icon: {
      viewBox: '0 0 24 24',
      paths: [
        { d: 'M4 2h16v20H4V2zm12 14H8v-4h8v4zm0-6H8V8h8v2z' },
      ],
    },
  },
  {
    name: 'JavaScript',
    accent: 'from-yellow-400/20 via-amber-400/15 to-yellow-300/20',
    svgColor: '#F7DF1E', // JS yellow
    icon: {
      viewBox: '0 0 24 24',
      paths: [
        { d: 'M4 2h16v20H4V2zm11 14l-1.5-1.5-1.5 1.5V8h1v8z' },
      ],
    },
  },
  {
    name: 'Bootstrap',
    accent: 'from-purple-600/20 via-purple-500/15 to-purple-400/20',
    svgColor: '#7952B3', // Bootstrap purple
    icon: {
      viewBox: '0 0 24 24',
      paths: [
        { d: 'M4 2h16v20H4V2zm12 14H8V8h8v8z' },
      ],
    },
  },
  {
    name: 'NG Zorro',
    accent: 'from-blue-500/20 via-cyan-400/15 to-indigo-400/20',
    svgColor: '#1890FF', // NG Zorro blue
    icon: {
      viewBox: '0 0 24 24',
      paths: [
        { d: 'M12 2l9 4v12l-9 4-9-4V6l9-4zm0 2L5 6v12l7 3 7-3V6z' },
      ],
    },
  },
  {
    name: '.NET Core',
    accent: 'from-purple-600/20 via-indigo-500/15 to-purple-400/20',
    svgColor: '#512BD4', // .NET purple
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
    accent: 'from-cyan-400/20 via-sky-400/15 to-indigo-400/20',
    svgColor: '#06B6D4', // Tailwind cyan
    icon: {
      viewBox: '0 0 24 24',
      paths: [
        { d: 'M7 10c1-3 3-4 6-4 4 0 5 3 7 3-1 3-3 4-6 4-4 0-5-3-7-3Zm-2 8c1-3 3-4 6-4 4 0 5 3 7 3-1 3-3 4-6 4-4 0-5-3-7-3Z' },
      ],
    },
  },
  {
    name: 'SQL Server',
    accent: 'from-purple-600/20 via-amber-500/10 to-purple-400/20',
    svgColor: '#CC2927', // SQL Server red
    icon: {
      viewBox: '0 0 24 24',
      paths: [
        { d: 'M12 3c-4.9 0-9 1.4-9 3.2v11.6C3 19.6 7.1 21 12 21s9-1.4 9-3.2V6.2C21 4.4 16.9 3 12 3...' },
      ],
    },
  },
  {
    name: 'PostgreSQL',
    accent: 'from-blue-500/20 via-cyan-400/12 to-indigo-400/20',
    svgColor: '#336791', // PostgreSQL blue
    icon: {
      viewBox: '0 0 24 24',
      paths: [
        { d: 'M12 3c4.6 0 8 3.2 8 7.6 0 4.7-2.4 9.2-5.8 10.9...' },
      ],
    },
  },
  {
    name: 'Git',
    accent: 'from-orange-600/20 via-orange-500/12 to-orange-400/18',
    svgColor: '#F05032', // Git orange
    icon: {
      viewBox: '0 0 24 24',
      paths: [
        { d: 'M12 2 3 11l9 9 9-9-9-9Zm1 6.2V9.6l2.1 2.1a1.7 1.7 0 1 1-1.2 1.6L12.8 12v4.4a1.7 1.7 0 1 1-1.6 0V9.7a1.7 1.7 0 1 1 1.8-1.5Z' },
      ],
    },
  },
  {
    name: 'Postman',
    accent: 'from-orange-500/20 via-orange-400/15 to-yellow-400/20',
    svgColor: '#FF6C37', // Postman orange
    icon: {
      viewBox: '0 0 24 24',
      paths: [
        { d: 'M12 2l2 3 3 1-1 3 2 2-3 2 1 3-3-1-2 3-2-3-3 1 1-3-2-2 3-2-1-3 3 1 2-3z' },
      ],
    },
  },
] as const;


}
