import { Component, inject } from '@angular/core';
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterLinkActive,
} from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
})
export class NavBarComponent {
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  baseUrl = this.router.url.split('/')[1];

  onRoute() {
    if (this.baseUrl == 'angular') {
      this.router.navigate(['/', 'design']);
    } else {
      this.router.navigate(['/', 'angular']);
    }
  }
}
