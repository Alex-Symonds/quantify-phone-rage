/**
 * Combobox wrapper designed to support comboboxes with different types of options lists.
 * Has forwardRef enabled, to support "close on outside click" functionality
 * Also includes:
 *  A text input
 *  A toggle button to open/close the options list
 *  A "children" slot, intended for the options list component
 */
import { ChangeEvent, ForwardedRef, forwardRef, KeyboardEvent } from "react";

import { Button } from "../../buttons/Button";

import styles from './Combobox.module.scss';
import {    
        T_PropsComboBoxOptionsToggleButton, 
        T_PropsComboboxInput,
        T_PropsComboboxUI
    } from "./types";


export const ComboboxUI = forwardRef(function ComboboxUI(props : T_PropsComboboxUI, ref : ForwardedRef<HTMLDivElement | null>){
    return (
        <div 
            className={ styles.combobox } 
            ref={ ref }
        >
            <ComboboxInput 
                inputId={ props.inputId }
                activeDescendantId={ props.activeDescendantId }
                optionsVisible={ props.optionsVisible }
                optionsListId={ props.optionsListId }

                onKeyDown={ (e) => props.onKeyDown(e) }
                handleChangeToInput = { props.handleChangeToInput }
                name = { props.name }
                value = { props.value }
            />
            
            <ComboBoxOptionsToggleButton 
                optionsVisible = { props.optionsVisible }
                size = { props.size }
                toggleOptionVisibility = { props.toggleOptionVisibility }
            />

            { props.children }

        </div>
    )
})


function ComboboxInput({
    activeDescendantId,
    inputId,
    handleChangeToInput,
    onKeyDown,
    optionsListId,
    optionsVisible,
    name,
    value
} : T_PropsComboboxInput){

    name = name ?? "combobox";

    return (
        <input
            className={ styles.inputWrapper }

            id={ inputId }
            tabIndex={0}
            role={"combobox"}
            autoComplete={"off"}
            aria-autocomplete={"both"}
            aria-activedescendant={ activeDescendantId }
            aria-expanded={ optionsVisible }
            aria-controls={ optionsListId }

            onKeyDown={ (e : KeyboardEvent<HTMLInputElement>) => onKeyDown(e) }
            onChange = {(e : ChangeEvent<HTMLInputElement>) => handleChangeToInput(e)}
            
            name = { name }
            type = "text"
            value = {value}
        />
    )
}


function ComboBoxOptionsToggleButton({
    optionsVisible,
    size,
    toggleOptionVisibility,
} : T_PropsComboBoxOptionsToggleButton){

    size = size !== undefined && size in ["tiny", "medium"] ? size : "medium";

    return (
        <Button 
            ariaLabel="toggle options"
            ariaPressed={ optionsVisible }
            formatting={"subtle"}
            iconID={  optionsVisible ? "chevronUp" : "chevronDown" }
            onClick={  toggleOptionVisibility }
            size={ size }
        />
    )
}
