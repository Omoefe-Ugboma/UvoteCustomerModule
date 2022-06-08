import * as CryptoJS from 'crypto-js';
import { AppConfig } from '../../app.config';

const secretKey = AppConfig.storeKey;

export class AppStorage {

  static base = 'appiwei';

  private static getDb() {
    const db = localStorage.getItem(this.base);
    if (!db || db === undefined || db === null) {
      return {};
    } else {
      const decrypt = CryptoJS.AES.decrypt(db, secretKey);
      return JSON.parse(decrypt.toString(CryptoJS.enc.Utf8));
    }
  }

  private static setDb(db: any) {
    localStorage.setItem(this.base, CryptoJS.AES.encrypt(JSON.stringify(db), secretKey).toString());
  }

  static clear() {
    localStorage.removeItem(this.base);
  }

  static set(key: string, value: any) {
    const db = this.getDb();
    db[key] = JSON.stringify(value);
    this.setDb(db);
  }

  static get(key: string, defaultTo?: any) {
    const db = this.getDb();
    if (!db[key]) {
      if (defaultTo) {
        this.set(key, defaultTo);
        return defaultTo;
      }
      return null;
    }
    return JSON.parse(db[key]);
  }

  static remove(key: string) {
    const db = this.getDb();
    delete db[key];
  }
}
