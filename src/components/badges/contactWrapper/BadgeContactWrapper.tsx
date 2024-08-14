import { BadgeContact, T_PropsBadgeContact } from "../contact/BadgeContact";

import styles from "./BadgeContactWrapper.module.scss";


interface I_BadgeComboContactStatus extends Pick<T_PropsBadgeContact, "name" | "role" > {
    children?: React.ReactNode
}

export const cssStatus = styles.wrappedStatus;

export function BadgeContactWrapper(
    { name, role, children }
    : I_BadgeComboContactStatus
){
    
    return (
        <div className = { styles.wrapper }>
            <BadgeContact 
                name = { name }
                role = { role }
                wantCard = { true }
            />
            { children }
        </div>
    )
}