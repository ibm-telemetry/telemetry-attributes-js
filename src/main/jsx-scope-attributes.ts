/*
 * Copyright IBM Corp. 2023, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
export const JsxScopeAttributes = Object.freeze({
  //
  // JSX scope metrics
  //
  JSX_ELEMENT_METRIC: 'jsx.element',

  //
  // Attributes relating to a jsx element
  //
  NAME: 'jsx.element.name',
  MODULE_SPECIFIER: 'jsx.element.module.specifier',
  ATTRIBUTE_NAMES: 'jsx.element.attributes.names',
  ATTRIBUTE_VALUES: 'jsx.element.attributes.values',
  ATTRIBUTE_MAP: 'jsx.element.attributes.map',

  //
  // Attributes relating to a jsx element's invoker
  //
  INVOKER_PACKAGE_RAW: 'jsx.element.invoker.package.raw',
  INVOKER_PACKAGE_NAME: 'jsx.element.invoker.package.name',
  INVOKER_PACKAGE_OWNER: 'jsx.element.invoker.package.owner'
})
