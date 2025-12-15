import { Component, OnDestroy, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar implements OnInit, OnDestroy {
  open = signal(false);

  isSticky = signal(false);

  private readonly stickyAfterPx = 80;
  private readonly stickyDelayMs = 0;
  private stickyTimer: ReturnType<typeof setTimeout> | undefined;

  toggle() {
    this.open.update((v) => !v);
  }

  ngOnInit(): void {
    this.onScroll();
    window.addEventListener('scroll', this.onScroll, { passive: true });
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.onScroll);
    if (this.stickyTimer) {
      clearTimeout(this.stickyTimer);
      this.stickyTimer = undefined;
    }
  }

  private onScroll = (): void => {
    const y = window.scrollY ?? 0;

    if (y >= this.stickyAfterPx) {
      if (this.stickyTimer) {
        clearTimeout(this.stickyTimer);
        this.stickyTimer = undefined;
      }
      this.isSticky.set(true);
      return;
    }

    if (y <= 0) {
      if (this.stickyTimer) {
        clearTimeout(this.stickyTimer);
        this.stickyTimer = undefined;
      }
      this.isSticky.set(false);
      return;
    }

    if (this.stickyDelayMs <= 0) {
      this.isSticky.set(false);
      return;
    }

    if (!this.stickyTimer) {
      this.stickyTimer = setTimeout(() => {
        this.isSticky.set(true);
        this.stickyTimer = undefined;
      }, this.stickyDelayMs);
    }
  };
}
