import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorModalComponent } from './modals/error-modal/error-modal.component';
import { SuccessModalComponent } from './modals/success-modal/success-modal.component';
import { DatepickerDirective} from './directives/datepicker.directive';

@NgModule({
  declarations: [ErrorModalComponent, SuccessModalComponent, DatepickerDirective],
  exports: [
    ErrorModalComponent,
    SuccessModalComponent,
    DatepickerDirective
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
