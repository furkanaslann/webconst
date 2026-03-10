import { ContactFormEntity } from '../../domain/entities/contact-form.entity';
import { validateContactForm } from '../validators/contact.validator';
import type { ContactFormData, ContactFormErrors } from '../../domain/types/contact.types';

export interface SubmitContactResult {
  success: boolean;
  errors?: ContactFormErrors;
  entity?: ContactFormEntity;
}

export function submitContactUseCase(data: ContactFormData): SubmitContactResult {
  // Validate input
  const errors = validateContactForm(data);

  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      errors,
    };
  }

  // Create entity
  const entity = new ContactFormEntity(data);

  return {
    success: true,
    entity,
  };
}
