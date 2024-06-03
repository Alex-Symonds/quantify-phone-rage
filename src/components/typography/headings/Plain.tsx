import { I_HeadingFormatting, T_HeadingWithSubtitleCSSSettings } from "./types";
import { prepareStylesForHeadingAndSubtitle } from "./utils";

import { Heading } from "./WithOptionalSubtitleWrapper";
import styles from "./Plain.module.scss";


const styleSettings : T_HeadingWithSubtitleCSSSettings = {
    'subsection': {
        h: styles.subsection,
        subtitle: styles.subsectionSubtitle
    },
    'detailsBox': {
        h: styles.detailsBox,
        subtitle: undefined
    },
    'default': {
        h: styles.subsection,
        subtitle: styles.subsectionSubtitle
    }
}

export function HeadingPlain(
    { stylesInMain, stylesInSubtitle, level, purpose, subtitle, title } 
    : I_HeadingFormatting
){
    const { mainStyles, subtitleStyles } = prepareStylesForHeadingAndSubtitle({
        addToMain: [styles.plainHeading],
        purpose, 
        stylesInMain, 
        stylesInSubtitle,
        styleSettings
    });

    return  <Heading 
                level = { level }
                stylesInMain = { mainStyles }
                stylesInSubtitle = { subtitleStyles }
                subtitle = { subtitle }
                title = { title }
            />
}