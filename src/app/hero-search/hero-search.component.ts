import { Component, OnInit }  from '@angular/core';
import { Router }             from '@angular/router';

import { Observable }         from 'rxjs/Observable';
import { Subject }            from 'rxjs/Subject';

// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { HeroSearchService } from '../hero-search.service';
import { Hero } from '../hero';

@Component({
  selector: 'bsa-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent implements OnInit {
  heroes: Observable<Hero[]>;
  private searchTerms = new Subject<string>();

  constructor(
    private heroSearchService: HeroSearchService,
    private router: Router
  ) { }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.heroes = this.searchTerms
    // wait 300ms after each keystroke before considering the term
    .debounceTime(300)   
    // ignore if next search term is same as previous     
    .distinctUntilChanged()
    // switch to new observable each time the term changes   
    .switchMap(term => term   
      // return the http search observable
      ? this.heroSearchService.search(term)
      // or the observable of empty heroes if there was no search term
      : Observable.of<Hero[]>([]))
    .catch(error => {
      // TODO: add real error handling
      console.log(error);
      return Observable.of<Hero[]>([]);
    });
  }

  gotoDetail(hero: Hero): void {
    this.router.navigate(['detail/', hero.id]);
  }

}