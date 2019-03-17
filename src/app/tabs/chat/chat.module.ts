import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { chatPage } from './chat.page';
import { FilterPipe } from 'src/app/pipes/filter.pipe';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: chatPage }])
  ],
  declarations: [chatPage, FilterPipe]
})
export class chatPageModule {}
