/**
 * Concatenate the REACT_APP_DRUPAL_BASE_UR variable and a pathname.
 *
 * This provides a custom command, .relativeURL()
 *
 * @param {string} pathname
 *   The relative path to append to REACT_APP_DRUPAL_BASE_URL
 * @param {function} callback
 *   A callback which will be called.
 * @return {object}
 *   The 'browser' object.
 */
exports.command = function relativeURL(pathname, callback) {
  const self = this;
  this.url(`${process.env.NIGHTWATCH_URL}${pathname}`);

  if (typeof callback === 'function') {
    callback.call(self);
  }
  return this;
};
