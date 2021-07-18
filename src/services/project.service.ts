import { Injectable } from '@angular/core';
import { Url } from 'src/models/Url';
import { Language } from '../models/enums/Language';
import { Image } from '../models/Image';
import { Paragraph, Project } from '../models/Project';
import { TextValue } from '../models/TextValue';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private readonly projectList: Project[] = [
    new Project(
      '1',
      new TextValue(new Map([[Language.NL, "Dit is test project #1"], [Language.EN, "This is test project #1"]])),
      [],
      [],
      [
        new Paragraph(
          new TextValue(new Map([[Language.NL, "Beschrijving"], [Language.EN, "Description"]])),
          new TextValue(new Map([[Language.NL, "Dit is de beschrijving paragraaf"], [Language.EN, "This is the description paragraph"]])),
          [
            new Paragraph(
              new TextValue(new Map([[Language.NL, "Beschrijving"], [Language.EN, "Description"]])),
              new TextValue(new Map([[Language.NL, "Dit is de beschrijving paragraaf"], [Language.EN, "This is the description paragraph"]])),
              [
                new Paragraph(
                  new TextValue(new Map([[Language.NL, "Beschrijving"], [Language.EN, "Description"]])),
                  new TextValue(new Map([[Language.NL, "Dit is de beschrijving paragraaf"], [Language.EN, "This is the description paragraph"]]))
                )
              ]
            )
          ]
        ),
        new Paragraph(
          new TextValue(new Map([[Language.NL, "Beschrijving"], [Language.EN, "Description"]])),
          new TextValue(new Map([[Language.NL, "Dit is de beschrijving paragraaf"], [Language.EN, "This is the description paragraph"]]))
        )
      ],
      new TextValue(new Map([[Language.NL, "engels ontbreekt"]])),
      'https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80',
      [
        new TextValue(new Map([[Language.NL, "Test"], [Language.EN, "Test"]])),
        new TextValue(new Map([[Language.NL, "Test sleutelwoord"], [Language.EN, "Test keyword"]])),
        new TextValue(new Map([[Language.NL, "Plopkoek"], [Language.EN, "Plopcake"]])),
        new TextValue(new Map([[Language.NL, "1"], [Language.EN, "1"]]))
      ],
      [
        new Image(
          new TextValue(new Map([[Language.NL, "Plopkoek"], [Language.EN, "Plopcake"]])),
          'https://preview.redd.it/bzr1fth2nbv31.png?width=640&crop=smart&auto=webp&s=162aba7f309a8849888822db9bb0d7cbe93d40bf'),
        new Image(
          new TextValue(new Map([[Language.NL, "Cover 1"], [Language.EN, "Cover 1"]])),
          'https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80'),
        new Image(
          new TextValue(new Map([[Language.NL, "Cover 2"], [Language.EN, "Cover 2"]])),
          'https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'),
        new Image(
          new TextValue(new Map([[Language.NL, "Cover 3"], [Language.EN, "Cover 3"]])),
          'https://png.pngtree.com/thumb_back/fh260/background/20190827/pngtree-abstract-80s-trendy-geometric-background-neon-colors-image_304908.jpg')
      ],
      [],
      []
    ),
    new Project(
      '2',
      new TextValue(new Map([[Language.NL, "Dit is test project #2"], [Language.EN, "This is test project #2"]])),
      [],
      [],
      [
        new Paragraph(
          new TextValue(new Map([[Language.NL, "Beschrijving"], [Language.EN, "Description"]])),
          new TextValue(new Map([[Language.NL, "Dit is de beschrijving paragraaf"], [Language.EN, "This is the description paragraph"]]))
        )
      ],
      new TextValue(new Map([[Language.NL, "engels ontbreekt"]])),
      'https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      [
        new TextValue(new Map([[Language.NL, "Test"], [Language.EN, "Test"]])),
        new TextValue(new Map([[Language.NL, "Test sleutelwoord"], [Language.EN, "Test keyword"]])),
        new TextValue(new Map([[Language.NL, "Plopkoek"], [Language.EN, "Plopcake"]])),
        new TextValue(new Map([[Language.NL, "2"], [Language.EN, "2"]]))
      ],
      [
        new Image(
          new TextValue(new Map([[Language.NL, "Plopkoek"], [Language.EN, "Plopcake"]])),
          'https://preview.redd.it/bzr1fth2nbv31.png?width=640&crop=smart&auto=webp&s=162aba7f309a8849888822db9bb0d7cbe93d40bf'),
        new Image(
          new TextValue(new Map([[Language.NL, "Cover 1"], [Language.EN, "Cover 1"]])),
          'https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80'),
        new Image(
          new TextValue(new Map([[Language.NL, "Cover 2"], [Language.EN, "Cover 2"]])),
          'https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'),
        new Image(
          new TextValue(new Map([[Language.NL, "Cover 3"], [Language.EN, "Cover 3"]])),
          'https://png.pngtree.com/thumb_back/fh260/background/20190827/pngtree-abstract-80s-trendy-geometric-background-neon-colors-image_304908.jpg')
      ],
      [],
      []
    ),
    new Project(
      'N35b$%h630wja24',
      new TextValue(new Map([[Language.NL, "CouponManager"], [Language.EN, "CouponManager"]])),
      [
        new Image(
          new TextValue(new Map([[Language.NL, 'Angular'], [Language.EN, 'Angular']])),
          'https://qfltfw.am.files.1drv.com/y4m3uUw2dNbmkCzCCJyMKYlZh_RLgpzM7eo4T4SKdi4HBfuKJE66M_KixMPGzuRpFiK34TMV9eQ9fLI1Eh1HIwg-DVDLLvHc_N68CH31pqxduon29ps7pUMWQb4NdKKUOBpFKuJnJgiaW5ys0aFjb3TU9-V_NFgDG8nc3KWtBZLvizU1mDBmsOroxWGuqKqckz57E07-Cu1NvEZAERffMQZzg?'
        ),
        new Image(
          new TextValue(new Map([[Language.NL, 'Electron'], [Language.EN, 'Electron']])),
          'https://xox0fg.db.files.1drv.com/y4mb-jwrObXWVuaIS6yr5jeS9vm2oeKjxARMpLtEmSRbZVN3u36R9RB_PJ7LLytIndCw8bIoJ_ofquXJzDvjbT8OLd-4_hqpW6aU6siAY3FbAtjchvX7hzrEfcCH5GaVTGOUGOZlDljhK9QEzEjCbB4Qs6p1q7jZzKTlfnUQ8jYmRfhn5P58X_UlyK0sM3aJehIzEtwvpghuN9WyOlEAxZL0A?'
        )
      ],
      ['#000000'],
      [
        new Paragraph(
          new TextValue(new Map([[Language.NL, "Probleem"], [Language.EN, "Problem"]])),
          new TextValue(new Map([[Language.NL, "Een vriend van mij beheert de social media afdeling van een aantal New York Pizza instanties. Hiervoor moet hij duizenden couponcodes aanvragen, beheren en uitgeven en werkte hiervoor in Excel. Hij vroeg zich af of ik geen handige desktop applicatie kon maken om dit werk voor hem makkelijker te maken."]]))
        ),
        new Paragraph(
          new TextValue(new Map([[Language.NL, "Technologieën"], [Language.EN, "Technologies"]])),
          new TextValue(new Map([[Language.NL, "Er is gekozen voor een Electron applicatie in combinatie met Angular"]])),
          [
            new Paragraph(
              new TextValue(new Map([[Language.NL, "Angular"], [Language.EN, "Angular"]])),
              new TextValue(new Map([[Language.NL, "*uitleg Angular applicatie*"]]))
            ),
            new Paragraph(
              new TextValue(new Map([[Language.NL, "Electron"], [Language.EN, "Electron"]])),
              new TextValue(new Map([[Language.NL, "*uitleg Electron applicatie*"]]))
            )
          ]
        )
      ],
      new TextValue(new Map([[Language.NL, "Afgerond"], [Language.EN, "Finished"]])),
      'https://ibuz9q.db.files.1drv.com/y4mLllhWqe7uAiWwI-niZzLH8oKkGTOtAZmaIFw4pYW2fVWxAi7rNh9TMdFd042ngASyWUIx-KpQOteuCR-JRZDn52osZNBmuxMBjppGZIJ613UaukTyTJyn_9KSZmaryv87jQBPOTIciSKEvO1emNETghOU45Q7yi5GVUHCuDvko2IlWVU6B7Rlt9txfnXgGGAgpgpwAprBcuSa16IuFaB2A',
      [
        new TextValue(new Map([[Language.NL, "coupon"], [Language.EN, "coupon"]])),
        new TextValue(new Map([[Language.NL, "angular"], [Language.EN, "angular"]])),
        new TextValue(new Map([[Language.NL, "electron"], [Language.EN, "electron"]])),
        new TextValue(new Map([[Language.NL, "materiaal"], [Language.EN, "material"]])),
        new TextValue(new Map([[Language.NL, "desktop"], [Language.EN, "desktop"]])),
        new TextValue(new Map([[Language.NL, "offline"], [Language.EN, "offline"]]))
      ],
      [
        new Image(
          new TextValue(new Map([[Language.NL, "Stap 1"], [Language.EN, "Step 1"]])),
          'https://ibuz9q.db.files.1drv.com/y4mLllhWqe7uAiWwI-niZzLH8oKkGTOtAZmaIFw4pYW2fVWxAi7rNh9TMdFd042ngASyWUIx-KpQOteuCR-JRZDn52osZNBmuxMBjppGZIJ613UaukTyTJyn_9KSZmaryv87jQBPOTIciSKEvO1emNETghOU45Q7yi5GVUHCuDvko2IlWVU6B7Rlt9txfnXgGGAgpgpwAprBcuSa16IuFaB2A'),
        new Image(
          new TextValue(new Map([[Language.NL, "Stap 2"], [Language.EN, "Step 2"]])),
          'https://gruz9q.db.files.1drv.com/y4muRHrdSaJMMQC9G1l70W7VefRmPG3MJjdnbayBH--unDFNPXnB27MMp6J5ENzkWcwfwPJjV58cpGKo0iDVm3hYUn7rOCDRzUJE74iYHlZO8xlvvc50CUcrM6vntWN4-qRWspgAlHdtOjY7x6amA98H81fETMOWPa9IIx5SXmKPmvDoTRZRxSIeJM3aRmCoNqNZSphXUi5B4mkIwlmxP7JIA'),
        new Image(
          new TextValue(new Map([[Language.NL, "Stap 3"], [Language.EN, "Step 3"]])),
          'https://i7wk8g.db.files.1drv.com/y4moOJF-VJOA785p2TCQ9hQvzaOc6edhJt-f0_pUABrQcNb5aMPZHC1suEX_oXvPxqspiEr13B2O3be_CZB32LFbf8Q9Wl3giyelAh_wujSYahwieAyCqBc1FJNOo5hqUdXnbiUUBvoNQSdGBO7OvBRAVHRdMggxcnsRj_JO1HsXSb1FZ4cIqDZSrk-8mEqQX-dD4EOjqZ-R1_vbK3E_OmC-g'),
        new Image(
          new TextValue(new Map([[Language.NL, "Stap 4"], [Language.EN, "Step 4"]])),
          'https://irwk8g.db.files.1drv.com/y4m-yHD7GuOwYWhKPu0_NZNohOyXHGSfABtAHdGkNqs6iACd5uq91gxIJhQhq5wiPvaU6WRM4bDPRZ0bdsvhZqtgZYjxF3QCrnmUxsyToAtIX5SbfMlunnx6c2Kc-iowSFwPuWqUWPcgbtxCeYx1DlGC-L6SWlqcqWipIICRxZ4PUZuyEsfBAfu7xnubaFikGPMc61z9AzwgJXpwYaMsMYhww?'),
        new Image(
          new TextValue(new Map([[Language.NL, "Stap 5"], [Language.EN, "Step 5"]])),
          'https://jbwk8g.db.files.1drv.com/y4msacpOF_HlWQBrZernmTPaO1S4tLK-Ll736KUumCmQ0ZXFGXCUYFMMc7s_6Pm16C_dHTciATN5xE44dCMJqXZKcVVm9octKa1K1rNGTsZd6oqsW8SoXnMQ0kYfWBvQVw8YnyYXVUkjJqYFqC0CjySOhYXsf9sFhpSseamNmXmQCJrHN7W9mXBivHkgNIKnbVUvLGdYJp4ASmSY_aljjxQ-g'),
        new Image(
          new TextValue(new Map([[Language.NL, "Stap 6"], [Language.EN, "Step 6"]])),
          'https://jlwk8g.db.files.1drv.com/y4mIGVoLUSdMsfDkIWSKYqZ1r7VtF_S0B3PvRhOqaEfHQf1BnmkfaSt6NutMdFcduIVF8TAQjkYEm0pDnq7pDN5GXkWZoVIoITSvb-9BqlTM8BiZ02qHJ3eOnesRiEE8HfIIF82lCe4qhIt1HBOsC1egksDJpPZwqQ-hICky5T7hyxT4Z5f6LS9MH5Mp4wQby7MUU_DBo4553z_M8-ymG08EQ'),
      ],
      [
        new Url(
          new TextValue(new Map([[Language.NL, "Git"], [Language.EN, "Git"]])),
          'https://github.com/StijnvLoon/CouponManager'
        ),
        new Url(
          new TextValue(new Map([[Language.NL, "Download"], [Language.EN, "Download"]])),
          'https://1drv.ms/u/s!AmvSohWdATZvkQdL-KS2OtRoDQi5?e=pZpSzd'
        ),
        new Url(
          new TextValue(new Map([[Language.NL, "test"], [Language.EN, "test"]])),
          'https://website-bbv.web.app'
        )
      ],
      [],
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
