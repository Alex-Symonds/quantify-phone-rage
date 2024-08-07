
import { ChangeEvent, useRef } from "react";

import { OptionsDropdownWrapper } from "../options/OptionsDropdownWrapper";
import { ComboboxOptionWrapper } from "../options/ComboboxOptionWrapper";
import { useOptionsList } from "../options/useOptionsList";

import { ComboboxUI } from "./shared/Combobox";
import { getOptionIds, getOptionDataObject } from "./shared/utils";
import { T_OptionData, T_PropsComboboxUI } from "./shared/types";
import { T_UseOptionsListProps } from "../options/useOptionsList";

export type T_PropsComboboxText = 
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
        optionsVisibleOnInit? : boolean,
        options : string[] | T_OptionData[],
        selectedOptions? : string[] | T_OptionData[],
        showNumResults? : boolean,
}

export function ComboboxText({ 
    handleChangeToInput, hasError, id, name, onOptionPick, options, optionsVisibleOnInit, selectedOptions = [], showNumResults, size, value 
} : T_PropsComboboxText){  
    
    const refToSupportOutsideClickClosing = useRef(null);

    const optionsListKit = useOptionsList({
        id, 
        optionIds: getOptionIds(options), 
        selectedIds: getOptionIds(selectedOptions), 
        onOptionPick, 
        optionsVisibleOnInit: optionsVisibleOnInit ?? false,
        ref : refToSupportOutsideClickClosing, 
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
                <TextOptions 
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


function TextOptions({ activeId, onOptionPick, optionIdPrefix, options, optionsListId, optionsVisible, showNumResults } : any){
    
    showNumResults = showNumResults ?? false;

    return <>
    {  optionsVisible
        ?   <OptionsDropdownWrapper
                id={  optionsListId }
                numOptions={ options.length }
                showNumResults = { showNumResults }
            >
                { options.map((option : string | T_OptionData, idx : number) => {
                    const optionObj : T_OptionData = getOptionDataObject(option);

                    return <ComboboxOptionWrapper key={ optionObj.optionId } 
                                isSelected = { activeId === idx }
                                onClick = { () => onOptionPick(optionObj.optionId) }
                                id = { optionIdPrefix + idx }
                            >
                                { optionObj.displayText }
                            </ComboboxOptionWrapper>
                })

                }
            </OptionsDropdownWrapper>
        : null
    }
    </>
}

