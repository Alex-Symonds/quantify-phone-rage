import { Button } from '../buttons/Button';
import styles from './Tag.module.scss';
import { getCSS, stylesArrToString } from '@/components/utils';

interface I_Tag {
    label : string,
    theme? : "primary" | "secondary",
    removeTag? : () => void,
}


export function Tag({ label, removeTag, theme } : I_Tag){

    const themeCSS = getCSS({ key: theme, styles, fallback: styles.secondary });

    const editableCSS = removeTag !== undefined 
        ? styles.editable
        : styles.readOnly;

    const CSS = stylesArrToString([ styles.tag, themeCSS, editableCSS ]);

    return  <div className={ CSS }>
                { label }
                { removeTag ?
                    <Button
                        formatting = { "subtle" }
                        iconID = { "close" }
                        isOnDark = { theme === "primary" }
                        onClick = { removeTag }
                        size = { "tiny" }
                        srOnly = { "remove" }
                    />
                    : null
                }
            </div>

}