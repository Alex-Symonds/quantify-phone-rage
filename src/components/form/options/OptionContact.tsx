import { BadgeContact } from '@/components/badges/contact/BadgeContact';

import styles from './OptionContact.module.scss';

type T_OptionPlainProps = {
    isSelected : boolean,
    name : string,
    onClick : () => void,
    optionIdPrefix : string,
    role? : string,
    value : string,
}

export function OptionContact({ isSelected, name, onClick, optionIdPrefix, role, value } : T_OptionPlainProps){
    return  <div 
                aria-selected = { isSelected }
                className = { styles.optionContact }
                id = { optionIdPrefix + value }
                onClick = { () => onClick() }
            >
                <BadgeContact 
                    name={name}
                    role={role}
                />
            </div>
}