import { mergeStyleArrays, stylesArrToString } from "@/components/utils";
import styles from "./BadgeTextOnly.module.scss";


interface I_Badge{
    stylesIn : string[] | undefined,
    title : string,
}


export function BadgeTextOnly({ stylesIn, title } : I_Badge){

    const stylesUnified = mergeStyleArrays({
        passedIn: stylesIn,
        classesToAdd: [styles.badge]
    });
    const stylesStr = stylesArrToString(stylesUnified);

    return  <div className = { stylesStr }>
                { title.toUpperCase() }
            </div>
}