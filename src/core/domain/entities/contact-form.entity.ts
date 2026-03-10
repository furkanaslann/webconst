import type { ContactFormData } from '../types/contact.types';

export class ContactFormEntity {
  readonly data: ContactFormData;
  readonly createdAt: Date;

  constructor(data: ContactFormData) {
    this.data = data;
    this.createdAt = new Date();
  }

  get fullName(): string {
    return `${this.data.firstName} ${this.data.lastName}`;
  }

  toJSON(): Record<string, string> {
    return {
      firstName: this.data.firstName,
      lastName: this.data.lastName,
      email: this.data.email,
      phone: this.data.phone,
      message: this.data.message,
    };
  }
}
