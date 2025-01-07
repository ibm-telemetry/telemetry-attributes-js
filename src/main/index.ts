/*
 * Copyright IBM Corp. 2024, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { CustomResourceAttributes } from './custom-resource-attributes.js'
import { JsScopeAttributes } from './js-scope-attributes.js'
import { JsxScopeAttributes } from './jsx-scope-attributes.js'
import { LogsAttributes } from './logs-attributes.js'
import { NpmScopeAttributes } from './npm-scope-attributes.js'

export { CustomResourceAttributes }
export { JsScopeAttributes }
export { JsxScopeAttributes }
export { NpmScopeAttributes }
export { LogsAttributes }

export const ALL_SCOPE_NAMES = [
  JsScopeAttributes.SCOPE_NAME,
  JsxScopeAttributes.SCOPE_NAME,
  NpmScopeAttributes.SCOPE_NAME
] as const
