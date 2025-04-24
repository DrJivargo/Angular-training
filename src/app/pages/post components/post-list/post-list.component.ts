import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {Post, PostService} from '../../../services/post.service';
import {AsyncPipe} from '@angular/common';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.scss',
  imports: [
    AsyncPipe,
  ],
  providers: [PostService]
})
export class PostListComponent implements OnInit {

  public posts$?: Observable<Post[]>;

  constructor(private postService: PostService) {
  }

  public ngOnInit(): void {
    this.posts$ = this.postService.getPosts();
  }
}
