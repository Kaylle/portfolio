import { defineBoot } from '#q-app/wrappers';
import { createI18n } from 'vue-i18n';
import messages from 'src/i18n';

export type MessageLanguages = keyof typeof messages;
export type MessageSchema = typeof messages['en'];

declare module 'vue-i18n' {
  // export interface DefineLocaleMessage extends MessageSchema {}
  // export interface DefineDateTimeFormat {}
  // export interface DefineNumberFormat {}
}

export default defineBoot(({ app }) => {
  const lang = localStorage.getItem('lang') || 'en';

  const i18n = createI18n<{ message: MessageSchema }, MessageLanguages>({
    locale: lang,
    legacy: false,
    fallbackLocale: 'en',
    messages,
  });

  app.use(i18n);
});
