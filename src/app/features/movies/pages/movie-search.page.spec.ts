import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { provideRouter } from '@angular/router';
import { MovieSearchPage } from './movie-search.page';
import { MockStore } from '@ngrx/store/testing';
import { provideStore } from '@ngrx/store';
import { searchMovies } from '../store/movie.action';
describe('MovieSearchPage', () => {
  let component: MovieSearchPage;
  let fixture: ComponentFixture<MovieSearchPage>;
  let store: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieSearchPage, FormsModule],
      providers: [
        provideStore(),
        provideRouter([])
      ]
    }).compileComponents();

    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(MovieSearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the MovieSearchPage component', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch searchMovies action on search', () => {
    spyOn(store, 'dispatch');
    component.query = 'Inception';
    component.year = '2010';
    component.searchMovies();
    expect(store.dispatch).toHaveBeenCalledWith(
      searchMovies({ query: 'Inception', year: '2010' })
    );
  });

  it('should not dispatch if query is empty', () => {
    spyOn(store, 'dispatch');
    component.query = '   '; // whitespace only
    component.searchMovies();
    expect(store.dispatch).not.toHaveBeenCalled();
  });
});
