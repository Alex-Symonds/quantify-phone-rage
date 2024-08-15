import { useEffect, useId, useState, useRef } from "react";
import { CSSTransition } from 'react-transition-group';

import styles from './RadioDecoration.module.scss';
import animStyles from './RadioDecorationAnim.module.scss';

type T_PropsRadio = {
    selected : boolean
}

export function RadioDecoration({ selected : arg_selected } : T_PropsRadio){

    // ----------- Support for CSSTransition
    const [isSelected, setIsSelected] = useState(false);
    useEffect(() => {
        setIsSelected(arg_selected);
    }, [arg_selected]);

    const ref = useRef(null);

    // This must match the transition durations in the CSS file
    const cssTransitionTimeMs = 150;
    // -----------

    const idForKey = useId();

    console.log("13:24", isSelected);

    return  <span 
                className = { styles.radio }
                aria-hidden="true"
            >
                <CSSTransition
                    in={isSelected}
                    nodeRef={ref}
                    timeout={cssTransitionTimeMs}
                    classNames={{...animStyles}}
                    unmountOnExit
                >   
                    <span key={ idForKey } className={ styles.filler } ref={ref}>
                    </span>
                </CSSTransition>
            </span>

}