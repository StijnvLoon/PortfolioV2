import { Injectable, isDevMode } from '@angular/core';
import { FireStoreDataSource } from 'src/dataSources/FireStoreDataSource';
import { DataSource } from '../dataSources/DataSource';
import { MockDataSource } from '../dataSources/MockDataSource';
import { Language } from '../models/Dictionary';
import { Project } from '../models/Project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private projects: Project[]
  private dataSource: DataSource

  constructor() {
    if (isDevMode()) {
      this.dataSource = new MockDataSource()
    } else {
      this.dataSource = new FireStoreDataSource()
    }
  }

  getUrl(project: Project) {
    return project.title.EN.replaceAll(' ', '-');
  }

  private isGoodKeywordSearch(project: Project, searchString: string, language: Language): boolean {
    // const result = project.keywords.filter(
    //     (textvalue) => {
    //         const textString = textvalue.get(language).toLowerCase()
    //         const filterString = searchString.toLowerCase()

    //         return textString.includes(filterString)
    //     })[0]

    // return result ? true : false
    return true
  }

  private isGoodTitleSearh(project: Project, searchString: string, language: Language): boolean {
    // const textString = this.title.get(language).toLowerCase()
    // const filterString = searchString.toLowerCase()

    // return textString.includes(filterString)
    return true
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
    this.get(onResult, onError)
    //TODO

    // setTimeout(() => {
    //   const filteredProjects: Project[] = this.projectList.filter(
    //     (project) => {
    //       const goodKeyword: boolean = this.isGoodKeywordSearch(project, searchString, language)
    //       const goodTitle: boolean = this.isGoodTitleSearh(project, searchString, language)

    //       return goodKeyword || goodTitle
    //     }
    //   )

    //   onResult(filteredProjects)
    // }, 1000);
  }

  private setProjects(
    onFinished: () => void,
    onError: (errorMessage: string) => void
  ) {
    this.dataSource.retrieveProjects(
      (projects: Project[]) => {
        this.projects = projects
        onFinished()
      }, onError)
  }
}