import { Component, OnDestroy, OnInit, ViewChild, ElementRef } from '@angular/core';

import { Subscription } from 'rxjs'; //TODO: Programacion reactiva!
import { MultimediaService } from '../../services/multimedia.service';
import { TrackModel } from '../../../core/models/tracks.model';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit, OnDestroy {
  @ViewChild('progressBar') progressBar: ElementRef = new ElementRef('')
  listObservers$: Array<Subscription> = []
  state: string = 'paused';


  constructor(public multimediaService: MultimediaService) { }

  ngOnInit(): void {
    const observer2: Subscription = this.multimediaService.callback.subscribe((response: TrackModel) => {
      console.log('Recibiendo cancio...', response);

    })

    this.listObservers$.push(observer2)

  }

  ngOnDestroy(): void {
    this.listObservers$.forEach(u => u.unsubscribe())
    console.log('🔴🔴🔴🔴🔴🔴🔴 BOOM!');
  }


  handlePosition(event: MouseEvent): void {
    const elNative: HTMLElement = this.progressBar.nativeElement
    const { clientX } = event
    const { x, width } = elNative.getBoundingClientRect()
    const clickX = clientX - x //TODO: 1050 - x
    const percentageFromX = (clickX * 100) / width
    console.log(`Click(x): ${percentageFromX}`);
    this.multimediaService.seekAudio(percentageFromX)

  }


}