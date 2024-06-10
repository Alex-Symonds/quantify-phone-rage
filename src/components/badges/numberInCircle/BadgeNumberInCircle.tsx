
import { formatIntegerForDisplay, mergeStyleArraysIntoString } from "@/components/utils";
import styles from "./BadgeNumberInCircle.module.scss";

interface I_BadgeNumberInCircle {
    customSize? : boolean,
    number : number,
    stylesIn? : string[]
}

export function BadgeNumberInCircle(
    { customSize, number, stylesIn } 
    : I_BadgeNumberInCircle
){

    const sizeCSS = customSize
        ? undefined
        : [styles.defaultSize]
    ;

    const styleStr = mergeStyleArraysIntoString({
        passedIn: stylesIn,
        classesToAdd: [styles.circle, styles.inbox],
        conditionalClasses: sizeCSS,
    });

    return  <div className = { styleStr }>
                { formatIntegerForDisplay(number) }
            </div>
}