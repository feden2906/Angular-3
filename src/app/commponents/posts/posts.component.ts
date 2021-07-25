import {Component, Input, OnInit} from '@angular/core';
import {IPost} from "../../models/IPost";
import {PostService} from "../../services/post.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  @Input()
  posts: IPost[];

  constructor(private postService: PostService) {
    this.postService.getPosts().subscribe(value => {
      this.posts = value;
    })

  }

  ngOnInit(): void {
  }

}
