import { useState, useEffect, MutableRefObject } from 'react';

interface I_UseHamburgerMenu {
    burgerButtonRef : MutableRefObject<HTMLButtonElement | null>,
    navDrawerRef : MutableRefObject<HTMLUListElement | null>
}

export function useHamburgerMenu({ burgerButtonRef, navDrawerRef } : I_UseHamburgerMenu){
    const [isExpanded, setIsExpanded] = useState(false);
    
    useEffect(() => {
        const MIN_WIDTH_FOR_SIDEBAR = 1024;
        function autoExpandForDesktop(){
            if(window.innerWidth >= MIN_WIDTH_FOR_SIDEBAR){
                setIsExpanded(true);
            }
        }
        autoExpandForDesktop();

        window.addEventListener('resize', () => {
            autoExpandForDesktop();
            return () => window.removeEventListener("resize", autoExpandForDesktop);
        });
    },[]);

    function toggleExpansion(){
        setIsExpanded(prev => !prev);
    }

    function updateIsExpanded(newState : boolean){
        setIsExpanded(newState);
    }

    return {
        handleClick: toggleExpansion,
        handleKeyDown: useHamburgerMenuKeyboardNav({
            burgerButtonRef, 
            navDrawerRef, 
            isExpanded, 
            setIsExpanded: updateIsExpanded
        }),
        isExpanded
    }
}

interface I_UseHamburgerMenuWithKeyboard extends I_UseHamburgerMenu{
    isExpanded : boolean,
    setIsExpanded : (arg : boolean) => void
}
function useHamburgerMenuKeyboardNav({ 
    burgerButtonRef, navDrawerRef, isExpanded, setIsExpanded 
    } : I_UseHamburgerMenuWithKeyboard
){
    const [currentMenuOption, setCurrentMenuOption] = useState(0);

    // main function, which we're returning
    function handleKeydown(e : React.KeyboardEvent){
        if(burgerButtonRef.current === null || navDrawerRef.current === null){
            return;
        }

        if(e.key === 'Tab' || e.key === 'Escape'){
            if(isExpanded){
                closeMenuViaKeyboard();
            }
        }
        else if(e.key === 'Enter' || e.key === ' '){
            e.preventDefault(); // Prevent this from also 'clicking' the icon and immediately closing the menu again
            if(isExpanded){
                if(document.activeElement !== null){
                    document.activeElement.getElementsByTagName('a')[0].click();
                    closeMenuViaKeyboard();
                }
            }
            else {
                openMenuViaKeyboard();
            }
        }
        else if(e.key === 'ArrowUp' || e.key === 'ArrowDown'){
            e.preventDefault(); // Prevent the website from scrolling distractingly in the background
            if(e.key === 'ArrowUp') {
                if(e.target === burgerButtonRef.current){
                    closeMenuViaKeyboard();
                    return;
                }
                selectPreviousOption();
            }
            else if(e.key === 'ArrowDown') {
                if(isExpanded){
                    selectNextOption();
                }
                else{
                    openMenuViaKeyboard();
                }  
            }
        }
    }

    // helpers
    function openMenuViaKeyboard(){
        const menuItems = getMenuItems();
        const selected = menuItems[currentMenuOption].getElementsByTagName('A')[0];
        window.setTimeout(() => selected.focus(), 1);
        setIsExpanded(true);
    }

    function closeMenuViaKeyboard(){
        const btnEle = burgerButtonRef.current;
        btnEle?.focus();
        setCurrentMenuOption(0);
        setIsExpanded(false);
    }

    function selectPreviousOption(){
        if(currentMenuOption === 0){
            const numNavElements = getNumberOfNavElements();
            if(numNavElements > 0){
                selectNavOption(numNavElements - 1);
            }
            return;
        }
        selectNavOption(currentMenuOption - 1);
    }

    function selectNextOption(){
        const numMenuItems = getNumberOfNavElements();
        if(currentMenuOption === numMenuItems - 1){
            selectNavOption(0);
            return;
        }
        selectNavOption(currentMenuOption + 1);
    }


    function selectNavOption(navId : number){
        if(focusSelectedNavItem(navId)){
            setCurrentMenuOption(navId);
        }
    }

    function focusSelectedNavItem(navId : number){
        if(navDrawerRef.current !== null){
            const liChildren = getMenuItems();
            if(liChildren.length > 0 && navId < liChildren.length){
                const selected = liChildren[navId];
                selected.getElementsByTagName('A')[0]?.focus();
                return true;
            }
        }
        return false;
    }

    function getMenuItems() : HTMLCollectionOf<Element> | any[] {
        if(navDrawerRef.current === null){
            return [];
        }
        return navDrawerRef.current.getElementsByTagName('LI');
    }

    function getNumberOfNavElements() : number{
        const liChildren = getMenuItems();
        return liChildren.length;
    }

    return handleKeydown;
}