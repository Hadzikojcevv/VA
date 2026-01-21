export const locales = ['en', 'mk', 'el'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

