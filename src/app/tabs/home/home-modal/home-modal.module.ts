import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomeModalComponent } from './home-modal.component';

@NgModule({
    imports: [ CommonModule, IonicModule,FormsModule ],
    declarations: [HomeModalComponent ],
    entryComponents: [HomeModalComponent],
    exports: [HomeModalComponent]
})
export class HomeModalModule {}