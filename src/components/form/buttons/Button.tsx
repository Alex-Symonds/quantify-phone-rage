
import { Icon, ICON_ID, isValidIconID } from '@/components/icons/Icons';
import styles from './Button.module.scss';
import { getCSS, mergeStyleArraysIntoString } from '@/components/utils';

interface I_Button {
    ariaLabel? : string,
    ariaPressed? : boolean,
    formatting?: "primary" | "secondary" | "subtle",
    iconID? : ICON_ID,
    isOnDark? : boolean,
    label?: string,
    onClick : () => void,
    size?: "tiny" | "medium" | "large" | "extraLarge",

    /* If the button will display only an icon, there should be a description for screenreaders */
    srOnly? : string,
}

export function Button({
    ariaLabel, ariaPressed, formatting, iconID, isOnDark, label, onClick, size, srOnly, 
} : I_Button){

    const CSS = getStylesString({ formatting, iconID, isOnDark, label, size });
    const isVisuallyEmpty = iconID === undefined && label === undefined;

    return  <button
                aria-label={ariaLabel}
                aria-pressed={ariaPressed}
                className = { CSS }
                onClick = { onClick }
            >
                { srOnly
                    ? <span className="visuallyHidden">{ srOnly }</span>
                    : null
                }
                { iconID && isValidIconID(iconID)
                    ? <Icon iconID = { iconID } />
                    : null
                }
                { label || isVisuallyEmpty
                    ? <span className={ styles.label }>{ isVisuallyEmpty ? "click here" : label }</span>
                    : null
                }
            </button>
}


interface I_GetStylesString extends Pick<I_Button, "formatting" | "iconID" | "isOnDark" | "label" | "size">{};

function getStylesString({ formatting, iconID, isOnDark, label, size } : I_GetStylesString){
    const sizeCSS = getCSS({ key: size, styles, fallback: styles.medium });
    
    const formattingCSS = getCSS({ key: formatting, styles, fallback: styles.primary });
    
    const colourCSS = isOnDark
        ? styles.white
        : styles.colour;

    const iconOnlyCSS = iconID !== undefined && label === undefined
        ? styles.iconOnly
        : undefined;

    return mergeStyleArraysIntoString({
        classesToAdd: [styles.button, sizeCSS, formattingCSS, colourCSS],
        conditionalClasses: [iconOnlyCSS],
    });
}