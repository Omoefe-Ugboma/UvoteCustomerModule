import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserIdleService } from 'angular-user-idle';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/core/service/auth.service';

@Component({
  selector: 'app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.css']
})
export class AppLayoutComponent implements OnInit {

  timer!: number;
  timerStartSubscription!: Subscription;
  timeoutSubscription!: Subscription;
  isTimerCounting!: boolean;
  isModalShown!: boolean;

  constructor(private userIdle: UserIdleService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    // Watching for user inactivity
    this.userIdle.startWatching();

    // Watch when user idle is starting
    this.timerStartSubscription = this.userIdle.onTimerStart().subscribe(count => {
      if (count) {
        if (!this.isTimerCounting) {
          this.isTimerCounting = true;
        }
      }
    });

    // Start watch when time is up.
    this.timeoutSubscription = this.userIdle.onTimeout().subscribe(() => {
      this.logout();
    });
  }

  logout() {
    this.userIdle.stopTimer();
    this.userIdle.stopWatching();
    this.authService.logout();
    this.router.navigate(['/auth/login/']);
  }

}
