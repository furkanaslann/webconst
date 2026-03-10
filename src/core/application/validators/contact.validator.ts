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

  const phoneRegex = /^[0-9]{10,}$/;
  if (!data.phone || !phoneRegex.test(data.phone.replace(/\D/g, ''))) {
    errors.phone = 'Geçerli bir telefon numarası giriniz';
  }

  if (!data.message || data.message.trim().length < 10) {
    errors.message = 'Mesaj en az 10 karakter olmalıdır';
  }

  return errors;
}
