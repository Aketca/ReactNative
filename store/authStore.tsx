import { runInAction, makeAutoObservable, action } from "mobx"
import axios from "axios";

export default class authStore {
  isLoading = false;
  token = '';

  constructor() {
    makeAutoObservable(this);
  }

  login = action((login: string, password: string) => {
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

    this.isLoading = true;
    setTimeout(action(() => {
      this.token = 'test';
      this.isLoading = false;
    }), 1000);
  });

  logout = action(() => {
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


    this.isLoading = true;
    setTimeout(action(() => {
      this.token = '';
      this.isLoading = false;
    }), 1000);
  });
}