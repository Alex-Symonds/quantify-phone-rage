import { ReactNode } from "react"

import styles from './Label.module.scss';

type T_PropsLabel = {
    htmlFor : string,
    level? : "default" | "subtle",
    children: ReactNode,
}

/**
 * Label component
 * @param props.htmlFor - ID for the associated form element
 * @param props.level - "default" for a "normal" label. "subtle" for low-prio, optional questions
 * @returns - <label> wrapper
 */
export function Label({ htmlFor, level, children } : T_PropsLabel){
    level = level ?? "default";

    return  <label
                className = { level !== "subtle" ? styles.default : undefined }
                htmlFor = { htmlFor }
            >
                { children }
            </label>
}