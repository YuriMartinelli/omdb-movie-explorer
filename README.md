# 🎬 OMDB Explorer – Angular Challenge

This project is part of a technical challenge to demonstrate proficiency with Angular, NgRx, Firebase Auth, and SOLID principles.

## 🛠️ Technologies Used

- Angular 17+ (standalone components)
- NgRx Store & Effects
- Firebase Authentication (Google OAuth)
- Tailwind CSS
- RxJS
- Jasmine + Karma (unit testing)

---

## 🚀 Features

- 🔎 Movie search with OMDB API
- 🧠 Global state management with NgRx
- 🔐 Google sign-in (Firebase Auth)
- 🔁 Session persistence with route protection
- 💾 Secure token-based HTTP interceptor
- ✅ Unit tests for reducers, effects, guards, services, and components

---

## 🧪 Running the Project

1. Install dependencies:
    npm install


2. Start the development server:
    ng serve

3. Run tests:
    ng test

4. View test coverage:
    ng test --code-coverage

## 🔐 Firebase Setup (required)
Go to https://console.firebase.google.com

Create a new project

Enable Google sign-in under Authentication > Sign-in method

Replace credentials in src/environments/firebase-config.ts

## 🧪 Test Coverage
✅ Reducers
✅ Effects
✅ Components
✅ Route guards
✅ Authentication service
✅ Token interceptor logic

## ✅ SOLID Principles Applied
S: Auth logic is separated into AuthService, guard, and interceptor

O: Each service/component is open for extension via observables/hooks

L: Uses interfaces and observable patterns

I: Interfaces used for MovieApi abstraction

D: Injects dependencies via constructor/Angular DI


---

Developed by Yuri Martinelli for DTI Angular Technical Test.