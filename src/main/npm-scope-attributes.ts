/*
 * Copyright IBM Corp. 2023, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
export const NpmScopeAttributes = Object.freeze({
  //
  // General dependency name attributes
  //
  RAW: 'npm.dependency.raw',
  OWNER: 'npm.dependency.owner',
  NAME: 'npm.dependency.name',

  //
  // In-context instrumented package attributes
  //
  IS_INSTRUMENTED: 'npm.dependency.instrumented',
  INSTRUMENTED_RAW: 'npm.dependency.instrumented.raw',
  INSTRUMENTED_OWNER: 'npm.dependency.instrumented.owner',
  INSTRUMENTED_NAME: 'npm.dependency.instrumented.name',
  INSTRUMENTED_VERSION_RAW: 'npm.dependency.instrumented.version.raw',
  INSTRUMENTED_VERSION_MAJOR: 'npm.dependency.instrumented.version.major',
  INSTRUMENTED_VERSION_MINOR: 'npm.dependency.instrumented.version.minor',
  INSTRUMENTED_VERSION_PATCH: 'npm.dependency.instrumented.version.patch',
  INSTRUMENTED_VERSION_PRE_RELEASE: 'npm.dependency.instrumented.version.preRelease',

  //
  // Semantic version attributes
  //
  VERSION_RAW: 'npm.dependency.version.raw',
  VERSION_MAJOR: 'npm.dependency.version.major',
  VERSION_MINOR: 'npm.dependency.version.minor',
  VERSION_PATCH: 'npm.dependency.version.patch',
  VERSION_PRE_RELEASE: 'npm.dependency.version.preRelease',

  //
  // Attributes relating to a dependency's installer
  //
  INSTALLER_RAW: 'npm.dependency.installer.raw',
  INSTALLER_OWNER: 'npm.dependency.installer.owner',
  INSTALLER_NAME: 'npm.dependency.installer.name',
  INSTALLER_VERSION_RAW: 'npm.dependency.installer.version.raw',
  INSTALLER_VERSION_MAJOR: 'npm.dependency.installer.version.major',
  INSTALLER_VERSION_MINOR: 'npm.dependency.installer.version.minor',
  INSTALLER_VERSION_PATCH: 'npm.dependency.installer.version.patch',
  INSTALLER_VERSION_PRE_RELEASE: 'npm.dependency.installer.version.preRelease'
})
