import { Observable } from 'rxjs';

export interface ICursorService {
  setCursorData(cursorData: Idata): Observable<string>;
}
export interface Idata {
  ip: string;
  brand: string;
  date: string;
  coordinate: {
    x: number;
    y: number;
  }[];
}
