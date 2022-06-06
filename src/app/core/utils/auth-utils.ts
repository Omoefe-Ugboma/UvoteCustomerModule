import { AppStorage } from './storage';

export function getCurrentUser() {
  return AppStorage.get('currentUser');
}

export function getUserToken() {
  return AppStorage.get('token');
}
