import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OwnerListComponent } from './owner-list/owner-list.component';
import { OwnerDetailsComponent } from './owner-details/owner-details.component';
import { SharedModule } from './../shared/shared.module';
import { OwnerCreateComponent } from './owner-create/owner-create.component';
import { ReactiveFormsModule} from '@angular/forms';
import { OwnerUpdateComponent } from './owner-update/owner-update.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        ReactiveFormsModule,
        RouterModule.forChild([
            { path: 'list', component: OwnerListComponent },
            { path: 'details/:id', component: OwnerDetailsComponent },
            {path: 'create', component: OwnerCreateComponent},
            {path: 'update/:id', component: OwnerUpdateComponent}
        ])
    ],
    declarations: [OwnerListComponent, OwnerDetailsComponent, OwnerCreateComponent, OwnerUpdateComponent]
})
export class OwnerModule { }
