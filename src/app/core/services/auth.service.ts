import { Injectable } from '@angular/core';
import { Auth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, User } from '@angular/fire/auth';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
    private readonly userSubject = new BehaviorSubject<User | null>(null);
    user$ = this.userSubject.asObservable();
    private readonly isReadySubject = new BehaviorSubject(false);
    ready$ = this.isReadySubject.asObservable();

    constructor(private readonly auth: Auth) {
        onAuthStateChanged(this.auth, (user) => {
            this.userSubject.next(user);
            this.isReadySubject.next(true);
        });
    }


    loginWithGoogle() {
        return signInWithPopup(this.auth, new GoogleAuthProvider());
    }

    logout() {
        return signOut(this.auth);
    }

    get currentUser(): User | null {
        return this.auth.currentUser;
    }

    get isAuthenticated(): boolean {
        return !!this.auth.currentUser;
    }

    async getIdToken(): Promise<string | null> {
        const user = this.auth.currentUser;

        return user ? await user.getIdToken() : null;

    }

}

