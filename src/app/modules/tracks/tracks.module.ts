import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TracksRoutingModule } from './tracks-routing.module';
import { TracksPageComponent } from './pages/tracks-page/tracks-page.component';
import { SharedModule } from '../../shared/shared.module';
import { GenericSectionComponent } from '@shared/components/generic-section/generic-section.component';


@NgModule({
  declarations: [
    TracksPageComponent,
  ],
  imports: [
    CommonModule,
    TracksRoutingModule,
    SharedModule,
  ]
})
export class TracksModule { }
