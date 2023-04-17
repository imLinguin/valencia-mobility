export const prerender = true;
import { loadTranslations } from '$lib/utils/translations';
export const load = async ({ url }) => {
	const { pathname } = url;
	const lang = `${pathname.match(/\w+?(?=\/|$)/) || ''}`;
	const route = pathname.replace(new RegExp(`^/${lang}`), '');
	await loadTranslations(lang, route);
	return { stuff: { route, lang } };
};
//# sourceMappingURL=+layout.js.map
