import { Injectable } from '@angular/core';
import { FireStoreDataSource } from 'src/dataSources/FireStoreDataSource';
import { DataSource } from '../dataSources/DataSource';
import { MockDataSource } from '../dataSources/MockDataSource';
import { Language } from '../models/Dictionary';
import { Project } from '../models/Project';
import { environment } from 'src/environments/environment';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { LanguageService } from './language.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private projects: Project[]
  private dataSource: DataSource

  public sortFunctions: {name: string, function: (a: Project, b: Project) => number}[] = [
    //TODO add creation date to project and sorting functions for date
    {
      name: "A > Z",
      function: (a, b) => (this.languageService.get(a.title) > this.languageService.get(b.title) ? 1 : -1)
    },
    {
      name: "Z > A",
      function: (a, b) => (this.languageService.get(a.title) < this.languageService.get(b.title) ? 1 : -1)
    }
  ]

  constructor(
    private firestorage: AngularFireStorage,
    private firestore: AngularFirestore,
    private languageService: LanguageService
  ) {
    if (!environment.production) {
      this.dataSource = new MockDataSource()
    } else {
      this.dataSource = new FireStoreDataSource(this.firestorage, this.firestore)
    }
  }

  getUrl(project: Project) {
    return project.title.EN.replaceAll(' ', '-').toLowerCase();
  }

  private isGoodKeywordSearch(project: Project, searchString: string = "", language: Language): boolean {
    const result = project.keywords.filter(
      (textvalue) => {
        const translatedKeyword: string = textvalue[Language[language]]

        if (translatedKeyword !== undefined) {
          const textString: string = translatedKeyword.toLowerCase()
          const filterString: string = searchString.toLowerCase()

          return textString.includes(filterString)
        }
        return false
      })[0]

    return result ? true : false
  }

  private isGoodTitleSearh(project: Project, searchString: string = "", language: Language): boolean {
    const textString = project.title[Language[language]].toLowerCase()
    const filterString = searchString.toLowerCase()

    return textString.includes(filterString)
  }

  get(onResult: (results: Project[]) => void, onError: (errorMessage: string) => void) {
    if (this.projects) {
      onResult(this.projects)
    } else {
      this.setProjects(
        () => { onResult(this.projects) },
        onError
      )
    }
  }

  getById(id: string, onResult: (result: Project) => void, onError: (errorMessage: string) => void) {
    if (this.projects) {
      onResult(this.projects.filter(project => project.id == id)[0])
    } else {
      this.setProjects(
        () => { onResult(this.projects.filter(project => project.id == id)[0]) },
        onError
      )
    }
  }

  getByUrl(url: string, onResult: (result: Project) => void, onError: (errorMessage: string) => void) {
    if (this.projects) {
      onResult(this.projects.filter(project => this.getUrl(project) == url)[0])
    } else {
      this.setProjects(
        () => { onResult(this.projects.filter(project => this.getUrl(project) == url)[0]) },
        onError
      )
    }
  }

  search(
    searchString: string,
    language: Language,
    onResult: (results: Project[]) => void,
    onError: (errorMessage: string) => void
  ) {
    const filteredProjects: Project[] = this.projects.filter(
      (project) => {
        const goodKeyword: boolean = this.isGoodKeywordSearch(project, searchString, language)
        const goodTitle: boolean = this.isGoodTitleSearh(project, searchString, language)

        return goodKeyword || goodTitle
      }
    )

    onResult(filteredProjects)
  }

  saveProject(
    project: Project,
    onResult: () => void,
    onError: (errorCode: string) => void
  ) {
    this.dataSource.saveProject(project, onResult, onError)
  }

  updateProject(
    project: Project,
    onResult: () => void,
    onError: (errorCode: string) => void
  ) {
    this.dataSource.updateProject(project, onResult, onError)
  }

  deleteProject(
    project: Project,
    onResult: () => void,
    onError: (errorCode: string) => void
  ) {
    this.dataSource.deleteProject(project, onResult, onError)
  }

  sortProjects(sortFunction: (a: Project, b: Project) => number) {
    this.projects = this.projects.sort(sortFunction)
  }

  private setProjects(
    onFinished: () => void,
    onError: (errorMessage: string) => void
  ) {
    this.dataSource.retrieveProjects(
      (projects: Project[]) => {
        this.projects = projects
        this.sortProjects(this.sortFunctions[0].function)
        onFinished()
      }, onError)
  }
}