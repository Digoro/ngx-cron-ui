import { Component } from '@angular/core';
import { NgxCronUiConfig } from 'projects/ngx-cron-ui/src/lib/model/model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  config: NgxCronUiConfig = {
    option: {
      minute: false,
      year: false
    }
  }

  constructor() { }

  ngOnInit() { }

  onChange(event) {
    console.log(`result: ${event}`);
  }
}
