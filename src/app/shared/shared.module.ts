import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { FindItemPipe } from './find-item/find-item.pipe';
import { HighlightDirective } from './highlight/highlight.directive';
import { ListComponent } from './list/list.component';
import { SpinnerOverlayComponent } from './spinner-overlay/spinner-overlay.component';
import { ToastrComponent } from './toastr/toastr.component';
import { CardComponent } from './card/card.component';
import { BadgesComponent } from './badges/badges.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ModalComponent,
    ConfirmationComponent,
    FindItemPipe,
    HighlightDirective,
    ListComponent,
    SpinnerOverlayComponent,
    ToastrComponent,
    CardComponent,
    BadgesComponent
  ],
  exports: [
    ModalComponent,
    ConfirmationComponent,
    FindItemPipe,
    ListComponent,
    SpinnerOverlayComponent,
    ToastrComponent,
    CardComponent,
    BadgesComponent
  ],
})
export class SharedModule {}
