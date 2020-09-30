import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
    private cronService: CronService,
    public dataService: DataService
  ) { }

  ngOnInit() {
    this.formGroup = new FormGroup({
      baseFrequency: new FormControl(''),
      minutes: new FormControl(this.config.isSetDefaultValue ? [0] : ''),
      hours: new FormControl(this.config.isSetDefaultValue ? [0] : ''),
      daysOfWeek: new FormControl(this.config.isSetDefaultValue ? [0] : ''),
      daysOfMonth: new FormControl(this.config.isSetDefaultValue ? [1] : ''),
      months: new FormControl(this.config.isSetDefaultValue ? [1] : ''),
    })

    this.formGroup.valueChanges.subscribe((value: NgxCronUiFrequency) => {
      if (this.selectedFrequency != +value.baseFrequency) {
        this.formGroup.controls.minutes.setValue(this.config.isSetDefaultValue ? [0] : '', { emitEvent: false })
        this.formGroup.controls.hours.setValue(this.config.isSetDefaultValue ? [0] : '', { emitEvent: false })
        this.formGroup.controls.daysOfWeek.setValue(this.config.isSetDefaultValue ? [0] : '', { emitEvent: false })
        this.formGroup.controls.daysOfMonth.setValue(this.config.isSetDefaultValue ? [1] : '', { emitEvent: false })
        this.formGroup.controls.months.setValue(this.config.isSetDefaultValue ? [1] : '', { emitEvent: false })
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