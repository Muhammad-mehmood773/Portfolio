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
      title: 'Inventory Management System',
      description: 'A complete system to manage stock, suppliers, and real-time inventory tracking for various sectors.',
      image: 'https://cdn.dribbble.com/userupload/44540491/file/54e25af5e5e0fac72fe7267b6908f937.jpg?resize=1504x1128&vertical=center',
      featured: true
    },
    // {
    //   title: 'Sales & Leads Platform',
    //   description: 'Manage leads, opportunities, and sales pipelines efficiently with dashboards and analytics.',
    //   image: 'https://cdn.dribbble.com/userupload/46018770/file/e2404befd1a9cf6db9cbbe715115d8a3.jpg?resize=1504x1128&vertical=center',
    //   featured: true
    // },
    {
      title: 'Lead Activities & Proposal Management',
      description: 'Track and manage lead activities, proposals, and client schedules for better conversion.',
      image: 'https://cdn.dribbble.com/userupload/46018770/file/e2404befd1a9cf6db9cbbe715115d8a3.jpg?resize=1504x1128&vertical=center',
      featured: false
    },
    {
      title: 'Health Sector Scheduling',
      description: 'Automate scheduling for healthcare services and staff with alerts and reports.',
      image: 'https://cdn.dribbble.com/userupload/45350020/file/00089c1e88ad6d614c7dd639a63c4767.png?resize=1504x1128&vertical=center',
      featured: false
    },
    {
      title: 'Job Scheduling System',
      description: 'Organize job assignments and track employee progress efficiently.',
      image: 'https://cdn.dribbble.com/userupload/15086029/file/original-d59033c5c78caa55f9bd405441fafa50.png?resize=1504x1128&vertical=center',
      featured: false
    },
    {
      title: 'HR Employee Management',
      description: 'Handle employee records, attendance, and HR workflows in a single platform.',
      image: 'https://cdn.dribbble.com/userupload/15810240/file/original-c0556da918d9d62d960724e28fa70256.png?resize=1504x1128&vertical=center',
      featured: false
    },
    // {
    //   title: 'Booker Management System',
    //   description: 'Manage bookings, clients, and schedules for service-based businesses.',
    //   image: 'https://cdn.dribbble.com/userupload/16825488/file/original-5f825c14fc79e700e69325c0fccad34a.jpg?resize=1504x1128&vertical=center',
    //   featured: false
    // },
    {
      title: 'Facilities Management System',
      description: 'Monitor and manage facilities, assets, and maintenance tasks efficiently.',
      image: 'https://cdn.dribbble.com/userupload/44547930/file/447c74327f285fffe478aec831c57208.png?resize=1504x1062&vertical=center',
      featured: false
    },
  ];
}
