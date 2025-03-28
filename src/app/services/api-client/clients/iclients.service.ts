import { Observable } from "rxjs";
import { DetailClientResponse, ListClientResponse, SaveClientRequest, SaveClientResponse, UpdateClientRequest, UpdateClientResponse } from "./client.models";

export interface ImplClientService{

    save(request: SaveClientRequest):Observable<SaveClientResponse>;

    update(id:string, request: UpdateClientRequest):Observable<UpdateClientResponse>;

    delete(id:string):Observable<void>;

    list():Observable<ListClientResponse[]>;

    findById(id:string):Observable<DetailClientResponse>;
}