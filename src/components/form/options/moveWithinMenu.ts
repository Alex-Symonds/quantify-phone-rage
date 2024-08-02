/*
    Handle ArrowUp and ArrowDown incrementing/decrementing an activeIndex
*/

import { KeyboardEvent } from "react";

type T_MenuMovementProps = {
    e : KeyboardEvent<any>,
    activeId : number | null,
    menuItems : any[] | HTMLCollectionOf<any>,
    optionIdPrefix : string,
    updateActiveId : (value : number | null) => void,
}

export function moveWithinMenu({e, activeId, menuItems, optionIdPrefix, updateActiveId} 
    : T_MenuMovementProps)
    : void {

    if(menuItems === null || menuItems === undefined){
        return;
    }

    let newId = activeId;

    if(e.key === 'ArrowUp'){
        if(newId === null || newId <= 0 ){ /* Loop from top to bottom */
            newId = menuItems.length - 1;
        }
        else{
            newId--;
        }
    }
    
    if(e.key === 'ArrowDown'){
        if(newId === null || newId >= menuItems.length - 1 ){ /* Loop from bottom to top */
            newId = 0;
        }
        else{
            newId++;
        }
    }

    updateActiveId(newId);

    // If the options are inside a container with scrolling activated, 
    // make sure the selected option remains within view.
    // Why "center"? Because the defaults mean that if "$N results found"
    // is displayed, it'll go off screen as you arrow through options and
    // then there's no easy way to get it back again, because selecting the
    // first option scrolls to the first option being at the top of the scrollbox
    document.getElementById(`${optionIdPrefix}${newId}`)?.scrollIntoView({
        block: "end",
    });
}