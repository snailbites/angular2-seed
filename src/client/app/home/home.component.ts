import { Component, OnInit } from '@angular/core';
import { BlogListService } from '../shared/index';

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})

export class HomeComponent implements OnInit {

  newName: string = '';
  errorMessage: string;
  blogs: any[] = [];

  /**
   * Creates an instance of the HomeComponent with the injected
   * BlogListService.
   *
   * @param {BlogListService} BlogListService - The injected BlogListService.
   */
  constructor(public BlogListService: BlogListService) {}

  /**
   * Get the names OnInit
   */
  ngOnInit() {
    this.getBlogs();
  }

  /**
   * Handle the BlogListService observable
   */
  getBlogs() {
    this.BlogListService.get()
		     .subscribe(
		       blogs => this.blogs = blogs,
		       error =>  this.errorMessage = <any>error
		       );
  }

}
