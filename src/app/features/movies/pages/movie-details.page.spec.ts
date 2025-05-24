import { TestBed, ComponentFixture } from '@angular/core/testing';
import { ActivatedRoute, provideRouter } from '@angular/router';
import { OmdbApiService } from '@core/services/omdb-api.service';
import { MovieDetailsPage } from './movie-details.page';

describe('MovieDetailsPage', () => {
  let component: MovieDetailsPage;
  let fixture: ComponentFixture<MovieDetailsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieDetailsPage],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: (key: string) => 'tt123456' // Mock imdbID
              }
            }
          }
        },
        {
          provide: OmdbApiService,
          useValue: {
            getMovieById: () =>
              Promise.resolve({
                Title: 'Test Movie',
                Year: '2020',
                Genre: 'Action',
                Plot: 'Some plot',
                Poster: 'poster.jpg'
              })
          }
        },
        provideRouter([])
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(MovieDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
