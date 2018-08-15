import { TestBed, inject } from '@angular/core/testing';

import { TodoDataService } from './todo-data.service';

import {StoreModule} from '@ngrx/store';

describe('TodoDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoDataService],
      imports:[StoreModule.forRoot({  })]
    });
  });

  it('should be created', inject([TodoDataService], (service: TodoDataService) => {
    expect(service).toBeTruthy();
  }));
});
