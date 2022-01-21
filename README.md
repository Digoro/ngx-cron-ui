
  <a href="https://www.npmjs.com/package/ngx-cron-ui" target="_blank"><img src="https://img.shields.io/npm/v/ngx-cron-ui.svg?style=flat-square&color=007acc&label=version&logo=NPM" alt="version" /></a> <a href="https://github.com/Digoro/ngx-cron-ui/blob/master/projects/ngx-cron-ui/README.md" target="_blank"><img alt="Angular" src="https://img.shields.io/static/v1.svg?label=&message=Angular&style=flat-square&logo=Angular&color=dd0031"></a>

# NgxCronUi

<h3 align=center>
Angular module for cron schedule editor
</h3>
<p align=center>
<img  width="300" src="https://raw.githubusercontent.com/Digoro/ngx-cron-ui/master/projects/ngx-cron-ui/images/example01.png" />
</p>

## Version
* Angular <= 9, 0.5.0
* Angular > 11, 0.6.0

## Install
npm
```bash
$ npm install --save ngx-cron-ui
```

## Get started
1. import `NgxCronUiModule`
```ts
// app.module.ts

import { NgxCronUiModule } from 'ngx-cron-ui';

@NgModule({
  imports: [
    NgxCronUiModule
  ]
})
```
2. set config.
```ts
//app.component.ts

config: NgxCronUiConfig = {
    option: {
      minute: false,
      hour: false,
      year: false
    },
    isSetDefaultValue: true,
    isBaseFrequencyNewLine: true
  }
```
3. add `ngx-cron-ui` component.
```html
<!-- app.html -->

<ngx-cron-ui (onChangeEvent)="changeSchedule($event)" [config]="config"></ngx-cron-ui>
```