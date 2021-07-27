import { Project } from '../models/Project';

export interface DataSource {
    retrieveProjects(
        onResult: (projects: Project[]) => void,
        onError: (errorCode: string) => void
    )
}