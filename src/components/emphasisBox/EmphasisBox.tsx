import styles from "./EmphasisBox.module.scss";

import { mergeStyleArraysIntoString } from "../utils";

interface I_BoxParagraph {
    borderOn? : "leftOnly" | "both",
    stylesIn? : string[],
    children : React.ReactNode
}
export function EmphasisBox({ borderOn, stylesIn, children } : I_BoxParagraph){
    const classStr = mergeStyleArraysIntoString({
        passedIn: stylesIn,
        classesToAdd: [styles.boxParagraph, styles[borderOn ?? "leftOnly"]],
        conditionalClasses: [ stylesIn === undefined ? styles.defaultPadding : undefined ]
    });
    return  <div className={classStr}>
                { children } 
            </div>
}