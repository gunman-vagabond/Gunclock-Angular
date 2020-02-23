import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GunclockComponent } from './gunclock/gunclock.component';
import { GunclocksComponent } from './gunclocks/gunclocks.component';
import { GunclockNewComponent } from './gunclock-new/gunclock-new.component';
import { GunclockEditComponent } from './gunclock-edit/gunclock-edit.component';
import { GunclockDeleteComponent } from './gunclock-delete/gunclock-delete.component';

const routes: Routes = [
  { path: 'gunclocks', component: GunclocksComponent },
  { path: 'gunclock/new', component: GunclockNewComponent },
  { path: 'gunclock/read/:id', component: GunclockComponent },
  { path: 'gunclock/edit/:id', component: GunclockEditComponent },
  { path: 'gunclock/delete/:id', component: GunclockDeleteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
