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
  minutes = [
    { value: 0, label: '00' },
    { value: 15, label: '15' },
    { value: 30, label: '30' },
    { value: 45, label: '45' },
  ];

  constructor() { }

  ngOnInit() { }

  onChange(event) {
    this.cron = event;
    console.log(`result: ${event}`);
  }
}
