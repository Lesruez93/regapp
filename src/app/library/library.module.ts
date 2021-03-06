import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LibraryPage } from './library.page';
import {NgPipesModule} from 'angular-pipes';

const routes: Routes = [
  {
    path: '',
    component: LibraryPage
  }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes),
        NgPipesModule
    ],
  declarations: [LibraryPage]
})
export class LibraryPageModule {}
