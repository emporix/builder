/**
 * We use the less hacky, but more modern `createRequire` API for Qwik. That's because the `eval('require')` trick does
 * not work with Qwik.
 */

import { createRequire } from 'node:module';

const noop = () => null;

export let safeDynamicRequire: typeof require =
  noop as unknown as typeof require;
try {
  safeDynamicRequire = createRequire(import.meta.url);
} catch (error) {
  /* empty */
}
