import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GunclockComponent } from './gunclock/gunclock.component';
import { GunclocksComponent } from './gunclocks/gunclocks.component';
import { GunclockNewComponent } from './gunclock-new/gunclock-new.component';
import { GunclockEditComponent } from './gunclock-edit/gunclock-edit.component';
import { GunclockDeleteComponent } from './gunclock-delete/gunclock-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    GunclockComponent,
    GunclocksComponent,
    GunclockNewComponent,
    GunclockEditComponent,
    GunclockDeleteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
