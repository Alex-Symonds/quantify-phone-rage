
import { mergeStyleArrays } from "@/components/utils";
import styles from "./BadgeCallOutcome.module.scss";

import { BadgeTextOnly } from "../BadgeTextOnly";

interface I_BadgeCallOutcome {
    status : T_CallOutcomeStatus,
    stylesIn? : string[]
}

export type T_CallOutcomeStatus = keyof typeof badgeSettings;

const badgeSettings = {
    noAnswer: {
        style: styles.noAnswer,
        title: 'NO ANSWER'
    },
    forwarded: {
        style: styles.forwarded,
        title: 'FORWARDED'
    },
    accepted: {
        style: styles.accepted,
        title: 'ACCEPTED'
    },
    rejected: {
        style: styles.rejected,
        title: 'REJECTED'
    },
    out: {
        style: styles.out,
        title: 'OUT'
    },
    error: {
        style: styles.error,
        title: 'ERROR'
    },
}

export function BadgeCallOutcome({ status, stylesIn } : I_BadgeCallOutcome){

    const settings = status in badgeSettings 
        ? badgeSettings[status]
        : badgeSettings.error
    ;

    const stylesOut = mergeStyleArrays({
        passedIn: stylesIn,
        classesToAdd: [settings.style],
    });

    return  <BadgeTextOnly 
                stylesIn = { stylesOut }
                title = { settings.title }
            />
}