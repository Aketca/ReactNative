import { runInAction, makeAutoObservable, action } from "mobx"
import { axiosInstance } from '../axios';

export default class scanStore {
  result = '';
  message = '';
  isLoading = false;

  constructor() {
    makeAutoObservable(this);
  }

  resetResult = () => {
    this.result = '';
    this.isLoading = false;
    this.message = '';
  }

  sendScan = (id: number, data: string) => {
    this.isLoading = true;

    axiosInstance.get(`/event/${id}/check?barcode=${data}`)
      .then(action((response) => {
        this.result = response.data.success ? 'success' : 'error';
        this.message = response.data.message;
      }))
      .finally(action(() => {
        this.isLoading = false;
      }));
  }
}