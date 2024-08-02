import { useState, useId, KeyboardEvent, MutableRefObject } from 'react';

import useCloseOnOutsideClick from '@/components/utils/useCloseOnOutsideClick';
import { moveWithinMenu } from './moveWithinMenu';


export type T_UseOptionsListProps = {
    id? : string, 
    optionIds: string[],  
    optionsVisibleOnInit? : boolean,
    selectedIds : string[] | null, 
    onOptionPick : (option: string) => void, 
    ref : MutableRefObject<any>,    
}

/**
 * Hook to provide functionality to an options list
*/
export function useOptionsList({
     id, onOptionPick, optionIds, optionsVisibleOnInit, ref, selectedIds,
    } : T_UseOptionsListProps )
{
    const [optionsVisible, setOptionsVisible] = useState<boolean>(optionsVisibleOnInit ?? false);
    const [activeId, setActiveId] = useState<number | null>(null);

    // Generic open and close functions
    function closeOptionsList(){
        setOptionsVisible(false);
    }

    function openOptionsList(){
        setActiveIdOnOpen();
        setOptionsVisible(true);
    }

    // Support for opening: when the box opens, which option should be pre-selected?
    function setActiveIdOnOpen(){
        if(selectedIds && selectedIds.length > 0){
            const selectedIndex = optionIds.findIndex((ele : string) => {
                selectedIds.includes(ele);
            });
            if(selectedIndex !== -1){
                setActiveId(selectedIndex);
                return;
            }
        }
        return setActiveId(0);
    }


    // Prep some unique IDs for things
    let inputId = useId();
    inputId = id ?? inputId;
    const optionsListId = inputId + "_optionList";
    const optionIdPrefix = optionsListId + "-";

    // Responses to user actions

    // Outside click
    useCloseOnOutsideClick({
        isOpen : optionsVisible, 
        ref,
        setIsOpen : setOptionsVisible
    });

    // Focus
    function handleFocus(){
        openOptionsList();
    }

    // Toggle
    function toggleOptionVisibility(){
        if(!optionsVisible){
            setActiveIdOnOpen();
        }

        setOptionsVisible(prevState => {
            return !prevState;
        });
    }

    // Selection
    function updateActiveId(activeId : number | null){
        setActiveId(activeId);
    }

    function selectAndClose(optionId : string){
        onOptionPick(optionId);
        closeOptionsList();
    }

    // Pressing a key
    function onKeyDown(e : KeyboardEvent<HTMLDivElement>){
        selectMenuKeyDown({
            e,
            activeId, 
            closeOptionsList,
            optionIdPrefix,
            onOptionPick,
            openOptionsList,
            optionIds,
            optionsVisible,
            updateActiveId,
        });
    }
  
    return {
        activeDescendantId: activeId === null ? undefined : optionIdPrefix + activeId,
        activeId,
        inputId,
        optionIdPrefix,
        optionsListId,
        optionsVisible,
        onKeyDown,
        openOptionsList,
        handleFocus,
        selectAndClose,
        toggleOptionVisibility,
    }
}

type T_SelectMenuKeydownProps = 
    Pick<T_UseOptionsListProps, "optionIds"> 
    & {
        e : React.KeyboardEvent<HTMLDivElement>,
        activeId : number | null,
        optionsVisible : boolean,
        closeOptionsList : () => void,
        optionIdPrefix : string,
        onOptionPick: (str : string) => void,
        openOptionsList : () => void,
        updateActiveId : (value : number | null) => void,
}
function selectMenuKeyDown({e, optionIds, optionsVisible, activeId, closeOptionsList, onOptionPick, openOptionsList, optionIdPrefix, updateActiveId} 
    : T_SelectMenuKeydownProps
    ){

    if(e.key === 'ArrowDown' || e.key === 'ArrowUp'){
        e.preventDefault(); /* Prevent the cursor from moving to the start or end of the text when navigating the results */
        
        if(!optionsVisible){
            openOptionsList();
            return;
        }

        moveWithinMenu({ e, menuItems: optionIds, activeId, updateActiveId, optionIdPrefix });
    }

    if(e.key === 'Enter' || e.key === 'Space'){
        if(activeId !== null && optionsVisible){
            if(optionIds !== null && optionIds !== undefined && optionIds.length > 0){
                onOptionPick(optionIds[activeId]);
                closeOptionsList();
            }
        }
    }

    if(e.key === 'Escape'){
        closeOptionsList();
    }
}


