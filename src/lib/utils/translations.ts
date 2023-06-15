import i18n from 'sveltekit-i18n';
import lang from '../translations';
import en from '../translations/en.json';
import pl from '../translations/pl.json';

const config = {
	translations: {
		en: {
			...en,
			lang
		},

		pl: {
			...pl,
			lang
		}
	}
};

export const defaultLocale = 'pl';

export const { t, locale, locales, loading, translations, loadTranslations } = new i18n(config);
