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
      src : 'BarberBoss.png',
      alt : "Barberboss",
      title : "API - Barberboss",
      width: '100%',
      height: '100%',
      description : 'API em .NET 8 para gerenciamento de despesas pessoais com DDD, testes unitários, e relatórios em PDF/Excel. Armazena dados via MySQL.',
      links: [
        {
          name: 'Acesso o repositório',
          href: 'https://github.com/wagner2700/BarberBoss-Api'
        }
      ]
    },
    {
      src : 'GestaoVagas.png',
      alt : "Gestão de Vagas",
      title : "Aplicação de Gerenciamento de Vagas de RH",
      width: '100%',
      height: '100%',
      description : 'Esta é uma aplicação Spring Boot que permite o gerenciamento de vagas de Recursos Humanos (RH)',
      links: [
        {
          name: 'Acesso o repositório',
          href: 'https://github.com/wagner2700/gestaoVagas'
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
