


export type ICON_IDS = keyof typeof iconSettings;

const iconSettings = {
    contact: IconContact,
    fallback: IconFallback,
    warning: IconWarning,
}

interface I_Icon {
    iconID : keyof typeof iconSettings,
    size? : number,
}

export function Icon({ iconID, size } : I_Icon) : JSX.Element {
    const RequestedIcon = iconID in iconSettings 
        ? iconSettings[iconID]
        : iconSettings.fallback
    ;

    return <RequestedIcon size={size} />
}


interface I_IconSVG {
    size? : number
}

function IconContact({ size } : I_IconSVG){
    return <div>o</div>
}

function IconFallback({ size } : I_IconSVG){
    return <div>[?]</div>
}

function IconWarning({ size } : I_IconSVG){
    return <div>/!\</div>
}