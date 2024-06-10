
import { mergeStyleArrays } from "../../utils";
import { T_HeadingWithSubtitle } from "./types";


type HeadingLevelsWithFallback = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
export function getValidHeadingTag(level : number) : HeadingLevelsWithFallback {
    const validHeadingLevels : HeadingLevelsWithFallback[] = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
    return level >= 0 && level < validHeadingLevels.length 
        ? validHeadingLevels[level] 
        : 'p';
}

export function prepareStylesForHeadingAndSubtitle(
    { addToMain, addToSubtitle, purpose, styleSettings, stylesInMain, stylesInSubtitle } : 
    any
){
    const purposeStyle : T_HeadingWithSubtitle = purpose in styleSettings
        ? styleSettings[purpose as keyof typeof styleSettings]
        : styleSettings.default
    ;

    const mainStyles = mergeStyleArrays({
        passedIn: stylesInMain,
        classesToAdd: addToMain,
        conditionalClasses: [purposeStyle.h]
    });

    const subtitleStyles = mergeStyleArrays({
        passedIn: stylesInSubtitle,
        classesToAdd: addToSubtitle,
        conditionalClasses: [purposeStyle.subtitle]
    });

    return { mainStyles, subtitleStyles };
}