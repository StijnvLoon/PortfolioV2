import { Project } from '../models/Project';

export interface DataSource {
    // projects
    retrieveProjects(
        onResult: (projects: Project[]) => void,
        onError: (errorCode: string) => void
    )
    saveProject(
        project: Project,
        onResult: () => void,
        onError: (errorCode: string) => void
    )
    updateProject(
        project: Project,
        onResult: () => void,
        onError: (errorCode: string) => void
    )
    deleteProject(
        project: Project,
        onResult: () => void,
        onError: (errorCode: string) => void
    )
    // files
    retrieveFiles(
        onResult: (files: string[]) => void,
        onError: (errorCode: string) => void
    )
    uploadFile(
        file: any,
        onResult: (url: string) => void,
        onError: (errorCode: string) => void
    )
}