
const sanitizeHtml = require('sanitize-html');

module.exports = function htmlStrip(joi) {
  return {
    type: 'htmlStrip',
    base: joi.string(),
    messages: {
      htmlStrip: '{{#label}} should not contain any html tags!',
    },
    validate(value, helpers) {
      const clean = sanitizeHtml(value, {
        allowedTags: [],
        allowedAttributes: {},
      });
      if (clean !== value) {
        return { clean, errors: helpers.error('htmlStrip') };
      }
      return value;
    },
  };
};
