import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article } from './article';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  constructor(private httpClient: HttpClient) {}

  getArticles() {
    return this.httpClient.get<Article[]>('http://localhost:3000/articles');
  }
}
