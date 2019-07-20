import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OwnerForCreation } from '../../_interfaces/owner-for-creation.model';
import { ErrorHandlerService } from './../../shared/services/error-handler.service';
import { RepositoryService } from 'src/app/shared/services/repository.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-owner-create',
  templateUrl: './owner-create.component.html',
  styleUrls: ['./owner-create.component.css']
})
export class OwnerCreateComponent implements OnInit {

  public errorMessage: string = '';
  public ownerForm: FormGroup;

  constructor(private repository: RepositoryService, private errorHandler: ErrorHandlerService, private router: Router, private location: Location) { }

  ngOnInit() {
    this.ownerForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(60)]),
      dateOfBirth: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required, Validators.maxLength(100)])
    });
  }
  // TODO: Why making name longer than 60 does not return an error message?

  public validateControl(controlName: string) {
    // if (this.ownerForm.controls[controlName].invalid && this.ownerForm.controls[controlName].touched) {
    //   return true;
    // }
    if (this.ownerForm.controls[controlName].invalid) {
      return true;
    }
    return false;
  }

  public hasError(controlName: string, errorName: string) {
    if (this.ownerForm.controls[controlName].hasError(errorName)) {
      return true;
    }
    return false;
  }

  public executeDatePicker(event) {
    this.ownerForm.patchValue({ 'dateOfBirth': event });
  }

  public createOwner(ownerFormValue) {
    if (this.ownerForm.valid) {
      this.executeOwnerCreation(ownerFormValue);
    }
  }

  private executeOwnerCreation(ownerFormValue) {
    let owner: OwnerForCreation = {
      name: ownerFormValue.name,
      dateOfBirth: ownerFormValue.dateOfBirth,
      address: ownerFormValue.address
    }
    let apiUrl = 'api/owner';
    this.repository.create(apiUrl, owner).subscribe(res => {
      $('#successModal').modal();
     // this.redirectToOwnerList();
     // TODO Does not work to redirect back to owner list. Screen is darkened and to interact with screen.
    },
      (error => {
        this.errorHandler.handleError(error);
        this.errorMessage = this.errorHandler.errorMessage;
        $('#errorModal').modal();
        // TODO error modal does show with errorMessage showing up nicely.
      })

    )
  }

  public redirectToOwnerList() {
    this.router.navigate(['/owner/list']);
    // this.location.back(); // alternative
  }

}
