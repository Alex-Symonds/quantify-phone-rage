import { mergeStyleArraysIntoString } from "@/components/utils";

import { Icon } from "@/components/icons/Icons";

import styles from "./BadgeWarning.module.scss";


interface I_BadgeWarning {
    stylesIn? : string[],
    title : string
}



export function BadgeWarning(
    { stylesIn, title } 
    : I_BadgeWarning
){

    const stylesStr = mergeStyleArraysIntoString({
        passedIn: stylesIn,
        classesToAdd: [ styles.warning ]
    });

    return  <div className = { stylesStr }>
                <Icon iconID = 'warning' />
                <span>{ title }</span>
            </div>
}