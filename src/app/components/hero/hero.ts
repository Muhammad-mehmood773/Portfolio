import {
  AfterViewInit,
  Component,
  Inject,
  OnDestroy,
  PLATFORM_ID,
  signal,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero implements AfterViewInit, OnDestroy {
  private readonly isBrowser: boolean;
  private timer: any;

  readonly fullText = "I'm a Software Engineer.";
  readonly typed = signal('');
  readonly name = 'Muhammad Mehmood';

  private index = 0;
  private isDeleting = false;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngAfterViewInit(): void {
    if (!this.isBrowser) return;

    this.timer = setInterval(() => {
      if (!this.isDeleting) {
        // Typing
        this.typed.set(this.fullText.slice(0, this.index + 1));
        this.index++;

        if (this.index === this.fullText.length) {
          setTimeout(() => (this.isDeleting = true), 1200);
        }
      } else {
        // Deleting
        this.typed.set(this.fullText.slice(0, this.index - 1));
        this.index--;

        if (this.index === 0) {
          this.isDeleting = false;
        }
      }
    }, this.isDeleting ? 40 : 70);
  }

  ngOnDestroy(): void {
    if (this.timer) clearInterval(this.timer);
  }
}
