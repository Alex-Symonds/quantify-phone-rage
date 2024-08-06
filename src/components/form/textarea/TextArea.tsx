import { ChangeEvent } from "react"

import styles from './TextArea.module.scss';
import { mergeStyleArraysIntoString } from "@/components/utils";
import { ErrorWrapper } from "../errorWrapper/ErrorWrapper";

type T_PropsTextArea = {
    handleChange : (e : ChangeEvent<HTMLTextAreaElement>) => void,
    hasError? : boolean,
    id : string,
    placeholder? : string,
    stylesIn? : string[],
    value? : string,
    wrapperStylesIn? : string[],
}


export function TextArea({ handleChange, hasError, id, placeholder, stylesIn, value, wrapperStylesIn } : T_PropsTextArea){

    const CSS = mergeStyleArraysIntoString({
        passedIn: stylesIn,
        classesToAdd: [ styles.textarea ],
        conditionalClasses: [ hasError ? styles.error : styles.default ]
    });

    return (
        <ErrorWrapper
            stylesIn = { wrapperStylesIn }
            hasError = { hasError }
        >
            <textarea
                className = { CSS }
                id = { id }
                onChange={ (e : ChangeEvent<HTMLTextAreaElement>) => handleChange(e) }
                placeholder={ placeholder ?? "Enter text here" }
                value = { value }
            ></textarea>
        </ErrorWrapper>
    )
}