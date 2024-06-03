import { Fragment } from "react";

import { stylesArrToString } from "../../utils";

import { I_Heading } from "./types";
import styles from "./SubtitleWrapper.module.scss";

import { HeadingOnly } from './HeadingOnly';

interface I_SubtitleWrapper {
    styleInSubtitles? : string[],
    subtitle : string,
    children : React.ReactNode
}

export function Heading(
    { stylesInMain, stylesInSubtitle, level, subtitle, title } 
    : I_Heading
){
    const ConditionalWrapper = subtitle && subtitle !== ""
        ? SubtitleWrapper 
        : Fragment;

    return <ConditionalWrapper
                styleInSubtitles = { stylesInSubtitle ?? []}
                subtitle = { subtitle ?? "" }
            >
                <HeadingOnly
                    stylesInMain = { stylesInMain ?? [] } 
                    level = { level } 
                    title = { title } 
                />
            </ConditionalWrapper>

}

function SubtitleWrapper(
    { styleInSubtitles, subtitle, children }
    : I_SubtitleWrapper
){
    const stylesIn = stylesArrToString(styleInSubtitles ?? []);
    return (
        <div className={ styles.wrapperHeadingSubtitle }>
            { children }
            <span className={ `${styles.subtitle}${stylesIn !== "" ? ` ${ stylesIn }` : ''}` }>
                { subtitle }
            </span>
        </div>
    )
}
