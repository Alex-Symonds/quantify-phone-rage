
import { ChangeEvent, useRef } from "react";

import { OptionsDropdownWrapper } from "../options/OptionsDropdownWrapper";
import { useOptionsList } from "../options/useOptionsList";

import { ComboboxUI } from "./shared/Combobox";
import { getOptionIds } from "./shared/utils";
import { T_OptionId, T_PropsComboboxUI } from "./shared/types";
import { T_UseOptionsListProps } from "../options/useOptionsList";

import { ComboboxOptionWrapper } from "../options/ComboboxOptionWrapper";
import { BadgeContact, T_PropsBadgeContact } from "@/components/badges/contact/BadgeContact";

type T_PropsComboboxContact = 
    Pick<T_PropsComboboxUI, 
        "name"
        | "value"
        | "size"
        | "hasError"
    > &
    Pick<T_UseOptionsListProps,
        "onOptionPick"
        | "optionsVisibleOnInit"
    > & {
        handleChangeToInput : (newValue : string) => void,
        id? : string,
        options : T_ContactOptionData[],
        optionsVisibleOnInit? : boolean,
        selectedOptions? : T_ContactOptionData[],
        showNumResults? : boolean,
}

type T_ContactOptionData = 
    T_PropsBadgeContact
    & T_OptionId;

export function ComboboxContacts({ 
    handleChangeToInput, hasError, id, name, onOptionPick, options, optionsVisibleOnInit, selectedOptions = [], showNumResults, size, value 
} : T_PropsComboboxContact){  
    
    const refToSupportOutsideClickClosing = useRef(null);

    const optionsListKit = useOptionsList({
        onOptionPick, 
        ref : refToSupportOutsideClickClosing, 
        id, 
        optionIds: getOptionIds(options), 
        selectedIds: getOptionIds(selectedOptions), 
        optionsVisibleOnInit: optionsVisibleOnInit ?? false,
    });

    function onChange(e : ChangeEvent<HTMLInputElement>){
        if(e.target.value !== "" && value === ""){
            optionsListKit.openOptionsList();
        }
        handleChangeToInput(e.target.value);
    }

    return  <ComboboxUI
                activeDescendantId = { optionsListKit.activeDescendantId }
                inputId = { optionsListKit.inputId }
                handleChangeToInput = { onChange }
                hasError = { hasError }
                onKeyDown = { (e) =>  optionsListKit.onKeyDown(e) }
                optionsListId = { optionsListKit.optionsListId }
                optionsVisible = { optionsListKit.optionsVisible }
                name = { name }
                value = { value }
                toggleOptionVisibility = { optionsListKit.toggleOptionVisibility }
                size = { size }
                ref = { refToSupportOutsideClickClosing }
            >
                <ContactOptions
                    activeId = { optionsListKit.activeId } 
                    onOptionPick = { optionsListKit.selectAndClose } 
                    optionIdPrefix = { optionsListKit.optionIdPrefix } 
                    options = { options } 
                    optionsListId = { optionsListKit.optionsListId } 
                    optionsVisible = { optionsListKit.optionsVisible } 
                    showNumResults = { showNumResults }
                />
            </ComboboxUI>
}


function ContactOptions({ activeId, onOptionPick, optionIdPrefix, options, optionsListId, optionsVisible, showNumResults } : any){
    return <>
        {  optionsVisible
            ?   <OptionsDropdownWrapper
                    id={  optionsListId }
                    numOptions={ options.length }
                    showNumResults = { showNumResults }
                >
                { options.map((contact, idx) => {
                    return <ComboboxOptionWrapper key={ contact.optionId } 
                                isSelected = { activeId === idx }
                                onClick = { () => onOptionPick(contact.optionId) }
                                id = { optionIdPrefix + idx }
                            >
                                <BadgeContact
                                    name={ contact.name }
                                    role={ contact.role }
                                />
                            </ComboboxOptionWrapper>
                    })
                }
                </OptionsDropdownWrapper>
            : null
        }
    </>
}
