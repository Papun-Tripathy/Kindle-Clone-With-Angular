import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElementBoxComponent } from './element-box.component';
import { SingleElementComponent } from './single-element/single-element.component';

@NgModule({
  declarations: [
    ElementBoxComponent,
    SingleElementComponent,
  ],
  imports: [
    CommonModule,
  ],
  providers: [],
  bootstrap: [ElementBoxComponent]
})
export class ElementBoxModule { }
