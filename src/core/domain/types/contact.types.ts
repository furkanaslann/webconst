export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

export interface ContactFormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export interface ContactFormState {
  data: ContactFormData;
  errors: ContactFormErrors;
  isSubmitting: boolean;
  isSuccess: boolean;
}
