/*
 * Copyright IBM Corp. 2023, 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
export const WcScopeAttributes = Object.freeze({
  //
  // General scope attributes
  //
  SCOPE_NAME: 'wc',

  //
  // wc scope metrics
  //
  WC_ELEMENT_METRIC: 'wc.element',

  //
  // Attributes relating to a wc element
  //
  NAME: 'wc.element.name',
  MODULE_SPECIFIER: 'wc.element.module.specifier',
  ATTRIBUTE_NAMES: 'wc.element.attributes.names',
  ATTRIBUTE_VALUES: 'wc.element.attributes.values',
  IMPORT_SOURCE: 'wc.element.importSource',
  FRAMEWORK_WRAPPER: 'wc.element.frameworkWrapper'
})
