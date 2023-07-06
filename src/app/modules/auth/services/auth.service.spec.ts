import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import * as mockRaw from '../../../data/user.json'


describe('AuthService', () => {
  let service: AuthService;
  let mockUser: any = (mockRaw as any).default;
  let httpClientSpy: { post: jasmine.Spy }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });

    httpClientSpy = jasmine.createSpyObj('HttpClient', ['post'])
    service = new AuthService(httpClientSpy as any);
  });

  it('Should return an object with data and tokeSession',
    (done: DoneFn) => {
      //Arrange

      const mockResponse = {
        data: {},
        tokenSession: '123d123'
      }
      httpClientSpy.post.and.returnValue(
        of(mockResponse)
      )


      //Act 
      service.sendCredentials(mockUser.email, mockUser.password)
        .subscribe(responseApi => {
          const getProperties = Object.keys(responseApi)
          expect(getProperties).toContain('data')
          expect(getProperties).toContain('tokenSession')
          done()
        })

    });
});
