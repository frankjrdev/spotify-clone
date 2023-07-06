import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { catchError, map, mergeMap, Observable, of } from 'rxjs';
import * as dataJson from '../../../data/tracks.json'
import { environment } from '../../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class TrackService {
  private readonly apiUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }


  getAllTracks$(): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/tracks`)
      .pipe(
        map(({ data }: any) => {
          return data
        })
      )
  }

  private skipById(listTracks: TrackModel[], id: number): Promise<TrackModel[]> {
    return new Promise((resolve, reject) => {
      const listTmp = listTracks.filter(a => a._id !== id)
      resolve(listTmp)
    })
  }

  /**
  * 
  * @returns Devolver canciones random
  */
  getAllRandom$(): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/tracks`)
      .pipe(
        mergeMap(({ data }: any) => this.skipById(data, 2)),
        // map((dataRevertida) => { //TODO aplicar un filter comun de array
        //   return dataRevertida.filter((track: TrackModel) => track._id !== 1)
        // })
        catchError((err) => {
          const { status, statusText } = err;
          return of([])
        })
      )
  }
}

