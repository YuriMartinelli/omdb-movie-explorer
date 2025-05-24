import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { Auth } from '@angular/fire/auth';

describe('AuthService', () => {
    let service: AuthService;
    let mockAuth: jasmine.SpyObj<Auth>;

    beforeEach(() => {
        const spy = jasmine.createSpyObj<Auth>('Auth', ['currentUser']);

        TestBed.configureTestingModule({
            providers: [
                AuthService,
                { provide: Auth, useValue: spy }
            ]
        });

        service = TestBed.inject(AuthService);
        mockAuth = TestBed.inject(Auth) as jasmine.SpyObj<Auth>;
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should return null if user is not authenticated', () => {
        Object.defineProperty(mockAuth, 'currentUser', { get: () => null });
        expect(service.currentUser).toBeNull();
        expect(service.isAuthenticated).toBeFalse();
    });

    it('should return true if user is authenticated', () => {
        const fakeUser: any = { uid: '123', getIdToken: () => Promise.resolve('token') };
        Object.defineProperty(mockAuth, 'currentUser', { get: () => fakeUser });
        expect(service.currentUser).toEqual(fakeUser);
        expect(service.isAuthenticated).toBeTrue();
    });
});
