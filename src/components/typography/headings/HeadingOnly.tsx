import { stylesArrToString } from "../../utils";

import { I_Heading } from "./types";
import { getValidHeadingTag } from "./utils";


export function HeadingOnly(
    { stylesInMain, level, title } 
    : Pick<I_Heading, "stylesInMain" | "level" | "title">
){
    const HeadingTag = getValidHeadingTag(level);
    const stylesIn = stylesArrToString(stylesInMain ?? []);
    return <HeadingTag className = {`${ stylesIn !== "" ? `${stylesIn}` : '' }`} >
                { title }
            </HeadingTag>
}