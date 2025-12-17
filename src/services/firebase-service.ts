import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore, addDoc, collection } from 'firebase/firestore';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {

  private app = initializeApp(environment.firebaseConfig);
  private db = getFirestore(this.app);

  constructor() {
    console.log('Firebase initialized');
  }

  // 🔥 Contact form data save function
  saveContactMessage(data: { 
    name: string;  
    email: string;
    message: string;
  }) {  
    return addDoc(collection(this.db, 'contacts'), {
      ...data,
      createdAt: new Date()
    });
  }
}
