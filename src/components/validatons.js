import Validator, {} from 'validator';
import {isEmpty} from 'lodash';

export default function(data) {
    let errors = {};

    if(Validator.isEmpty(data.firstname)) {
        errors.firstname = 'This field is required'
    }

    if(Validator.isEmpty(data.lastname)) {
        errors.lastname = 'This field is required'
    }
    if(Validator.isEmpty(data.email)) {
        errors.email = 'This field is required'
    }
    if (!Validator.isEmail(data.email)) {
        errors.email = 'Email is invalid';
    }
    if(Validator.isEmpty(data.password)) {
        errors.password = 'This field is required'
    }
    if(!Validator.isLength(data.password, {min:6, max: undefined})) {
        errors.password = 'Minimum 6 character'
    }
    // isLength
    if(Validator.isEmpty(data.address)) {
        errors.address = 'This field is required'
    }
    if(Validator.isEmpty(data.phone)) {
        errors.phone = 'This field is required'
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}