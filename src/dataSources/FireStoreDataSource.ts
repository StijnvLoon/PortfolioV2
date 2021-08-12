import { AngularFirestore } from "@angular/fire/firestore";
import { AngularFireStorage } from "@angular/fire/storage";
import { Folder } from "src/models/Folder";
import { Item } from "src/models/Item";
import { Project } from "../models/Project";
import { DataSource } from "./DataSource";

export class FireStoreDataSource implements DataSource {

    private readonly collectionsName: string = "projects"

    constructor(
        private firestorage: AngularFireStorage,
        private firestore: AngularFirestore
    ) { }

    retrieveProjects(
        onResult: (projects: Project[]) => void,
        onError: (errorCode: string) => void
    ) {
        this.firestore
            .collection(this.collectionsName)
            .snapshotChanges()
            .subscribe((projectsPayload) => {
                const projects = projectsPayload.map((projectRaw) => {
                    const project = projectRaw.payload.doc.data()
                    project['id'] = projectRaw.payload.doc.id
                    return project
                })

                onResult(projects as Project[])
            });
    }

    saveProject(
        project: Project,
        onResult: () => void,
        onError: (errorCode: string) => void
    ) {
        new Promise<any>((resolve, reject) => {
            this.firestore
                .collection(this.collectionsName)
                .add(project)
                .then(
                    res => {
                        onResult()
                    },
                    err => {
                        reject(err)
                        onError(err)
                    });
        });
    }

    updateProject(
        project: Project,
        onResult: () => void,
        onError: (errorCode: string) => void
    ) {
        this.firestore
            .collection(this.collectionsName)
            .doc(project.id)
            .set(project, { merge: true })
            .then(
                res => {
                    onResult()
                },
                err => {
                    onError(err)
                });
    }

    deleteProject(
        project: Project,
        onResult: () => void,
        onError: (errorCode: string) => void
    ) {
        this.firestore
            .collection(this.collectionsName)
            .doc(project.id)
            .delete()
            .then(
                res => {
                    onResult()
                },
                err => {
                    onError(err)
                });
    }

    async retrieveStorageItems(
        path: string = '',
        onResult: (folders: Folder[], items: Item[]) => void,
        onError: (errorCode: string) => void
    ) {
        await this.firestorage.ref(path).listAll().subscribe((result) => {
            const items: Item[] = []
            
            result.items.forEach((itemRaw) => {
                itemRaw.getDownloadURL().then((url) => {
                    const item: Item = {
                        name: itemRaw.name,
                        extention: itemRaw.name.split('.')[itemRaw.name.split('.').length-1],
                        path: itemRaw.fullPath,
                        downloadUrl: url
                    }

                    items.push(item)
                })
            })

            const folders = result.prefixes.map((folderRaw) => {
                const folder: Folder = {
                    name: folderRaw.name,
                    path: folderRaw.fullPath
                }
                return folder
            })

            onResult(folders, items)
        })
    }

    uploadFile(
        file: any,
        onResult: (url: string) => void,
        onError: (errorCode: string) => void
    ) {

    }

}