import { iconDictionary } from "./IconsLibrary";

export type ICON_ID = keyof typeof iconDictionary ;
export const ICON_ID_LIST = Object.keys(iconDictionary);

export function isValidIconID(iconID : string){
    return iconID in iconDictionary;
}

interface I_Icon {
    iconID : ICON_ID
}
export function Icon({ iconID } : I_Icon) : JSX.Element {
    const RequestedIcon = iconID in iconDictionary 
            ? iconDictionary[iconID as ICON_ID]
            : iconDictionary.fallback
    ;
    return <RequestedIcon />
}