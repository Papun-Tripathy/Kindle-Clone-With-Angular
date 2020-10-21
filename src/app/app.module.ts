import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ElementBoxComponent } from './element-box/element-box.component';
import { NewItemsComponent } from './new-items/new-items.component';
import { FooterComponent } from './footer/footer.component';
import { TrailThingsComponent } from './trail-things/trail-things.component';
import { SingleBoxComponent } from './single-box/single-box.component';
import { SingleElementComponent } from './element-box/single-element/single-element.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ElementBoxComponent,
    NewItemsComponent,
    FooterComponent,
    TrailThingsComponent,
    SingleBoxComponent,
    SingleElementComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
