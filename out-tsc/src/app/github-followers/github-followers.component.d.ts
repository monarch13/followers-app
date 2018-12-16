import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GithubFollowersService } from './github-followers.service';
export declare class GithubFollowersComponent implements OnInit {
    private route;
    private service;
    followers: any;
    constructor(route: ActivatedRoute, service: GithubFollowersService);
    ngOnInit(): void;
}
