import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})


export class PortfolioComponent implements OnInit {

  projects: any = [
    {
      "name": "Join",
      "language": "JavaScript | HTML | CSS",
      "translations": {
        "en": "A task manager inspired by the Kanban system. Create and organize tasks using drag and drop functions, assing users and categories.",
        "de": "Ein Aufgaben-Manager inspiriert vom Kanban-System. Erstellen und organisieren Sie Aufgaben mithilfe von Drag-and-Drop-Funktionen, weisen Sie Benutzer und Kategorien zu."
      },
      "image": "laptop-join.jpg",
      "url": "https://join.daniel-schirmer.de/",
      "github": "https://github.com/Daniel-Schi/Join",
    },
    {
      "name": "Knight vs. Golem",
      "language": "JavaScript | HTML | CSS",
      "translations": {
        "en": "A jumping, running and throwing game based on an object-oriented approach. Help knights find swords and potions to fight against the big golem.",
        "de": "Ein Sprung-, Lauf- und Wurfspiel, das auf einem objektorientierten Ansatz basiert. Hilf ritter dabei, Schwerter und Zaubertranks zu finden, um gegen den großen Golem zu kämpfen."
      },
      "image": "game-pc.png",
      "url": "https://knights-vs-golem.daniel-schirmer.de/",
      "github": "https://github.com/Daniel-Schi/Knights-vs-Golem",
    },
    {
      "name": "Pokedex",
      "language": "JavaScript | HTML | CSS | Api",
      "translations": {
        "en": "Based on the PokeAPI a simple libary that provides and catalogues pokemon information.",
        "de": "Basierend auf der PokeAPI, einer einfachen Bibliothek, die Pokemon-Informationen bereitstellt und katalogisiert."
      },
      "image": "pokedex-pc.png",
      "url": "https://pokemon.daniel-schirmer.de/",
      "github": "https://github.com/Daniel-Schi/Pokemon",
    }
  ];

  constructor(private translate: TranslateService) {

  }

  getProjectDescription(project: any): string {
    let lang = this.translate.currentLang;
    return project.translations[lang] || project.translations['en'];
  }

  ngOnInit() {

  }
}
