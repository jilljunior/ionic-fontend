import {Injectable} from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { Preference, User, Video } from 'src/mock';
import { tap, catchError } from "rxjs/operators"
import { Observable, of} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    baseUrl? = 'http://localhost:8080'
    currentVideo?: Video
    constructor(private http: HttpClient) {
    }


    getVideoList(): Observable<Video[]> {
        return this.http.get<Video[]>(`${this.baseUrl}/videos`).pipe(
            tap(res=>{
                console.table(res)
            }),
            catchError(err=>{
                console.error(err)
                return of([])
            })
        )
    }

    getVideoList_By_pref(pref): Observable<Video[]> {
        return this.http.get<Video[]>(`${this.baseUrl}/videos/${pref}`).pipe(
            tap(res=>{
                console.table(res)
            }),
            catchError(err=>{
                console.error(err)
                return of([])
            })
        )
    }

    getUser(Id: any): Observable<User>{
        return this.http.get<User>(`${this.baseUrl}/get/${Id}`).pipe(
            tap(res=>{
                console.table(res)
            }),
        )
    }
    getPreference(Id: any): Observable<Preference[]>{
        return this.http.get<Preference[]>(`${this.baseUrl}/preference/${Id}`).pipe(
            tap(res=>{
                console.table(res)
            }),
            catchError(err=>{
                console.error(err)
                return of([])
            })
        )
    }

    updateLike = (title:string):Observable<string>=>{
        return this.http.get<string>(`${this.baseUrl}//likes/${title}`).pipe(
            tap(res=>{
                console.table(res)
            }),
            catchError(err=>{
                console.error(err)
                return of('')
            })
        )
    }
   /*
    getTrends() {
        const trends = [{
            trendName: 'oneday',
            viewCounts: '117.0M',
            trendProfiles: [{
                id: 0,
                photo: 'https://p16-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/07d1f69ce9d44c1d8595ac98ea3ba1e7?x-expires=1632960000&x-signature=X4zn3PMh9%2F0NBBIFcI8s%2FdssB%2FE%3D'
            }, {
                id: 1,
                photo: 'https://p16-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/4870130f4d394ab5abf7493d198ddf10_1631472363?x-expires=1632960000&x-signature=LecuzUdAAy6FKMTqF65T2YhqliU%3D'
            }, {
                id: 2,
                photo: 'https://p16-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/9eb176d5871e4ab3a68fdf02e2343ccc_1631272060?x-expires=1632960000&x-signature=Eb5si%2F26R%2BK2eAeQpyEcHtbazwY%3D'
            }, {
                id: 3,
                photo: 'https://p16-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/4870130f4d394ab5abf7493d198ddf10_1631472363?x-expires=1632960000&x-signature=LecuzUdAAy6FKMTqF65T2YhqliU%3D'
            }, {
                id: 4,
                photo: 'https://p16-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/07d1f69ce9d44c1d8595ac98ea3ba1e7?x-expires=1632960000&x-signature=X4zn3PMh9%2F0NBBIFcI8s%2FdssB%2FE%3D'
            }, {
                id: 5,
                photo: 'https://p16-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/4870130f4d394ab5abf7493d198ddf10_1631472363?x-expires=1632960000&x-signature=LecuzUdAAy6FKMTqF65T2YhqliU%3D'
            }]
        },
            {
                trendName: 'alan4747',
                viewCounts: '340.0B',
                trendProfiles: [{
                    id: 0,
                    photo: 'https://p16-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/07d1f69ce9d44c1d8595ac98ea3ba1e7?x-expires=1632960000&x-signature=X4zn3PMh9%2F0NBBIFcI8s%2FdssB%2FE%3D'
                }, {
                    id: 1,
                    photo: 'https://p16-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/07d1f69ce9d44c1d8595ac98ea3ba1e7?x-expires=1632960000&x-signature=X4zn3PMh9%2F0NBBIFcI8s%2FdssB%2FE%3D'
                }, {
                    id: 2,
                    photo: 'https://p16-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/07d1f69ce9d44c1d8595ac98ea3ba1e7?x-expires=1632960000&x-signature=X4zn3PMh9%2F0NBBIFcI8s%2FdssB%2FE%3D'
                }, {
                    id: 3,
                    photo: 'https://p16-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/07d1f69ce9d44c1d8595ac98ea3ba1e7?x-expires=1632960000&x-signature=X4zn3PMh9%2F0NBBIFcI8s%2FdssB%2FE%3D'
                }, {
                    id: 4,
                    photo: 'https://p16-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/07d1f69ce9d44c1d8595ac98ea3ba1e7?x-expires=1632960000&x-signature=X4zn3PMh9%2F0NBBIFcI8s%2FdssB%2FE%3D'
                }, {
                    id: 5,
                    photo: 'https://p16-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/07d1f69ce9d44c1d8595ac98ea3ba1e7?x-expires=1632960000&x-signature=X4zn3PMh9%2F0NBBIFcI8s%2FdssB%2FE%3D'
                }]
            }];
        return trends;
    }

    getSlides() {
        const slides = [
            {
                id: 0,
                photo: './assets/png/1.jpg'
            },
            {
                id: 1,
                photo: './assets/png/2.jpg'
            },
            {
                id: 2,
                photo: './assets/png/1.jpg'
            }
        ];
        return slides;
    }

 
   */
}