import { TestBed, ComponentFixture } from '@angular/core/testing';
import { OmdbApiService } from '@core/services/omdb-api.service';
import { MovieDetailsPage } from './movie-details.page';
import { ActivatedRoute, provideRouter } from '@angular/router';

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
                get: (key: string) => 'tt123456'
              }
            }
          }
        },
        {
          provide: OmdbApiService,
          useValue: {
            getMovieById: () => Promise.resolve({ Title: 'Mock Movie' })
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
