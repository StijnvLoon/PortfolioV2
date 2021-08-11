import { AngularFirestore } from "@angular/fire/firestore";
import { AngularFireStorage } from "@angular/fire/storage";
import { Project } from "../models/Project";
import { DataSource } from "./DataSource";

export class FireStoreDataSource implements DataSource {

    private readonly storageRoot: string = "projects/"
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

    retrieveFiles(
        onResult: (files: string[]) => void,
        onError: (errorCode: string) => void
    ) {

    }

    uploadFile(
        file: any,
        onResult: (url: string) => void,
        onError: (errorCode: string) => void
    ) {

    }

}