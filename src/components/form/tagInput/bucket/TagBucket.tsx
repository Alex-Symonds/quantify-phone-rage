import { mergeStyleArraysIntoString } from "@/components/utils"
import { Tag } from "../../tags/Tag"

import styles from './TagBucket.module.scss';
import { T_OptionData } from "../../combobox/shared/types";
import { getOptionDataObject } from "../../combobox/shared/utils";

export type T_PropsTagBucket = {
    hasError? : boolean,
    removeTag? : (tagName : string) => void,
    tags : string[] | T_OptionData[],
}


export function TagBucket({ hasError, removeTag, tags } : T_PropsTagBucket){
    const css = mergeStyleArraysIntoString({
        classesToAdd: [ styles.tagBucket, hasError ? styles.error : styles.default ]
    });

    return (
        <div className = { css }>
            { tags.map((data : string | T_OptionData) => {
                const tag = getOptionDataObject(data);
                return <Tag key={ tag.optionId }
                    label = { tag.displayText }
                    removeTag = { removeTag ? () => removeTag(tag.optionId) : undefined }
                    theme = { "secondary" }
                />
            })}
        </div>
    )
}