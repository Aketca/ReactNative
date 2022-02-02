import { runInAction, makeAutoObservable } from "mobx"
import axios from "axios";

export default class eventsStore {
  isLoading = false;
  list = [];

  constructor() {
    makeAutoObservable(this);
    this.getData();
  }

  getData = async () => {
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
    setTimeout(() => {
      this.list = [
        {
          id: 1,
          image: 'https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg',
          title: 'title 1',
        },
        {
          id: 2,
          image: 'https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg',
          title: 'title 2',
        },
        {
          id: 3,
          image: 'https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg',
          title: 'title 3',
        },
        {
          id: 4,
          image: 'https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg',
          title: 'title 1',
        },
        {
          id: 5,
          image: 'https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg',
          title: 'title 2',
        },
        {
          id: 6,
          image: 'https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg',
          title: 'title 3',
        },
        {
          id: 7,
          image: 'https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg',
          title: 'title 1',
        },
        {
          id: 8,
          image: 'https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg',
          title: 'title 2',
        },
        {
          id: 9,
          image: 'https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg',
          title: 'title 3',
        }
      ];
      this.isLoading = false;
    }, 3000);

  }
}