# Tasks:

## Mandatory:

1. **Create new `next.js` application considering all requirements dictated by `platform-ui`**.  
   There is also an option to update platform-ui with `next.js` dependency and proceed from this. More [here](https://nextjs.org/docs/migrating/incremental-adoption).
   - Put existing application (including the react-router routing) under the index path (/) of Next.JS and see what happens. This way we can keep the app running and at the same time adaptively move pages to the file-based router.
2. **Extend `next.config.js` with current webpack configuration and build process**.  
   More [here](https://nextjs.org/docs/api-reference/next.config.js/custom-webpack-config).  
   Keep in mind that `next.js` 12 dropped webpack 4 support. More [here](https://nextjs.org/docs/upgrading#webpack-4-support-has-been-removed) and [here](https://nextjs.org/docs/messages/webpack5).
3. **Adjust configuration for `less` preprocessor used in platform**.  
   `next.js` application has in build `sass` support. We need to adjust it for `less` usage or migrate codebase to `scss`/`css`.

   [next-less](https://www.npmjs.com/package/@zeit/next-less) package was deprecated.

   > This plugin is no longer supported because of low usage. We recommend using the built-in CSS and Sass support instead: https://nextjs.org/docs/basic-features/built-in-css-support  
   > [github thread](https://github.com/vercel/next.js/issues/11584) with discussion.

4. **Replace current routing with file system based `next.js` one**.  
    Check if it's possible to incrementally adopt routing (two routings will possibly live together for some time).  
    Upd. 1: Not possible. All routes should be placed to `Pages` directory (should be definitely verified during implemetation).
   Upd. 2: Please consult [this page](https://dev.to/toomuchdesign/next-js-react-router-2kl8) in case two routings should live together for some time
   > Next.js team strongly advises against this approach.  
   > This experiment was carried out at the times of Next.js v9.3: the framework has changed a lot since then.
5. **Clarify if `platform-ui` modules should still be used individually**.  
   If so, `next.js` based app should be doing the same.
6. **Align `next.js` app to use existing `eslint` configuration**.
7. **adjust/update/fix `tsconfig.json`**.
8. **Ensure cypress e2e tests work same way as now**.
   `cypress.js` is using webpack related code that needs to be checked.
   Eventually all cypress related scripts in package.json should still work as is.

## Optional

9. **Check if [SWC rust compiler](https://swc.rs/) related work should be done**.  
   More [here](https://nextjs.org/docs/upgrading#swc-replacing-babel)
10. **Think if `next.js` api folder can be used to simplify backend mocking**.  
    In theory, this folder can be used as a mock server that receives request object and returns required response.

# Pitfalls:

- External open sourse next.js packages (there are a lot of them in the community) usually require SSR.  
  If there is no SSR in platform - almost all aforementioned packages are not available, custom solutions are needed.
- As a consequence of new routing, there will be many `index.js` files (required by next.js) in Pages folder.
  if other strategy is required - needs further investigation.

# Notes:

- `ssr`/`ssg`. Platform has data that frequently changes, so static pages generation is not an option.
  Server side rendering can be considered in the future but not needed at the moment.
- Hot reload currently does not work. Introducing next.js automatically resolves this problem.
  Otherwise - update webpack config to fix issue.

# Questions/points to clarify:
