import type {Metadata} from 'next';
import {NextIntlClientProvider} from 'next-intl';
import {getMessages, getTranslations} from 'next-intl/server';

import AppWrapper from '../Components/Common/AnimationWrapper';
import {defaultLocale, locales, type Locale} from '../../i18n/routing';

export async function generateMetadata({
  params
}: {
  params: Promise<{locale: string}>;
}): Promise<Metadata> {
  const {locale: maybeLocale} = await params;
  const locale: Locale =
    locales.includes(maybeLocale as Locale) ? (maybeLocale as Locale) : defaultLocale;

  const t = await getTranslations({locale, namespace: 'meta'});
  return {
    title: t('title'),
    description: t('description')
  };
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  const messages = await getMessages();

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <AppWrapper>{children}</AppWrapper>
    </NextIntlClientProvider>
  );
}

