import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LogUpdateService } from './service/log-update.service';
import { PushNotificationService } from './service/push-notification.service.spec';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Ang-v17';

  constructor(private logUpdate: LogUpdateService, private pushService: PushNotificationService) {


  }

  ngOnInit() {

    this.logUpdate.subscribe();
    this.pushService.subscribeToNotifications();
    this.pushService.listenForNotifications();
  }
}
