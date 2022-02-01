import { runInAction, makeAutoObservable } from "mobx"
import axios from "axios";

export default class authStore {
  isLoading = false;
  token = '';

  constructor() {
    makeAutoObservable(this);
  }

  login = async (login: string, password: string) => {
    // this.isLoading = true;
    // axios.post('/login', {
    //   login, password
    // })
    //   .then((response) => {
    //     console.log(response);
    //     this.token = 'test';
    //     console.log(this.token);
    //   })
    //   .catch(() => {
    //     this.token = '';
    //   })
    //   .finally(() => {
    //     this.isLoading = false;
    //   });

    this.token = 'test';
    this.isLoading = false;
  }

  logout = async () => {
    // this.isLoading = true;
    // axios.get('/logout')
    //   .then((response) => {
    //     console.log(response);
    //     this.token = '';
    //   })
    //   .catch(() => {
    //     this.token = '';
    //   })
    //   .finally(() => {
    //     this.isLoading = false;
    //   });


    this.token = '';
    this.isLoading = false;
  }
}