/*
    Text-only option component for use in a simple <select>
*/

import styles from './ComboboxOptionWrapper.module.scss';

type T_OptionPlainProps = {
    isSelected : boolean,
    onClick : () => void,
    id : string,
    children : React.ReactNode
}

export function ComboboxOptionWrapper({ isSelected, onClick, id, children } : T_OptionPlainProps){
    return  <div 
                aria-selected = { isSelected }
                className = { `${styles.optionWrapper} ${isSelected ? styles.optionWrapperSelected : ""}` }
                id = { id }
                role={"option"}
                tabIndex={-1}
                onClick = { () => onClick() }
            >
                { children }
            </div>
}