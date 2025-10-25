import { TestBed } from '@angular/core/testing';
import { Cardserv } from './cardserv';


describe('Cardserv', () => {
  let service: Cardserv;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Cardserv);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
