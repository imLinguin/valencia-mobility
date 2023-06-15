# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
yarn dev

# or start the server and open the app in a new browser tab
yarn dev --open
```

## Building

To create a production version of the app (using automatic adapter):

```bash
yarn build
```

To build static files you need to export a `FORCE_STATIC=1` environment variable first:

```bash
FORCE_STATIC=1 yarn build
```

on Windows cmd or powershell

```
set FORCE_STATIC=1
yarn build
```

**NOTE** App features translations so static hosting service should redirect `/` to `/pl` or to specific route based on `Accept-Language` HTTP header

You can preview the production build with `yarn preview`.

![](static/images/footer_en.webp)

Project UE Erasmus+ no. 2022-1-PL01-KA121-VET-000061831  