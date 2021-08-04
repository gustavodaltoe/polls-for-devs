import { FieldValidationSpy } from '../test/mock-field-validation';
import { ValidationComposite } from './validatior-composite';

describe('ValidationComposite', () => {
  test('Should return error if any validation fails', () => {
    const fieldValidationSpy = new FieldValidationSpy('anyField');
    fieldValidationSpy.error = new Error('first error');
    const fieldValidationSpy2 = new FieldValidationSpy('anyField');
    fieldValidationSpy2.error = new Error('second error');
    const sut = new ValidationComposite([
      fieldValidationSpy,
      fieldValidationSpy2,
    ]);
    const error = sut.validate('anyField', 'value');
    expect(error).toBe('first error');
  });
});
