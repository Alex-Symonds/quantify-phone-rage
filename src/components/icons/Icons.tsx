import { iconSettings, svgIconSettings, T_svgIconSettings } from "./IconsLibrary";

export type ICON_IDS = keyof typeof iconSettings | keyof typeof svgIconSettings;

export const ID_LIST = Object.keys(iconSettings).concat(Object.keys(svgIconSettings));

interface I_Icon {
    iconID : ICON_IDS,
    size? : number,
}
export function Icon({ iconID, size } : I_Icon) : JSX.Element {
    if(iconID in svgIconSettings){
        return <SVGWrapperForIcon 
                    settings = { svgIconSettings[iconID as keyof typeof svgIconSettings] } 
                    size = { size } 
                />
    }

    const RequestedIcon = iconID in iconSettings 
        ? iconSettings[iconID as keyof typeof iconSettings]
        : iconSettings.fallback
    ;
    return <RequestedIcon />
}


interface I_SVGIcon extends Pick<I_Icon, "size"> {
    settings: T_svgIconSettings,
}
function SVGWrapperForIcon({ settings, size } : I_SVGIcon) : JSX.Element {
    const SVGContents = settings.ReactNode;

    const defaultSize = typeof settings.defaultSize === 'string'
        ? { H: settings.defaultSize, W: settings.defaultSize }
        : settings.defaultSize;

    return <svg width={ size ?? defaultSize.W } height={ size ?? defaultSize.H}
                version="1.1" viewBox={ settings.viewbox } xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
            >
                <SVGContents />
            </svg>
}