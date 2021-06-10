import { Injectable } from '@angular/core';
import { Language } from '../models/enums/Language';
import { Image } from '../models/Image';
import { Project } from '../models/Project';
import { TextValue } from '../models/TextValue';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private readonly projectList: Project[] = [
    new Project(
      '1',
      new TextValue(new Map([[Language.NL, "Dit is een test project"], [Language.EN, "This is a test project"]])),
      new TextValue(new Map([[Language.NL, "Dit is de beschrijving"], [Language.EN, "This is the description"]])),
      new TextValue(new Map([[Language.NL, "Status: engels ontbreekt"]])),
      'https://preview.redd.it/bzr1fth2nbv31.png?width=640&crop=smart&auto=webp&s=162aba7f309a8849888822db9bb0d7cbe93d40bf',
      [
        new TextValue(new Map([[Language.NL, "Test"], [Language.EN, "Test"]])),
        new TextValue(new Map([[Language.NL, "Test sleutelwoord"], [Language.EN, "Test keyword"]])),
        new TextValue(new Map([[Language.NL, "Plopkoek"], [Language.EN, "Plopcake"]])),
      ],
      [
        new Image(
          new TextValue(new Map([[Language.NL, "Plopkoek"], [Language.EN, "Plopcake"]])),
          'https://preview.redd.it/bzr1fth2nbv31.png?width=640&crop=smart&auto=webp&s=162aba7f309a8849888822db9bb0d7cbe93d40bf')
      ],
      []
    )
  ]

  constructor() { }

  get(onResult: (results: object[]) => void, onError: (errorMessage: string) => void) {
    setTimeout(() => {
      onResult(this.projectList)
    }, 2000);
  }

  getById(id: string, onResult: (result: object) => void, onError: (errorMessage: string) => void) {
    setTimeout(() => {
      onResult(this.projectList.filter(project => project.id == id)[0])
    }, 2000);
  }

  search(
    searchString: string,
    language: Language,
    onResult: (result: object) => void,
    onError: (errorMessage: string) => void
  ) {
    setTimeout(() => {
      const filteredProjects: Project[] = this.projectList.filter(
        (project) => {
          const goodKeyword: boolean = project.isGoodKeywordSearch(searchString, language)
          const goodTitle: boolean = project.isGoodTitleSearh(searchString, language)

          return goodKeyword || goodTitle
        }
      )

      onResult(filteredProjects)
    }, 2000);
  }
}
