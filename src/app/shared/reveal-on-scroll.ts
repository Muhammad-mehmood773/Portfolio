import { AfterViewInit, Directive, ElementRef, Inject, Input, OnDestroy, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { gsap } from 'gsap';

@Directive({
  selector: '[appRevealOnScroll]',
  standalone: true
})
export class RevealOnScroll implements AfterViewInit, OnDestroy {
  @Input() fromY = 24;
  @Input() fromX?: number;
  @Input() fromScale?: number;
  @Input() duration = 0.7;
  @Input() delay = 0;
  @Input() easing = 'power2.out';

  private observer?: IntersectionObserver;
  private animated = false;
  private readonly isBrowser: boolean;

  constructor(
    private el: ElementRef<HTMLElement>,
    @Inject(PLATFORM_ID) platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngAfterViewInit(): void {
    if (!this.isBrowser) {
      return;
    }

    const target = this.el.nativeElement;
    const from: any = { opacity: 0, y: this.fromY };
    if (this.fromX !== undefined) from.x = this.fromX;
    if (this.fromScale !== undefined) from.scale = this.fromScale;
    gsap.set(target, from);

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !this.animated) {
          this.animated = true;
          const to: any = {
            opacity: 1,
            y: 0,
            duration: this.duration,
            delay: this.delay,
            ease: this.easing,
            clearProps: 'all',
          };
          if (this.fromX !== undefined) to.x = 0;
          if (this.fromScale !== undefined) to.scale = 1;
          gsap.to(target, to);
          this.observer?.unobserve(target);
        }
      });
    }, { threshold: 0.15 });

    this.observer.observe(target);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
