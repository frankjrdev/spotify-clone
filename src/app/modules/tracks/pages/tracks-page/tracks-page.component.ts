import { Component, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import * as dataJson from '../../../../data/tracks.json';

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css']
})
export class TracksPageComponent implements OnInit {

  mockTracklist: Array<TrackModel> = []

  constructor() { };

  ngOnInit(): void {
    const { data }: any = (dataJson as any).default;
    this.mockTracklist = data;

  }
}
