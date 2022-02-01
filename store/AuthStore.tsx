import { runInAction, makeAutoObservable } from "mobx"

export default class AuthStore {
  isLoading = false;
  userToken = '';

  constructor() {
    makeAutoObservable(this);
  }

  login = async () => {
    this.isLoading = false;
    this.userToken = 'test';
  }

  logout = async () => {
    this.isLoading = false;
    this.userToken = '';
  }
}