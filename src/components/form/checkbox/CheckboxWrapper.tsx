/*
    Checkbox as a wrapper.
    
    Reason why there's no option to pass in a string for "label":
    In the initial design, checkboxes are only used for two purposes:
        1) To select users (in which case the "label" will be a user "badge" component)
        2) To select a row in a table (in which case there will be no visual label: its purpose will be conveyed via its placement)
    
        I need to support "children" for the user badges, so I figured a hypothetical string label could just use that too.
        Also means the user gets control over screenreader descriptions and when a separate one is needed.
*/


import { CheckboxDecoration } from "./CheckboxDecoration";
import styles from './CheckboxWrapper.module.scss';
import { mergeStyleArraysIntoString } from "@/components/utils";


interface I_Checkbox {
    checked : boolean,
    disabled? : boolean,
    id? : string,
    indeterminate? : boolean,
    isOnDark? : boolean,
    name : string,
    stylesIn? : string[],
    value : string,
    onChange : () => void,
    children : React.ReactNode
}

export function CheckboxWrapper({ checked, disabled, id, indeterminate, isOnDark, name, stylesIn, value, onChange, children } : I_Checkbox){
    
    const labelCSS = mergeStyleArraysIntoString({
        passedIn: stylesIn,
        classesToAdd: [ styles.label, isOnDark ? styles.onDark : styles.onLight ]
    });

    return  <label className={labelCSS}>
                <input 
                    hidden={true}
                    checked={checked} 
                    type="checkbox" 
                    disabled={disabled} 
                    id={id} 
                    name={name} 
                    value={value} 
                    onChange={onChange}
                />
                <CheckboxDecoration 
                    checked = { checked }
                    indeterminate = { indeterminate }
                />
                { children }
            </label>

}