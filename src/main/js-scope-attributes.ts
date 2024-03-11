/*
 * Copyright IBM Corp. 2024, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
export const JsScopeAttributes = Object.freeze({
  //
  // JS scope metrics
  //
  JS_TOKEN_METRIC: 'js.token',
  JS_FUNCTION_METRIC: 'js.function',

  //
  // Attributes relating to a js token
  //
  TOKEN_NAME: 'js.token.name',
  TOKEN_ACCESS_PATH: 'js.token.accessPath',

  //
  // Attributes relating to a js function
  //
  FUNCTION_NAME: 'js.function.name',
  FUNCTION_ACCESS_PATH: 'js.function.accessPath',
  FUNCTION_ARGUMENT_VALUES: 'js.function.arguments.values'
})
