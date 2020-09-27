import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgxCronUiConfig, NgxCronUiFrequency, OptionType } from './model/model';
import { CronService } from './services/cron.service';
import { DataService } from './services/data.service';

@Component({
  selector: 'ngx-cron-ui',
  templateUrl: './ngx-cron-ui.component.html',
  styleUrls: ['./ngx-cron-ui.component.css'],
})
export class NgxCronUiComponent implements OnInit {
  @Input() config: NgxCronUiConfig;
  @Output() onChangeEvent = new EventEmitter();
  formGroup: FormGroup;

  selectedFrequency = 0;

  constructor(
    private fb: FormBuilder,
    private cronService: CronService,
    public dataService: DataService
  ) { }

  ngOnInit() {
    this.formGroup = this.fb.group({
      baseFrequency: 0,
      minutes: '',
      hours: '',
      daysOfWeek: '',
      daysOfMonth: '',
      months: '',
    });

    this.formGroup.valueChanges.subscribe((value: NgxCronUiFrequency) => {
      if (this.selectedFrequency != +value.baseFrequency) {
        this.formGroup.controls.minutes.setValue([], { emitEvent: false })
        this.formGroup.controls.hours.setValue([], { emitEvent: false })
        this.formGroup.controls.daysOfWeek.setValue([], { emitEvent: false })
        this.formGroup.controls.daysOfMonth.setValue([], { emitEvent: false })
        this.formGroup.controls.months.setValue([], { emitEvent: false })
      }
      this.selectedFrequency = +value.baseFrequency;
      const cronString = this.cronService.fromCron(this.formGroup.value);
      this.onChangeEvent.emit(cronString)
    })

    if (this.config.option) {
      this.dataService.frequencyList = this.dataService.frequencyList.filter(x => !(this.config.option.hasOwnProperty(OptionType[x.type])
        && !this.config.option[OptionType[x.type]])
      );
    }
  }
}