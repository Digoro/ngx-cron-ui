import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxCronUiComponent } from './ngx-cron-ui.component';
import { CronService } from './services/cron.service';
import { DataService } from './services/data.service';

@NgModule({
  declarations: [
    NgxCronUiComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    NgxCronUiComponent
  ],
  providers: [
    DataService,
    CronService,
  ]
})
export class NgxCronUiModule { }
