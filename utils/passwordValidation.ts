import { ZxcvbnFactory } from '@zxcvbn-ts/core';
import * as zxcvbnCommonPackage from '@zxcvbn-ts/language-common';
import * as zxcvbnEnPackage from '@zxcvbn-ts/language-en';



const options = {
    dictionary: {
        ...zxcvbnCommonPackage.dictionary,
        ...zxcvbnEnPackage.dictionary,
    },
    graphs: zxcvbnCommonPackage.adjacencyGraphs,
    translations: zxcvbnEnPackage.translations,
};

const zxcvbn = new ZxcvbnFactory(options);
//zxcvbn measures password guessability, not estimating strength!


//Validator functions 
const hasMinimumLength = (password: string) => {return password.length >= 8;}

const hasLowercase = (password: string) => {return /[a-z]/.test(password);}

const hasUppercase = (password: string) => {return /[A-Z]/.test(password);}

const hasNumber = (password: string) => {return /\d/.test(password)}

const hasSpecialSymbol = (password:string) => {return /[^A-Za-z0-9]/.test(password)}

export function validatePasswordFunction(password: string): boolean {
    return (
        hasMinimumLength(password) &&
        hasLowercase(password) &&
        hasUppercase(password) &&
        hasNumber(password) &&
        hasSpecialSymbol(password)
    );
}

export function getPasswordRequirements(password: string) {
    return {
        minimumLength: hasMinimumLength(password),
        lowercase: hasLowercase(password),
        uppercase: hasUppercase(password),
        number: hasNumber(password),
        specialSymbol: hasSpecialSymbol(password),
    };
}


export function getPasswordScore(password: string): number {
    const result = zxcvbn.check(password)
    return result.score
}