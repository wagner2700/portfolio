import { Component, inject, signal } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { IProjects } from '../../interface/IProjects.interface';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  #dialog = inject(MatDialog);




  public arrayProjects = signal<IProjects[]>([
    {
      src : 'vfull.png',
      alt : "Projeto Vida Full Stack",
      title : "Vida Full Stack",
      width: '100px',
      height: '51px',
      description : '',
      links: [
        {
          name: 'Conheça o Blog',
          href: 'hhtps://vidafullstack.com.br'
        }
      ]
    }
    
  ])


  public openDialog(data: IProjects){
    this.#dialog.open(DialogProjectsComponent , {
      data : data,
      panelClass : EDialogPanelClass.PROJECTS
    })
  }
}
