import { Observable } from "rxjs";
import { SaveScheduleRequest, SaveScheduleResponse, ScheduleAppointmentMonthResponse } from "./schedule.models";

export interface ImplScheduleService {

    save(request: SaveScheduleRequest): Observable<SaveScheduleResponse>

    delete(id: string): Observable<void>

    listInMonth(year: number, month: number): Observable<ScheduleAppointmentMonthResponse>

}