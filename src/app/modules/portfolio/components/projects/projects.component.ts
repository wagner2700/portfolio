import { Component, signal } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { IProjects } from '../../interface/IProjects.interface';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  public arrayProjects = signal<IProjects[]>([
    {
      src : 'assets/img/projects/vfull.png',
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
}
