/*
    Text-only option component for use in a simple <select>
*/

import styles from './OptionPlain.module.scss';

type T_OptionPlainProps = {
    displayText : string,
    isSelected : boolean,
    onClick : () => void,
    optionIdPrefix : string,
    value : string,
}

export function OptionPlain({ displayText, isSelected, onClick, optionIdPrefix, value } : T_OptionPlainProps){
    return  <div 
                aria-selected = { isSelected }
                className = { styles.optionPlain }
                id = { optionIdPrefix + value }
                onClick = { () => onClick() }
            >
                { displayText }
            </div>
}