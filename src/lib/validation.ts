import Ajv2020, { type ErrorObject } from 'ajv/dist/2020';
import addFormats from 'ajv-formats';
import buildSpecSchema from '../../schemas/build-spec.schema.json';

const ajv = new Ajv2020({ allErrors: true, strict: false });
addFormats(ajv);
const validate = ajv.compile(buildSpecSchema);

export type ValidationResult = {
  valid: boolean;
  errors: { path: string; message: string }[];
};

export function validateBuildSpec(value: unknown): ValidationResult {
  const valid = validate(value);
  const errors = (validate.errors ?? []).map((error: ErrorObject) => ({
    path: error.instancePath || '/',
    message: error.message ?? 'Invalid value',
  }));
  return { valid: Boolean(valid), errors };
}
