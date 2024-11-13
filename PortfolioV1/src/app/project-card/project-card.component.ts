import { Component, Input } from '@angular/core';
import { Project } from '../_models/project';
import { MdbModalRef, MdbModalService} from 'mdb-angular-ui-kit/modal';
import { ProjectsService } from '../_services/projects.service';
import { ProjectModalComponent } from '../project-modal/project-modal.component';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {
    @Input() project = {} as Project;
    modalRef?: MdbModalRef<ProjectModalComponent>;

    constructor(private modalService: MdbModalService) {

    }

    OpenProjectModal() {

      this.modalService.open(ProjectModalComponent, {
        modalClass: 'modal-lg modal-dialog-scrollable', // Set the modal size to large
        data: { project: this.project } // Pass the project data to the modal
      });
    }

    


  }  
