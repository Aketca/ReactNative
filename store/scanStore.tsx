import { runInAction, makeAutoObservable } from "mobx"
import axios from "axios";

export default class scanStore {
  result = '';
  isLoading = false;

  constructor() {
    makeAutoObservable(this);
  }

  resetResult = () => {
    this.result = '';
    this.isLoading = false;
  }

  sendScan = (type: string, data: string) => {
    this.isLoading = true;
    this.result = 'error';
    // this.result = 'success';
    this.isLoading = false;
  }
}