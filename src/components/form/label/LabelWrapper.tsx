import { ReactNode } from "react"

import styles from './LabelWrapper.module.scss';
import { mergeStyleArraysIntoString } from "@/components/utils";

type T_PropsLabelAndInputWrapper = {
    labelPosition?: "left" | "right" | "above",
    children : ReactNode,
}

export function LabelWrapper({ labelPosition, children } : T_PropsLabelAndInputWrapper){
    labelPosition = labelPosition !== undefined && labelPosition in styles 
        ? labelPosition
        : "above";

    const css = mergeStyleArraysIntoString({
        classesToAdd: [styles.wrapper, styles[labelPosition]]
    });

    return (
        <div className = { css }>
            { children }
        </div>
    )
}