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
      hour: false,
      year: false
    },
    isSetDefaultValue: true,
    isBaseFrequencyNewLine: true,
  }

  cron: string;

  constructor() { }

  ngOnInit() { }

  onChange(event) {
    this.cron = event;
    console.log(`result: ${event}`);
  }
}
