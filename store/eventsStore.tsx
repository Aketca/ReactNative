import { runInAction, makeAutoObservable, action } from "mobx"
// import axios from "axios";
import { axiosInstance } from '../axios';

export default class eventsStore {
  isLoading = false;
  list = [];

  constructor() {
    makeAutoObservable(this);
    this.getData();
  }

  getData = action(() => {
    this.isLoading = true;
    axiosInstance.get('/events')
      .then(action((response) => {
        this.list = response.data.events;
      }))
      .finally(action(() => {
        this.isLoading = false;
      }));
  });
}