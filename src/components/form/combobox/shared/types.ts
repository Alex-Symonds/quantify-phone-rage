/**
 * Types for comboboxes
 */
import { ChangeEvent, KeyboardEvent, ReactNode } from "react";

/** Type used for identifying a particular option for selection */
export type T_OptionId = {
    optionId : string
}

/** Option type for string-only options */
export type T_OptionData = 
    T_OptionId 
    & {
    displayText : string,
}


/** Props for the main Combox wrapper */
export type T_PropsComboboxUI = 
    T_PropsComboBoxOptionsToggleButton &  
    T_PropsComboboxInput & {
    children : ReactNode,
}

/** Props for the toggle button inside the main Combox wrapper */
export type T_PropsComboBoxOptionsToggleButton = {
    optionsVisible : boolean,
    toggleOptionVisibility : () => void,
    size? : "tiny" | "medium",
}

/** Props for the input inside the main Combox wrapper */
export type T_PropsComboboxInput = {
    activeDescendantId : any,
    inputId : string,
    handleChangeToInput : (e : ChangeEvent<HTMLInputElement>) => void,
    onKeyDown : (e : KeyboardEvent<HTMLInputElement>) => void,
    optionsListId : string,
    optionsVisible : boolean,
    name? : string,
    value : string,
}