import { TestBed } from '@angular/core/testing';

import { NgxCronUiService } from './ngx-cron-ui.service';

describe('NgxCronUiService', () => {
  let service: NgxCronUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxCronUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
