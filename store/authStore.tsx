import { runInAction, makeAutoObservable, action } from "mobx"
// import { axiosInstance } from '../axios';

export default class authStore {
  isLoading = false;
  token = '';
  msg = '';

  constructor() {
    makeAutoObservable(this);
  }

  login = action((login: string, password: string) => {
    this.isLoading = true;
    // this.msg = '';
    // let formData = new FormData();
    // formData.append('login', login);
    // formData.append('password', password);
    // console.log('formdata: ', formData);
    // axiosInstance.post(`/login`, formData)
    //   .then(action((response) => {
    //     console.log(formData);
    //
    //     // this.token = 'test';
    //     // console.log(this.token);
    //
    //     if (response.data.success) {
    //       console.log('response +: ',response);
    //     } else {
    //       console.log('response -: ',response);
    //       this.msg = response.data.msg;
    //     }
    //   }))
    //   .catch(action(() => {
    //     this.token = '';
    //   }))
    //   .finally(action(() => {
    //     this.isLoading = false;
    //   }));

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