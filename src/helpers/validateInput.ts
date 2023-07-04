export function validateInput(input = '') {
  return /[^a-z0-9!@#$%^&*()+_\-=}{[\]|:;"/?.><,`~]/gi.test(input);
}
