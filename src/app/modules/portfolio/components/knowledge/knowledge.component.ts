import { Component, signal } from '@angular/core';
import { IKnowledge } from '../../interface/IKnowledge.interface';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {

  public arrayKnowledge = signal<IKnowledge[]>([
    {
      src : 'CSharp.svg',
      alt: 'ícone de conhecimento de html5',
    },
    {
      src : 'java.svg',
      alt: 'ícone de conhecimento de html5',
    },
    
    {
      src : 'css3.svg',
      alt: 'ícone de conhecimento de css3',
    },
    {
      src : 'javascript.svg',
      alt: 'ícone de conhecimento de javascript',
    },
    {
      src : 'angular.svg',
      alt: 'ícone de conhecimento de angular',
    },
  ])


}
