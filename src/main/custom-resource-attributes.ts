/*
 * Copyright IBM Corp. 2023, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
export const CustomResourceAttributes = Object.freeze({
  //
  // General attributes
  //
  PROJECT_ID: 'project.id',
  DATE: 'date',

  //
  // Attributes related to details about where the emitter is running
  //
  ENVIRONMENT_NAME: 'environment.name',

  //
  // Attributes relating to details about the currently-running emitter
  //
  TELEMETRY_EMITTER_NAME: 'telemetry.emitter.name',
  TELEMETRY_EMITTER_VERSION: 'telemetry.emitter.version',

  //
  // Attribute related to the current scan ID
  //
  SCAN_ID: 'scan.id',

  //
  // Attributes relating to details about the analyzed repository
  //
  ANALYZED_PATH: 'analyzed.path',
  ANALYZED_HOST: 'analyzed.host',
  ANALYZED_OWNER: 'analyzed.owner',
  ANALYZED_OWNER_PATH: 'analyzed.ownerPath',
  ANALYZED_REPOSITORY: 'analyzed.repository',
  ANALYZED_COMMIT: 'analyzed.commit',
  ANALYZED_REFS: 'analyzed.refs'
})
