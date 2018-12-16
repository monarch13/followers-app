import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import 'rxjs/add/observable/combineLatest';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/switchMap';
import { GithubFollowersService } from './github-followers.service';
var GithubFollowersComponent = /** @class */ (function () {
    function GithubFollowersComponent(route, service) {
        this.route = route;
        this.service = service;
    }
    GithubFollowersComponent.prototype.ngOnInit = function () {
        // Observable.combineLatest([
        //   this.route.paramMap,
        //   this.route.queryParamMap
        // ])
        // .subscribe(combined => {
        //   let id = combined[0].get('id');
        //   let page = combined[1].get('page');
        var _this = this;
        //   // this.service.getAll({ id: id, page: page });
        // });
        this.service.getFollowers()
            .subscribe(function (followers) { return _this.followers = followers; });
    };
    GithubFollowersComponent = tslib_1.__decorate([
        Component({
            selector: 'github-followers',
            templateUrl: './github-followers.component.html',
            styleUrls: ['./github-followers.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute,
            GithubFollowersService])
    ], GithubFollowersComponent);
    return GithubFollowersComponent;
}());
export { GithubFollowersComponent };
//# sourceMappingURL=github-followers.component.js.map