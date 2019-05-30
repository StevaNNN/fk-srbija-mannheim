import {
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';
import {AfterViewInit, Component, HostBinding, HostListener} from '@angular/core';
import { fromEvent } from 'rxjs';
import {
  distinctUntilChanged,
  filter,
  map,
  pairwise,
  share,
  throttleTime
} from 'rxjs/operators';

enum VisibilityState {
  Visible = 'visible',
  Hidden = 'hidden'
}

enum Direction {
  Up = 'Up',
  Down = 'Down'
}

@Component ({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  animations: [
    trigger('toggle', [
      state(
        VisibilityState.Hidden,
        style({ opacity: 0, transform: 'translateY(-100%)'})
      ),
      state(
        VisibilityState.Visible,
        style({ opacity: 1, transform: 'translateY(0)' })
      ),
      transition('* => *', animate('300ms ease-in-out'))
    ])
  ]
})

export class NavBarComponent  implements AfterViewInit {
  navbarOpen = false;
  private isVisible = true;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  @HostBinding('@toggle')
  get toggle(): VisibilityState {
    return this.isVisible ? VisibilityState.Visible : VisibilityState.Hidden;
  }

  ngAfterViewInit() {
    const scroll$ = fromEvent(window, 'scroll').pipe(
      throttleTime(10),
      map(() => window.pageYOffset),
      pairwise(),
      map(([y1, y2]): Direction => (y2 < y1 ? Direction.Up : Direction.Down)),
      distinctUntilChanged(),
      share()
    );

    const goingUp$ = scroll$.pipe(
      filter(direction => direction === Direction.Up)
    );

    const goingDown$ = scroll$.pipe(
      filter(direction => direction === Direction.Down)
    );

    goingUp$.subscribe(() => (this.isVisible = true));
    goingDown$.subscribe(() => (this.isVisible = false));
  }

  // Handling when page off set is greater than nav height and attaching specific class to it of so
  @HostListener('window:scroll', [])

  onScroll() {
    // storing scroll from top
    const numberOfPxFromTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    // storing reference to navbar
    const navbar = document.querySelector('app-nav-bar');

    if (numberOfPxFromTop > 100) {
      navbar.classList.add('fcm-navbar-bg');

    } else if (numberOfPxFromTop < 100) {
      navbar.classList.remove('fcm-navbar-bg');
    }
  }

}
