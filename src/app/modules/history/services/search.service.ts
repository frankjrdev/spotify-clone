import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private readonly URL = environment.apiUrl

  constructor(private http: HttpClient) { }


  searchTracks$(term: string): Observable<any> {
    return this.http.get(`${this.URL}/tracks?serc=${term}`)
      .pipe(
        map((dataJson: any) => dataJson.data)
      )
  }
} 
