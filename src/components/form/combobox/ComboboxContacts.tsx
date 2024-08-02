
import { ChangeEvent, useRef } from "react";

import { OptionsDropdownWrapper } from "../options/OptionsDropdownWrapper";
import { useOptionsList } from "../options/useOptionsList";

import { ComboboxUI } from "./shared/Combobox";
import { getOptionIds } from "./shared/utils";
import { T_OptionId, T_PropsComboboxInput, T_PropsComboBoxOptionsToggleButton,  } from "./shared/types";
import { T_UseOptionsListProps } from "../options/useOptionsList";

import { ComboboxOptionWrapper } from "../options/ComboboxOptionWrapper";
import { BadgeContact, T_PropsBadgeContact } from "@/components/badges/contact/BadgeContact";

type T_PropsComboboxContact = 
    Pick<T_PropsComboboxInput, 
        "name"
        | "value"
    > &
    Pick<T_PropsComboBoxOptionsToggleButton,
        "size"
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
    handleChangeToInput, id, name, onOptionPick, options, optionsVisibleOnInit, selectedOptions = [], showNumResults, size, value 
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

    showNumResults = showNumResults ?? false;

    return  <ComboboxUI
                activeDescendantId = { optionsListKit.activeDescendantId }
                inputId = { optionsListKit.inputId }
                handleChangeToInput = { onChange }
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





























// import { ChangeEvent, ReactElement, useEffect, useId, useRef, useState } from "react";

// import { Button } from "../buttons/Button";
// import { OptionsBox } from "../options/OptionsBox";

// import styles from './Combobox.module.scss';
// import { OptionContact } from "../options/OptionContact";


// type T_ComboboxProps = {
//     handleChange : (newValue : string) => void,
//     id? : string,
//     name? : string,
//     size? : "tiny" | "medium",
//     value : string,
// }

// export function ComboboxContacts({ handleChange, id, name, size, value } : T_ComboboxProps){
//     const refToSupportOutsideClickClosing = useRef(null);

//     const generatedId = useId();
//     id = id ?? generatedId;

//     name = name ?? "combobox";

//     const inputProps = {
//         id,
//         name,
//         onChange: (e : ChangeEvent<HTMLInputElement>) => handleChange(e.target.value),
//         type: "text",
//         value,
//     }

//     const {
//         optionsAreVisible,
//         toggleOptionVisibility,
//     } = useOptionsList();

//     const contacts = [
//         { id: "1", name: "Jane Doe", role: "Managing Director" },
//         { id: "2", name: "Joe Bloggs", role: "Lackey" },
//         { id: "3", name: "Jemima Stagg", role: "Marketing" },
//         { id: "4", name: "Alice Aliceson", role: "Administrator" },
//         { id: "5", name: "Bob Bobson", role: "Baker" },
//         { id: "6", name: "Carol Carolson", role: "Courier" },
//     ]

//     size = size !== undefined && size in ["tiny", "medium"] ? size : "medium"

//     return  <div className={ styles.combobox } ref={ refToSupportOutsideClickClosing }>
//                 <div className={ styles.inputWrapper }>
//                     <input { ...inputProps } />
//                 </div>

//                 <Button 
//                     formatting={"subtle"}
//                     iconID={ optionsAreVisible ? "chevronUp" : "chevronDown" }
//                     onClick={ toggleOptionVisibility }
//                     size={ size }
//                 />

//                 { optionsAreVisible
//                     ?   <OptionsBox
//                             id={"TBC"}
//                             numOptions={ contacts.length }
//                             role = {"TBC"}
//                         >
//                             { contacts.map(contact => {
//                                 return <OptionContact key={contact.id} 
//                                             name={ contact.name }
//                                             role={ contact.role }
//                                             value={ contact.id }
//                                         />
//                             })

//                             }
//                         </OptionsBox>
//                     : null
//                 }
//             </div>


// }





// function useOptionsList(){
//     const [optionsAreVisible, setOptionsAreVisible] = useState(false);
    
//     function toggleOptionVisibility(){
//         setOptionsAreVisible(prev => !prev);
//     }

//     return {
//         optionsAreVisible,
//         toggleOptionVisibility,
//     }
// }