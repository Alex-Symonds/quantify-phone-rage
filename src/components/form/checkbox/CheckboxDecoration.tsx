/*
    Checkboxes are resistant to styling, so the plan is to visually
    hide them and display a custom element instead.

    This component is the "custom element", to be chucked inside a label
    alongside the actual&invisible checkbox and a label of some description.

    It can display three states:
        true        check mark
        false       empty
        undefined   dash
*/
import { useEffect, useState, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

import { Icon } from '@/components/icons/Icons';
import styles from './CheckboxDecoration.module.scss';
import animStyles from './CheckboxDecorationAnim.module.scss';
import { mergeStyleArraysIntoString } from '@/components/utils';

interface I_CheckboxDecoration {
    checked : boolean,
    indeterminate? : boolean,
}

export function CheckboxDecoration({ checked, indeterminate } : I_CheckboxDecoration){
    
// ----------- Support for CSSTransition
    const [showCheck, setShowCheck] = useState(checked && (indeterminate === undefined || indeterminate === false));
    useEffect(() => {
        setShowCheck(checked && (indeterminate === undefined || indeterminate === false));
    }, [checked, indeterminate]);

    const indetRef = useRef(null);
    const checkRef = useRef(null);

    // This must match the transition durations in the CSS file
    const cssTransitionTimeMs = 150;
// -----------

    const CSS = mergeStyleArraysIntoString({
        classesToAdd: [styles.checkbox],
        conditionalClasses: [checked || indeterminate ? " " + styles.filled : undefined]
    });
    
    return  <span 
                className = { CSS }
                aria-hidden="true"
            >
                <CSSTransition
                    in={indeterminate ?? false}
                    nodeRef={indetRef}
                    timeout={cssTransitionTimeMs}
                    classNames={{...animStyles}}
                    unmountOnExit
                    onEnter={() => setShowCheck(false)}
                    onExited={() => setShowCheck(checked)}
                >        
                    <span className={ styles.animWrapper} ref={indetRef}>
                        <Icon iconID = { "indeterminate" } />
                    </span>
                </CSSTransition>
                <CSSTransition
                    in={showCheck}
                    nodeRef={checkRef}
                    timeout={cssTransitionTimeMs}
                    classNames={{...animStyles}}
                    unmountOnExit
                > 
                    <span className={ styles.animWrapper} ref={checkRef}>
                        <Icon iconID = { "check" } />
                    </span>
                </CSSTransition>
            </span>
}