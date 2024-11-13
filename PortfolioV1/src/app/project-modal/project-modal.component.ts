import { Component, Inject } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { Project } from '../_models/project';

@Component({
  selector: 'app-project-modal',
  templateUrl: './project-modal.component.html',
  styleUrl: './project-modal.component.css'
})
export class ProjectModalComponent {
  project = {} as Project;



  constructor(public modalRef: MdbModalRef<ProjectModalComponent>) {

  }
}