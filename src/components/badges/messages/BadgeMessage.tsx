
import { mergeStyleArrays } from "@/components/utils";
import styles from "./BadgeMessage.module.scss";

import { BadgeTextOnly } from "../BadgeTextOnly";

interface I_BadgeMessage {
    status : T_MessageStatus,
    stylesIn? : string[],
    title? : string,
    wantShort? : boolean
}

export type T_MessageStatus = keyof typeof badgeSettings;

const badgeSettings = {
    unhandled: {
        style: styles.msgUnhandled,
        title: 'UNHANDLED',
        shortTitle: 'TODO'
    },
    partial: {
        style: styles.msgPartial,
        title: 'PARTIAL',
        shortTitle: 'PART'
    },
    handled: {
        style: styles.msgHandled,
        title: 'HANDLED',
        shortTitle: 'DONE',
    },
}

export function BadgeMessage({ status, stylesIn, title, wantShort } : I_BadgeMessage){

    const settings = status in badgeSettings 
        ? badgeSettings[status]
        : badgeSettings.unhandled
    ;

    const stylesOut = mergeStyleArrays({
        passedIn: stylesIn,
        classesToAdd: [settings.style],
    });

    const selectedTitle : string = 
        title === undefined && wantShort 
            ? settings.shortTitle
            : title === undefined
                ? settings.title
                : wantShort
                    ? title.substring(0, 4)
                    : title;

    return  <BadgeTextOnly 
                stylesIn = { stylesOut }
                title = { selectedTitle }
            />
}