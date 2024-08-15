/*
    Checkbox as a wrapper.
    
    Reason why there's no option to pass in a string for "label":
    In the initial design, checkboxes are only used for two purposes:
        1) To select users (in which case the "label" will be a user "badge" component)
        2) To select a row in a table (in which case there will be no visual label: its purpose will be conveyed via its placement)
    
        I need to support "children" for the user badges, so I figured a hypothetical string label could just use that too.
        Also means the user gets control over screenreader descriptions and when a separate one is needed.
*/


import { RadioDecoration } from "./RadioDecoration";
import styles from './RadioWrapper.module.scss';

type T_Radio = {
    selected : boolean,
    disabled? : boolean,
    id? : string,
    name : string,
    value : string,
    onChange : (value : string) => void,
    children : React.ReactNode
}

export function RadioWrapper({ selected, disabled, id, name, value, onChange, children } : T_Radio){
    return  <label className={styles.label}>
                <input
                    hidden={true}
                    checked={selected} 
                    type="radio" 
                    disabled={disabled} 
                    id={id} 
                    name={name} 
                    value={value} 
                    onChange={ () => onChange(value) }
                />
                <RadioDecoration 
                    selected = { selected }
                />
                { children }
            </label>

}