export interface I_Heading{
    level : number,
    stylesInMain? : string[],
    stylesInSubtitle? : string[],
    subtitle? : string,
    title : string,
}

export interface I_HeadingFormatting extends I_Heading {
    purpose : string,
}

export type T_HeadingWithSubtitle = { 
    h: string, 
    subtitle : string | undefined 
}

export type T_HeadingWithSubtitleCSSSettings = {
    [key: string] : T_HeadingWithSubtitle
};