import { Project } from "../models/Project";
import { DataSource } from "./DataSource";

export class FireStoreDataSource implements DataSource {

    retrieveProjects(
        onResult: (projects: Project[]) => void,
        onError: (errorCode: string) => void
    ) {
        onResult([])
    }

}