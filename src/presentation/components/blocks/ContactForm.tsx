import { useState, type FormEvent } from 'react';
import { validateContactForm } from '../../../core/application/validators/contact.validator';
import { NetlifyFormsService } from '../../../core/infrastructure/netlify/forms.service';
import type { ContactFormData, ContactFormErrors } from '../../../core/domain/types/contact.types';

interface ContactFormProps {
  formName?: string;
}

export default function ContactForm({ formName = 'contact' }: ContactFormProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof ContactFormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validateContactForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    const result = await NetlifyFormsService.submitForm(formName, formData as unknown as Record<string, string>);

    if (result.success) {
      setIsSuccess(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
      });
      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    } else {
      setErrors({ message: result.error || 'Form gönderilemedi' });
    }

    setIsSubmitting(false);
  };

  if (isSuccess) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
        <svg
          className="w-12 h-12 text-green-500 mx-auto mb-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <h3 className="text-lg font-semibold text-green-800 mb-2">
          Mesajınız Gönderildi!
        </h3>
        <p className="text-green-700">
          En kısa sürede size dönüş yapacağız.
        </p>
      </div>
    );
  }

  return (
    <form
      name={formName}
      method="POST"
      className="space-y-6"
      data-netlify="true"
      onSubmit={handleSubmit}
      netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value={formName} />
      <input type="hidden" name="subject" value="[WebConst] Mesajınız Var" />

      <div className="grid md:grid-cols-2 gap-6">
        <div className="flex items-center gap-4">
          <label htmlFor="firstName" className="w-24 text-sm font-medium text-gray-700 shrink-0">
            Ad
          </label>
          <div className="flex-1">
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors ${
                errors.firstName ? 'border-red-500' : 'border-gray-300'
              }`}
              required
            />
            {errors.firstName && (
              <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>
            )}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <label htmlFor="lastName" className="w-24 text-sm font-medium text-gray-700 shrink-0">
            Soyad
          </label>
          <div className="flex-1">
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors ${
                errors.lastName ? 'border-red-500' : 'border-gray-300'
              }`}
              required
            />
            {errors.lastName && (
              <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>
            )}
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <label htmlFor="email" className="w-24 text-sm font-medium text-gray-700 shrink-0">
          E-posta
        </label>
        <div className="flex-1">
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            }`}
            required
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email}</p>
          )}
        </div>
      </div>

      <div className="flex items-center gap-4">
        <label htmlFor="phone" className="w-24 text-sm font-medium text-gray-700 shrink-0">
          Telefon
        </label>
        <div className="flex-1">
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors ${
              errors.phone ? 'border-red-500' : 'border-gray-300'
            }`}
            required
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
          )}
        </div>
      </div>

      <div className="flex items-start gap-4">
        <label htmlFor="message" className="w-24 text-sm font-medium text-gray-700 shrink-0 pt-2">
          Mesaj
        </label>
        <div className="flex-1">
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleInputChange}
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none ${
              errors.message ? 'border-red-500' : 'border-gray-300'
            }`}
            required
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-600">{errors.message}</p>
          )}
        </div>
      </div>

      {errors.message && !errors.firstName && !errors.lastName && !errors.email && !errors.phone && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-red-800">{errors.message}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary-600 text-white py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Gönderiliyor...' : 'Gönder'}
      </button>
    </form>
  );
}
