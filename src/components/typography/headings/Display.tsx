import { Road_Rage } from 'next/font/google';

import { I_HeadingFormatting, T_HeadingWithSubtitleCSSSettings } from './types';
import { prepareStylesForHeadingAndSubtitle } from './utils';

import { Heading } from './WithOptionalSubtitleWrapper';
import styles from "./Display.module.scss";

const roadRage = Road_Rage({
    weight: '400',
    subsets: ['latin']
})

const styleSettings : T_HeadingWithSubtitleCSSSettings = {
    'main': {
        h: styles.main,
        subtitle: styles.mainSubtitle
    },
    'panel': {
        h: styles.panel,
        subtitle: styles.panelSubtitle
    },
    'form': {
        h: styles.form,
        subtitle: undefined
    },
    'default': {
        h: styles.main,
        subtitle: styles.mainSubtitle
    }
}


export function HeadingDisplay(
    { level, purpose, stylesInMain, stylesInSubtitle, subtitle, title } 
    : I_HeadingFormatting
){
    const { mainStyles, subtitleStyles } = prepareStylesForHeadingAndSubtitle({
        addToMain: [roadRage.className, styles.displayHeading],
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
                title = { title.toUpperCase() }
            />
}