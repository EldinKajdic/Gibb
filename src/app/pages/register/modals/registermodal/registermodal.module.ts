import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RegistermodalComponent } from "./registermodal.component";
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [ CommonModule, IonicModule,FormsModule ],
    declarations: [RegistermodalComponent ],
    entryComponents: [RegistermodalComponent],
    exports: [RegistermodalComponent]
})
export class RegisterModalModule {}