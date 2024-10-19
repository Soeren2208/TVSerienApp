import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

// Firebase Konfiguration
const firebaseConfig = {
  apiKey: "AIzaSyBXLopiSDLf8ENQwtqJXEktxhWtNw8ytQs",
  authDomain: "tv-serien-angular18.firebaseapp.com",
  projectId: "tv-serien-angular18",
  storageBucket: "tv-serien-angular18.appspot.com",
  messagingSenderId: "994139157163",
  appId: "1:994139157163:web:ddae0778643082260cbdee"
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp(firebaseConfig)), // Firebase initialisieren
    provideFirestore(() => getFirestore()) // Firestore bereitstellen
  ],
};
