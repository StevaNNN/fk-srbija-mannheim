import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fk-srbija-mannheim';

  @HostListener('window:scroll', [])

  onScroll() {
    // storing scroll from top
    const numberOfPxFromTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    // storing reference to navbar
    const navbar = document.querySelector('#navbar');

    if (numberOfPxFromTop > 100) {
      navbar.classList.add('bg-dark', 'scroll-up');

    } else if (numberOfPxFromTop < 100) {
      navbar.classList.remove('bg-dark', 'scroll-up');
    }
  }
}
