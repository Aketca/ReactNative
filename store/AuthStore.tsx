import { makeAutoObservable } from "mobx"

export default class AuthStore {
  isLoading = false;
  userToken = '';

  constructor() {
    makeAutoObservable(this);
  }

  setUserToken (value: string) {
    this.userToken = value;
  }

  toggleIsLoading () {
    this.isLoading = !this.isLoading;
  }

  login () {
    this.isLoading = false;
    this.userToken = 'test';
  }

  logout () {
    this.isLoading = true;
    setTimeout(() => {
      this.userToken = '';
      this.isLoading = false;
    }, 500);
  }
}