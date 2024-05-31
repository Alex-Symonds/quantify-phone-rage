import { Road_Rage } from 'next/font/google';

import styles from "./headingDisplay.module.scss";
import { getValidHeadingTag } from './utils';

interface I_HeadingDisplay {
    classIn? : string,
    level : number,
    purpose : string,
    title : string,
}

const roadRage = Road_Rage({
    weight: '400',
    subsets: ['latin']
})

export function HeadingDisplay(
    { classIn, level, purpose, title } 
    : I_HeadingDisplay
){

    const purposeClass = purpose === 'main'
        ? styles.main
        : purpose === 'panel' 
            ? styles.panel
            : styles.other
    ;   
    const HeadingTag = getValidHeadingTag(level);
    
    return  <HeadingTag className={`${roadRage.className} ${styles.displayHeading} ${ purposeClass }${ classIn ? ` ${classIn}` : '' }`}>
                { title }
            </HeadingTag>

}

interface I_HeadingDisplayWithSubtitle extends I_HeadingDisplay{
    classInSubtitle? : string,
    subtitle : string,
}

export function HeadingDisplayWithSubtitle(
    { classIn, level, purpose, title, classInSubtitle, subtitle }
    : I_HeadingDisplayWithSubtitle
){
    const sizeClass = purpose === 'main'
        ? styles.mainSubtitle
        : styles.panelSubtitle;

    return (
        <div className={ styles.wrapperHeadingSubtitle }>
            <HeadingDisplay 
                classIn = { classIn }
                level = { level }
                purpose = { purpose }
                title = { title }
            />
            <span className={ `${styles.displayHeadingSubtitle} ${sizeClass}${classInSubtitle ? ` ${classInSubtitle}` : ''}` }>
                { subtitle }
            </span>
        </div>
    )
}