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
      new TextValue(new Map([[Language.NL, "Dit is test project #1"], [Language.EN, "This is test project #1"]])),
      new TextValue(new Map([[Language.NL, "Dit is de beschrijving"], [Language.EN, "This is the description"]])),
      new TextValue(new Map([[Language.NL, "Status: engels ontbreekt"]])),
      'https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80',
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
    ),
    new Project(
      '2',
      new TextValue(new Map([[Language.NL, "Dit is test project #2"], [Language.EN, "This is test project #2"]])),
      new TextValue(new Map([[Language.NL, "Dit is de beschrijving"], [Language.EN, "This is the description"]])),
      new TextValue(new Map([[Language.NL, "Status: engels ontbreekt"]])),
      'https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
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
    ),
    new Project(
      '3',
      new TextValue(new Map([[Language.NL, "Dit is test project #3"], [Language.EN, "This is test project #3"]])),
      new TextValue(new Map([[Language.NL, "Dit is de beschrijving"], [Language.EN, "This is the description"]])),
      new TextValue(new Map([[Language.NL, "Status: engels ontbreekt"]])),
      'https://png.pngtree.com/thumb_back/fh260/background/20190827/pngtree-abstract-80s-trendy-geometric-background-neon-colors-image_304908.jpg',
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

  get(onResult: (results: Project[]) => void, onError: (errorMessage: string) => void) {
    setTimeout(() => {
      onResult(this.projectList)
    }, 2000);
  }

  getById(id: string, onResult: (result: Project) => void, onError: (errorMessage: string) => void) {
    setTimeout(() => {
      onResult(this.projectList.filter(project => project.id == id)[0])
    }, 2000);
  }

  getByUrl(url: string, onResult: (result: Project) => void, onError: (errorMessage: string) => void) {
    setTimeout(() => {
      onResult(this.projectList.filter(project => project.getUrl() == url)[0])
    }, 2000);
  }

  search(
    searchString: string,
    language: Language,
    onResult: (results: Project[]) => void,
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
