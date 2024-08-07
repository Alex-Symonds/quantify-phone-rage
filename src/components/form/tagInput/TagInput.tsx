import { ComboboxText, T_PropsComboboxText } from "../combobox/ComboboxText";
import { T_OptionData } from "../combobox/shared/types";

import { T_PropsTagBucket, TagBucket } from "./bucket/TagBucket";

import styles from './TagInput.module.scss';

type T_PropsTagInput = 
    Pick<T_PropsComboboxText, 
        "handleChangeToInput"
        | "hasError"
        | "id"
        | "name"
        | "onOptionPick"
        | "optionsVisibleOnInit"
        | "showNumResults"
        | "size"
        | "value"
    >
    &
    Pick<T_PropsTagBucket,
        "removeTag"
    >
    & {
        tagOptions : string[] | T_OptionData[],
        selectedTags? : string[] | T_OptionData[],
};

export function TagInput({ 
    handleChangeToInput, hasError, id, name, onOptionPick, optionsVisibleOnInit, removeTag, selectedTags = [], tagOptions, showNumResults, size, value
 } : T_PropsTagInput){
    return (
        <div className={ styles.tagInputWrapper }>
            <ComboboxText
                handleChangeToInput = { handleChangeToInput }
                hasError = { hasError }
                id = { id }
                name = { name }
                onOptionPick = { onOptionPick }
                options = { tagOptions }
                optionsVisibleOnInit = { optionsVisibleOnInit }
                selectedOptions = { selectedTags }
                showNumResults = { showNumResults }
                size = { size }
                value = { value }
            />
            <TagBucket
                hasError = { hasError }
                removeTag = { removeTag }
                tags = { selectedTags }
            />
        </div>
    )
}