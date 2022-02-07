import { runInAction, makeAutoObservable, action } from "mobx"
import { axiosInstance } from '../axios';
import * as SecureStore from 'expo-secure-store';

export default class authStore {
  isLoading = false;
  token = '';
  msg = '';

  constructor() {
    makeAutoObservable(this);
    this.getTokenFromStore();
  }

  getTokenFromStore = async() => {
    const result = await SecureStore.getItemAsync('savedToken') as string;
    runInAction(() => {
      this.token = result;
    })
  };

  setTokenToStore = async(token: string) => {
    await SecureStore.setItemAsync('savedToken', token);
  };

  login = action((login: string, password: string) => {
    this.isLoading = true;
    this.msg = '';

    axiosInstance.get(`/login?login=${login}&password=${password}`)
      .then(action((response) => {
        if (response.data.success) {
          this.token = response.data['x-auth-token'];
          this.setTokenToStore(this.token);
        } else {
          this.token = '';
          this.setTokenToStore('');
          this.msg = response.data.msg;
        }
      }))
      .catch(action(() => {
        this.token = '';
        this.setTokenToStore('');
      }))
      .finally(action(() => {
        this.isLoading = false;
      }));
  });

  logout = action(() => {
    this.token = '';
    this.setTokenToStore('');
  });
}