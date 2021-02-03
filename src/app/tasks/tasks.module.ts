import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksComponent } from './tasks.component';
import { SharedModule } from '../shared/shared.module';
import { TaskModalComponent } from './task-modal/task-modal.component';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [TasksComponent, TaskModalComponent],
})
export class TasksModule {}
