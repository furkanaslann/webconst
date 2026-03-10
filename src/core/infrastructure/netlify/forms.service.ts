/**
 * Netlify Forms servisi - Form gönderimlerini işler
 * HTML form nitelikleri ile çalışır (netlify attribute)
 */
export class NetlifyFormsService {
  static encode(data: Record<string, string>): string {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
  }

  static async submitForm(
    formName: string,
    data: Record<string, string>
  ): Promise<{ success: boolean; error?: string }> {
    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: this.encode({
          'form-name': formName,
          ...data,
        }),
      });

      if (!response.ok) {
        throw new Error('Form gönderilemedi');
      }

      return { success: true };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Bilinmeyen hata',
      };
    }
  }
}
