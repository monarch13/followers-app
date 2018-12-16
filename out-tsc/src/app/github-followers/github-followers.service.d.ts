import { HttpClient } from '@angular/common/http';
export declare class GithubFollowersService {
    private http;
    private readonly _url;
    constructor(http: HttpClient);
    getFollowers(): import("rxjs/internal/Observable").Observable<Object>;
}
