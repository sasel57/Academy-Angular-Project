import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesComponent } from './categories.component';
import { SharedModule } from '../shared/shared.module';
import { CategoryModalComponent } from './category-modal/category-modal.component';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [CategoriesComponent, CategoryModalComponent],
})
export class CategoriesModule {}
