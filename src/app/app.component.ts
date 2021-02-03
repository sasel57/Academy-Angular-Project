import { SpinnerOverlayService } from './core/services/spinner-overlay.service';
import { Component, ViewChild } from '@angular/core';
import { ModalComponent } from './shared/modal/modal.component';
import { ToastrService } from './core/services/toastr.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'task-manager';
  items = [
    { id: 1, name: 'Item number 3', description: 'Item description 3' },
    { id: 2, name: 'Item number 2', description: 'Item description 2' },
  ];
  @ViewChild(ModalComponent) modal: ModalComponent;
  selectedId = 2;
  constructor(private spinnerOverlayService: SpinnerOverlayService, private toastrService: ToastrService){

  }

  showSpinner(): void{
    this.spinnerOverlayService.show();
    setTimeout(() => {
     this.hideSpinner();
  }, 1000);
  }

  hideSpinner(): void{
    this.spinnerOverlayService.hide();
  }

  showErrorMessage(): void {
    this.toastrService.error(' This is an error message!');
  }

  showSuccessMessage(): void {
    this.toastrService.success(' This is a success message!');
  }

  showWarningMessage(): void {
    this.toastrService.warn(' This is a warning message!');
  }

  showInformationMessage(): void {
    this.toastrService.info(' This is an information message!');
  }
}
