import { Injectable } from '@angular/core';
import { NgxCronUiFrequency } from '../model/model';

@Injectable()
export class CronService {
    constructor() {
    }
    fromCron(cron: NgxCronUiFrequency): string {
        const result = ['*', '*', '*', '*', '*'];
        if (+cron.baseFrequency >= 2) {
            result[0] = cron.minutes.length > 0 ? cron.minutes.join(',') : '*';
        }
        if (+cron.baseFrequency >= 3) {
            result[1] = cron.hours.length > 0 ? cron.hours.join(',') : '*';
        }
        if (+cron.baseFrequency === 4) {
            result[4] = cron.daysOfWeek.length > 0 ? cron.daysOfWeek.join(',') : '*';
        }
        if (+cron.baseFrequency >= 5) {
            result[2] = cron.daysOfMonth.length > 0 ? cron.daysOfMonth.join(',') : '*';
        }
        if (+cron.baseFrequency === 6) {
            result[3] = cron.months.length > 0 ? cron.months.join(',') : '*';
        }
        return result.join(" ");
    }
}
