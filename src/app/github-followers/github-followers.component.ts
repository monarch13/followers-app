
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
// import 'rxjs/add/observable/combineLatest';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/switchMap';
import { GithubFollowersService } from './github-followers.service';

@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
  followers;
  constructor(
    private route: ActivatedRoute,
    private service: GithubFollowersService) { }

  ngOnInit() {
    // Observable.combineLatest([
    //   this.route.paramMap,
    //   this.route.queryParamMap
    // ])
    // .subscribe(combined => {
    //   let id = combined[0].get('id');
    //   let page = combined[1].get('page');

    //   // this.service.getAll({ id: id, page: page });
    // });

    this.service.getFollowers()
      .subscribe(followers => this.followers = followers);
  }

}
