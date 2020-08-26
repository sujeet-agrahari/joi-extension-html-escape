# Joi Extension - Sanitize HTML Tags

This repo is an extension to joi validation libraries that validates if any string contains html tags or not, hence preventing XSS attacks.

## Use Case

```
const Joi = require('@hapi/joi').extend(require('sanitize-html-joi'));

const validateAddressCreateData = (data) => {
  const schema = Joi.object({
    address: Joi.string().trim().htmlStrip().required(),
    label: Joi.string()
      .required(),
  });
  return schema.validate(data);
};
```
