// vi skapar och exporterar en funktion som är av typen ValidatorFn
import { ValidatorFn, AbstractControl } from '@angular/forms';

export function validatorTest(): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any } | null => {
    const validEmail = /^\d{3}\s\d{2}$/.test(control.value);
    return validEmail ? null : { 'zip': { value: control.value }};
  };

// med reg.exp kan vi kontrollera vår validering

}
