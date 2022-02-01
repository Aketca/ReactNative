import authStore from './authStore';
import eventsStore from './eventsStore';
import scanStore from './scanStore';

export default {
  auth: new authStore(),
  events: new eventsStore(),
  scan: new scanStore(),
};