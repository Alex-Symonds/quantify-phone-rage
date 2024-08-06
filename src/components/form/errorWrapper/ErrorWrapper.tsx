/**
 * Add a cross next to form elements containing an error, so as to make the error extra-clear
 * for users with colour blindness or visual impairments
 */

import { mergeStyleArraysIntoString } from "@/components/utils"
import { ReactNode } from "react"

import styles from './ErrorWrapper.module.scss';

type T_ErrorWrapper = {
    hasError? : boolean,
    stylesIn? : string[],
    children : ReactNode
}

export function ErrorWrapper({ hasError, stylesIn, children } : T_ErrorWrapper){

    const css = mergeStyleArraysIntoString({
        passedIn: stylesIn,
        classesToAdd: [ styles.errorWrapper ],
        conditionalClasses: [ hasError ? styles.errorWrapperOn : undefined ]
    });

    return (
        <div className={ css }>
            { children }
        </div>
    )
}