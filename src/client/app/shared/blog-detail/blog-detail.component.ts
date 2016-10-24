import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';

/**
 * This class represents the blog detail component.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-blog-detail',
  templateUrl: 'blog-detail.component.html',
  styleUrls: ['blog-detail.component.css']
})

export class BlogDetailComponent implements OnInit {

  public url: string;

  constructor(private route: ActivatedRoute) {

  }

  /**
   * Get the names OnInit
   */
  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      this.url = params['id'];
    });

    console.log(this.url);
  }
}

