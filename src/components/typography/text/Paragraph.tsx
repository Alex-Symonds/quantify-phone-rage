import { stylesArrToString } from "@/components/utils";
import styles from "./Paragraph.module.scss";

interface I_Paragraph{
    size? : string, 
    stylesIn? : string[],
    children: React.ReactNode 
}

export function Paragraph(
    { size, stylesIn, children } 
    : I_Paragraph
){
    const sizeClass = size !== undefined && size in styles
        ? styles[size]
        : styles.default
    ;

    const stylesAsStr = stylesIn !== undefined && Array.isArray(stylesIn) && stylesIn.length > 0
        ? stylesArrToString(stylesIn)
        : ""
    ;

    return  <p className={`${sizeClass}${ stylesAsStr !== "" ? stylesAsStr : "" }`}>
                { children }
            </p>
}