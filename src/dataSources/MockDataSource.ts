import { StorageFolder } from "src/models/storage/StorageFolder";
import { StorageItem } from "src/models/storage/StorageItem";
import { Project } from "../models/project/Project";
import { DataSource } from "./DataSource";

export class MockDataSource implements DataSource {

    private readonly mockDelay: number = 1000

    private readonly folders1: StorageFolder[] = [
        { name: 'test', path: 'test' },
        { name: 'test2', path: 'test2' }
    ]
    private readonly folders2: StorageFolder[] = [
        { name: 'child', path: 'test/child'}
    ]
    private readonly items: StorageItem[] = [
        { name: 'olifant.jpg', extention: '.jpg', path: '', downloadUrl: 'https://walz-images.walz.de/v2/800x800_r1/images/MH/653/1/6531075_01/jpg/yoga-olifant-p1661023-1.jpg' },
        { name: 'kangaroe.jpg', extention: '.jpg', path: '', downloadUrl: 'https://walz-images.walz.de/v2/800x800_r1/images/MH/653/1/6531075_01/jpg/yoga-olifant-p1661023-1.jpg' }
    ]

    private readonly projectList: Project[] = [
        new Project({
            id: '1',
            title: { EN: 'This is test project #1', NL: 'Dit is test project #1' },
            logos: [],
            content: {},
            // [
            //     {
            //         title: { EN: 'Description', NL: 'Beschrijving' },
            //         text: { EN: 'This is the description paragraph', NL: 'Dit is de beschrijving paragraaf' },
            //         content: [
            //             {
            //                 title: { EN: 'Description', NL: 'Beschrijving' },
            //                 text: { EN: 'This is the description paragraph', NL: 'Dit is de beschrijving paragraaf' },
            //             }
            //         ]
            //     }
            // ],
            status: { NL: 'engels ontbreekt' },
            coverImage: 'https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80',
            keywords: [
                { EN: 'test', NL: 'test' },
                { EN: 'cookie', NL: 'plopkoek' },
                { EN: '1', NL: '1' }
            ],
            images: [
                {
                    title: { EN: 'Plopcake', NL: 'Plopkoek' },
                    url: 'https://preview.redd.it/bzr1fth2nbv31.png?width=640&crop=smart&auto=webp&s=162aba7f309a8849888822db9bb0d7cbe93d40bf'
                },
                {
                    title: { EN: 'Cover 1', NL: 'Cover 1' },
                    url: 'https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80'
                },
                {
                    title: { EN: 'Cover 2', NL: 'Cover 2' },
                    url: 'https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                },
                {
                    title: { EN: 'Cover 3', NL: 'Cover 3' },
                    url: 'https://png.pngtree.com/thumb_back/fh260/background/20190827/pngtree-abstract-80s-trendy-geometric-background-neon-colors-image_304908.jpg'
                }
            ],
            urls: [],
            questions: [],
            creationDate: new Date().toDateString()
        }),
        new Project({
            id: '2',
            title: { EN: 'CouponManager', NL: 'CouponManager' },
            logos: [
                'https://qfltfw.am.files.1drv.com/y4m3uUw2dNbmkCzCCJyMKYlZh_RLgpzM7eo4T4SKdi4HBfuKJE66M_KixMPGzuRpFiK34TMV9eQ9fLI1Eh1HIwg-DVDLLvHc_N68CH31pqxduon29ps7pUMWQb4NdKKUOBpFKuJnJgiaW5ys0aFjb3TU9-V_NFgDG8nc3KWtBZLvizU1mDBmsOroxWGuqKqckz57E07-Cu1NvEZAERffMQZzg?',
                'https://xox0fg.db.files.1drv.com/y4mb-jwrObXWVuaIS6yr5jeS9vm2oeKjxARMpLtEmSRbZVN3u36R9RB_PJ7LLytIndCw8bIoJ_ofquXJzDvjbT8OLd-4_hqpW6aU6siAY3FbAtjchvX7hzrEfcCH5GaVTGOUGOZlDljhK9QEzEjCbB4Qs6p1q7jZzKTlfnUQ8jYmRfhn5P58X_UlyK0sM3aJehIzEtwvpghuN9WyOlEAxZL0A?'
            ],
            content: {},
            // [
            //     {
            //         title: { EN: 'Problem', NL: 'Probleem' },
            //         text: { NL: 'Een vriend van mij beheert de social media afdeling van een aantal New York Pizza instanties. Hiervoor moet hij duizenden couponcodes aanvragen, beheren en uitgeven en werkte hiervoor in Excel. Hij vroeg zich af of ik geen handige desktop applicatie kon maken om dit werk voor hem makkelijker te maken.' },
            //         content: [
            //             {
            //                 title: { EN: 'Technologies', NL: 'Technologieën' },
            //                 text: { NL: 'Er is gekozen voor een Electron applicatie in combinatie met Angular' },
            //                 content: [
            //                     {
            //                         title: { EN: 'Angular', NL: 'Angular' },
            //                         text: { NL: '*uitleg Angular applicatie*' }
            //                     },
            //                     {
            //                         title: { EN: 'Electron', NL: 'Electron' },
            //                         text: { NL: '*uitleg Electron applicatie*' }
            //                     }
            //                 ]
            //             }
            //         ]
            //     }
            // ],
            status: { EN: 'Finished', NL: 'Afgerond' },
            coverImage: 'https://ibuz9q.db.files.1drv.com/y4mLllhWqe7uAiWwI-niZzLH8oKkGTOtAZmaIFw4pYW2fVWxAi7rNh9TMdFd042ngASyWUIx-KpQOteuCR-JRZDn52osZNBmuxMBjppGZIJ613UaukTyTJyn_9KSZmaryv87jQBPOTIciSKEvO1emNETghOU45Q7yi5GVUHCuDvko2IlWVU6B7Rlt9txfnXgGGAgpgpwAprBcuSa16IuFaB2A',
            keywords: [
                { EN: 'coupon', NL: 'coupon' },
                { EN: 'angular', NL: 'angular' },
                { EN: 'electron', NL: 'electron' },
                { EN: 'material', NL: 'materiaal' },
                { EN: 'desktop', NL: 'desktop' },
                { EN: 'offline', NL: 'offline' }
            ],
            images: [
                {
                    title: { EN: 'Step 1', NL: 'Stap 1' },
                    url: 'https://ibuz9q.db.files.1drv.com/y4mLllhWqe7uAiWwI-niZzLH8oKkGTOtAZmaIFw4pYW2fVWxAi7rNh9TMdFd042ngASyWUIx-KpQOteuCR-JRZDn52osZNBmuxMBjppGZIJ613UaukTyTJyn_9KSZmaryv87jQBPOTIciSKEvO1emNETghOU45Q7yi5GVUHCuDvko2IlWVU6B7Rlt9txfnXgGGAgpgpwAprBcuSa16IuFaB2A'
                },
                {
                    title: { EN: 'Step 2', NL: 'Stap 2' },
                    url: 'https://gruz9q.db.files.1drv.com/y4muRHrdSaJMMQC9G1l70W7VefRmPG3MJjdnbayBH--unDFNPXnB27MMp6J5ENzkWcwfwPJjV58cpGKo0iDVm3hYUn7rOCDRzUJE74iYHlZO8xlvvc50CUcrM6vntWN4-qRWspgAlHdtOjY7x6amA98H81fETMOWPa9IIx5SXmKPmvDoTRZRxSIeJM3aRmCoNqNZSphXUi5B4mkIwlmxP7JIA'
                },
                {
                    title: { EN: 'Step 3', NL: 'Stap 3' },
                    url: 'https://i7wk8g.db.files.1drv.com/y4moOJF-VJOA785p2TCQ9hQvzaOc6edhJt-f0_pUABrQcNb5aMPZHC1suEX_oXvPxqspiEr13B2O3be_CZB32LFbf8Q9Wl3giyelAh_wujSYahwieAyCqBc1FJNOo5hqUdXnbiUUBvoNQSdGBO7OvBRAVHRdMggxcnsRj_JO1HsXSb1FZ4cIqDZSrk-8mEqQX-dD4EOjqZ-R1_vbK3E_OmC-g'
                },
                {
                    title: { EN: 'Step 4', NL: 'Stap 4' },
                    url: 'https://irwk8g.db.files.1drv.com/y4m-yHD7GuOwYWhKPu0_NZNohOyXHGSfABtAHdGkNqs6iACd5uq91gxIJhQhq5wiPvaU6WRM4bDPRZ0bdsvhZqtgZYjxF3QCrnmUxsyToAtIX5SbfMlunnx6c2Kc-iowSFwPuWqUWPcgbtxCeYx1DlGC-L6SWlqcqWipIICRxZ4PUZuyEsfBAfu7xnubaFikGPMc61z9AzwgJXpwYaMsMYhww?'
                },
                {
                    title: { EN: 'Step 5', NL: 'Stap 5' },
                    url: 'https://jbwk8g.db.files.1drv.com/y4msacpOF_HlWQBrZernmTPaO1S4tLK-Ll736KUumCmQ0ZXFGXCUYFMMc7s_6Pm16C_dHTciATN5xE44dCMJqXZKcVVm9octKa1K1rNGTsZd6oqsW8SoXnMQ0kYfWBvQVw8YnyYXVUkjJqYFqC0CjySOhYXsf9sFhpSseamNmXmQCJrHN7W9mXBivHkgNIKnbVUvLGdYJp4ASmSY_aljjxQ-g'
                },
                {
                    title: { EN: 'Step 6', NL: 'Stap 6' },
                    url: 'https://jlwk8g.db.files.1drv.com/y4mIGVoLUSdMsfDkIWSKYqZ1r7VtF_S0B3PvRhOqaEfHQf1BnmkfaSt6NutMdFcduIVF8TAQjkYEm0pDnq7pDN5GXkWZoVIoITSvb-9BqlTM8BiZ02qHJ3eOnesRiEE8HfIIF82lCe4qhIt1HBOsC1egksDJpPZwqQ-hICky5T7hyxT4Z5f6LS9MH5Mp4wQby7MUU_DBo4553z_M8-ymG08EQ'
                }
            ],
            urls: [
                {
                    name: { EN: 'Git', NL: 'Git' },
                    url: 'https://github.com/StijnvLoon/CouponManager'
                },
                {
                    name: { EN: 'Download', NL: 'Download' },
                    url: 'https://1drv.ms/u/s!AmvSohWdATZvkQdL-KS2OtRoDQi5?e=pZpSzd'
                },
                {
                    name: { EN: 'teeeeeeeeeeeeeeeeeeeeeeeeeest', NL: 'test' },
                    url: 'https://website-bbv.web.app'
                }
            ],
            questions: [
                {
                    question: { EN: 'This is a question?', NL: 'Dit is een vraag?' },
                    answer: { EN: 'This is an answer.', NL: 'Dit is een antwoord.' },
                },
                {
                    question: { EN: 'This is the next question?', NL: 'Dit is de volgende vraag?' },
                    answer: { EN: 'This is an answer.', NL: 'Dit is een antwoord.' },
                }
            ],
            creationDate: '2016-11-14'
        })
    ]

    retrieveProjects(
        onResult: (projects: Project[]) => void,
        onError: (errorCode: string) => void
    ) {
        setTimeout(() => {
            onResult(this.projectList)
        }, this.mockDelay);
    }

    saveProject(
        project: Project,
        onResult: () => void,
        onError: (errorCode: string) => void
    ) {
        setTimeout(() => {
            this.projectList.push(project)
            onResult()
        }, this.mockDelay);
    }

    updateProject(
        project: Project,
        onResult: () => void,
        onError: (errorCode: string) => void
    ) {
        setTimeout(() => {
            const index = this.projectList.indexOf(
                this.projectList.filter((i) => i.id == project.id)[0]
            )
            this.projectList[index] = project
            onResult()
        }, this.mockDelay);
    }

    deleteProject(
        project: Project,
        onResult: () => void,
        onError: (errorCode: string) => void
    ) {
        setTimeout(() => {
            const index = this.projectList.indexOf(
                this.projectList.filter((i) => i.id == project.id)[0]
            )
            this.projectList.splice(index, 1)
            onResult()
        }, this.mockDelay);
    }

    retrieveStorageItems(
        path: string = '',
        onResult: (folders: StorageFolder[], items: StorageItem[]) => void,
        onError: (errorCode: string) => void
    ) {
        switch(path) {
            case '': onResult(this.folders1, []); break
            case 'test': onResult(this.folders2, []); break
            case 'test2': onResult([], this.items); break
        }
    }

    uploadFile(
        file: any,
        path: string,
        onResult: (item: StorageItem) => void,
        onError: (errorCode: string) => void
    ) {
        setTimeout(() => {
            onResult(file)
        }, this.mockDelay);
    }

}