import {getRequestConfig} from 'next-intl/server';
import {defaultLocale, locales, type Locale} from './routing';

export default getRequestConfig(async ({requestLocale}) => {
  const maybeLocale = await requestLocale;
  const locale: Locale =
    locales.includes(maybeLocale as Locale) ? (maybeLocale as Locale) : defaultLocale;

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  };
});

