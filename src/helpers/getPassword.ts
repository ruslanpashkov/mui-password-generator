import { generate } from 'generate-password-browser';
import { Fields } from '../types/Fields';
import { Checkboxes } from '../types/Checkboxes';

export function getPassword({
  length,
  uppercase,
  lowercase,
  numbers,
  symbols,
  strict,
  startsWith = '',
  endsWith = '',
  exclude = '',
}: Fields & Checkboxes): string {
  const password = generate({
    length,
    uppercase,
    lowercase,
    numbers,
    symbols,
    exclude,
    strict,
  });

  const additionalLength = startsWith.length + endsWith.length;

  return startsWith + password.slice(additionalLength) + endsWith;
}
