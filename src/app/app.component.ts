import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationCancel } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'ngt-frontend-dev-test';
  showProgress = true;

  private navigation = new Subscription();

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.navigation.add(this.router.events.subscribe((event) => this._handleNavigationEvent(event)));
  }

  ngOnDestroy(): void {
    if (this.navigation) this.navigation.unsubscribe();
  }

  private _handleNavigationEvent(event) {
    if (event instanceof NavigationStart) this.showProgress = true;

    if (event instanceof NavigationEnd || event instanceof NavigationCancel) setTimeout(() => (this.showProgress = false), 1000);
  }
}
