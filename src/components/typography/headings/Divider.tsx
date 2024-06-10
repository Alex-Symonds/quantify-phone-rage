import { I_HeadingFormatting } from "./types";
import { prepareStylesForHeadingAndSubtitle } from "./utils";

import { Heading } from "./WithOptionalSubtitleWrapper";
import styles from "./Divider.module.scss";
import { mergeStyleArrays } from "@/components/utils";


const styleSettings = {
    'subsection': styles.subsection,
    'details': styles.details,
    'default': styles.subsection
}

export function HeadingDivider(
    { stylesInMain, level, purpose, title }
    : Pick<I_HeadingFormatting, "level" | "purpose" | "stylesInMain" | "title">
){

    const purposeStyle = purpose in styleSettings
        ? styleSettings[purpose as keyof typeof styleSettings]
        : styleSettings.default
    ;

    const stylesArr = mergeStyleArrays({
        passedIn: stylesInMain,
        classesToAdd: [ styles.divider ],
        conditionalClasses: [ purposeStyle ]
    })

    return <Heading 
             level = { level }
             stylesInMain = { stylesArr }
             title = { title.toUpperCase() }
            />
}