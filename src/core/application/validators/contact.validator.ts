import type { ContactFormData, ContactFormErrors } from '../../domain/types/contact.types';

export function validateContactForm(data: ContactFormData): ContactFormErrors {
  const errors: ContactFormErrors = {};

  if (!data.firstName || data.firstName.trim().length < 2) {
    errors.firstName = 'İsim en az 2 karakter olmalıdır';
  }

  if (!data.lastName || data.lastName.trim().length < 2) {
    errors.lastName = 'Soyisim en az 2 karakter olmalıdır';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email)) {
    errors.email = 'Geçerli bir e-posta adresi giriniz';
  }

  // Türk telefon numarası formatı doğrulaması
  // Kabul edilen formatlar: 5XX XXX XX XX, 05XX XXX XX XX, +90 5XX XXX XX XX
  if (!data.phone) {
    errors.phone = 'Telefon numarası gereklidir';
  } else {
    // Sadece sayı ve izin verilen karakterleri kontrol et
    if (!/^[\d\s+()-]+$/.test(data.phone)) {
      errors.phone = 'Sadece sayısal değer giriniz';
    } else {
      const cleaned = data.phone.replace(/\D/g, '');
      // Başındaki 90 veya 0'ı kaldır (uluslararası format için)
      const normalized = cleaned.replace(/^90/, '').replace(/^0/, '');
      // 10 haneli ve 5 ile başlamalı (Türk mobil numaraları)
      if (!/^5\d{9}$/.test(normalized)) {
        errors.phone = 'Geçerli bir Türk telefon numarası giriniz (Örn: 5XX XXX XX XX)';
      }
    }
  }

  if (!data.message || data.message.trim().length < 10) {
    errors.message = 'Mesaj en az 10 karakter olmalıdır';
  }

  return errors;
}
