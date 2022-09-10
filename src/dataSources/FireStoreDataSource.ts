import { AngularFirestore } from "@angular/fire/firestore";
import { AngularFireStorage, AngularFireStorageReference } from "@angular/fire/storage";
import { StorageFolder } from "src/models/storage/StorageFolder";
import { StorageItem } from "src/models/storage/StorageItem";
import { Project, ProjectData } from "../models/project/Project";
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
                const projectsData = projectsPayload.map((projectRaw) => {
                    const project = projectRaw.payload.doc.data()
                    project['id'] = projectRaw.payload.doc.id
                    return project
                })

                onResult(projectsData.map((data: ProjectData) => new Project(data)))
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

    retrieveStorageItems(
        path: string = '',
        onResult: (folders: StorageFolder[], items: StorageItem[]) => void,
        onError: (errorCode: string) => void
    ) {
        this.firestorage.ref(path).listAll().subscribe((result) => {
            const items: StorageItem[] = []
            
            result.items.forEach((itemRaw) => {
                itemRaw.getDownloadURL().then((url) => {
                    const item: StorageItem = {
                        name: itemRaw.name,
                        extention: itemRaw.name.split('.')[itemRaw.name.split('.').length-1],
                        path: itemRaw.fullPath,
                        downloadUrl: url
                    }

                    items.push(item)
                }).catch((error) => {
                    onError(error)
                })
            })

            const folders = result.prefixes.map((folderRaw) => {
                const folder: StorageFolder = {
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
        path: string,
        onResult: (item: StorageItem) => void,
        onError: (errorCode: string) => void
    ) {
        this.firestorage.ref(path).put(file)
            .then((itemRaw) => {
                itemRaw.ref.getDownloadURL().then((url) => {
                    onResult({
                        name: itemRaw.ref.name,
                        extention: itemRaw.ref.name.split('.')[itemRaw.ref.name.split('.').length-1],
                        path: itemRaw.ref.fullPath,
                        downloadUrl: url
                    })
                })
            })
            .catch((error) => {
                onError(error)
            })
    }

}