/**
 * LocalStorage servisi - Tarayıcı localStorage yönetimi
 */
export class LocalStorageService {
  static getItem<T>(key: string): T | null {
    if (typeof window === 'undefined') return null;

    try {
      const item = window.localStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : null;
    } catch {
      return null;
    }
  }

  static setItem<T>(key: string, value: T): void {
    if (typeof window === 'undefined') return;

    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // Silently fail
    }
  }

  static removeItem(key: string): void {
    if (typeof window === 'undefined') return;

    try {
      window.localStorage.removeItem(key);
    } catch {
      // Silently fail
    }
  }

  static clear(): void {
    if (typeof window === 'undefined') return;

    try {
      window.localStorage.clear();
    } catch {
      // Silently fail
    }
  }
}
