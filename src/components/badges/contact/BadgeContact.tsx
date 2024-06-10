import Image from 'next/image';

import { Icon } from '@/components/icons/Icons';

import { mergeStyleArraysIntoString, stylesArrToString } from "@/components/utils";
import styles from "./BadgeContact.module.scss";


export interface I_BadgeContact {
    name : string,
    role? : string,
    stylesIn? : string[],
    wantCard? : boolean
}


export function BadgeContact(
    { name, role, stylesIn, wantCard } 
    : I_BadgeContact 
){
    const cardStyles = wantCard ? styles.card : styles.noCard;
    const myStyles = [styles.container, cardStyles];

    const stylesStr = stylesIn === undefined && !wantCard
        ? stylesArrToString(myStyles)
        : mergeStyleArraysIntoString({
            passedIn: stylesIn,
            classesToAdd: myStyles,
        })
    ;

    return (
        <div className={ stylesStr }>
            <Icon iconID={ 'contact' } />
            <div className = { styles.textContainer }>
                <span className = { styles.name }>
                    { name }
                </span>
        { role !== undefined
            ?   <span className = { styles.role }>
                    { role }
                </span>
            : null
        }
            </div>
        </div>
    )
}