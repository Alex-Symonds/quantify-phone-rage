import { mergeStyleArraysIntoString } from '@/components/utils';
import styles from './Input.module.scss';
import { ChangeEvent } from 'react';

type T_PropsInput = {
    handleChange: (e : ChangeEvent<HTMLInputElement>) => void,
    hasError? : boolean,
    id? : string,
    stylesIn? : string[],
    type?: "text" | "email" | "tel" | "date" | "time",
    value: string,
}

export function Input({ handleChange, hasError, id, stylesIn, type, value } : T_PropsInput){

    const CSS = mergeStyleArraysIntoString({
        passedIn: stylesIn,
        classesToAdd: [styles.input],
        conditionalClasses: [ hasError ? styles.error : styles.default ]
    });

    return (
        <input 
            className={ CSS }
            id = { id }
            type = { type ?? "text" }
            value = { value }
            onChange = { (e : ChangeEvent<HTMLInputElement>) => handleChange(e) }
        />
    )
}