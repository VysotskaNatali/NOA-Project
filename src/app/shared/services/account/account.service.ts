import { Injectable } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from '@angular/fire/auth';
import {
  Firestore,
  doc,
  docData,
  loadBundle,
  setDoc,
} from '@angular/fire/firestore';
import { Subject, Subscription } from 'rxjs';
import { ROLE } from '../../constants/role.constant';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  public loginSubcription!: Subscription;
  public isUserLogin$ = new Subject<boolean>();

  constructor(
    private auth: Auth,
    private afs: Firestore,
    private router: Router
  ) {}

  async login(email: string, password: string): Promise<void> {
    const credential = await signInWithEmailAndPassword(
      this.auth,
      email,
      password
    );
    this.loginSubcription = docData(
      doc(this.afs, 'users', credential.user.uid)
    ).subscribe(
      (user) => {
        const currentUser = { ...user, uid: credential.user.uid };
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        if (user && user['role'] === ROLE.USER) {
          this.router.navigate(['/cabinet']);
        }else  if (user && user['role'] === ROLE.ADMIN) {
          this.router.navigate(['/admin']);
        }
      },
      (e) => {
        console.log(e);
      }
    );
  }

  async register(
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    phone: number
  ): Promise<any> {
    const credential = await createUserWithEmailAndPassword(
      this.auth,
      email,
      password
    );
    const user = {
      email: credential.user.email,
      firstName: firstName,
      lastName: lastName,
      phone: phone,
      address: '',
      role: 'USER',
    };
    setDoc(doc(this.afs, 'users', credential.user.uid), user);
  }
}
