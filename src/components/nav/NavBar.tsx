import Link from 'next/link';

import { mergeStyleArraysIntoString } from "../utils"
import { ICON_ID, Icon } from '../icons/Icons';

import styles from './NavBar.module.scss';
import { useHamburgerMenu } from './useHamburgerMenu';
import { MutableRefObject, useRef } from 'react';

interface I_NavBar{
    isLoggedIn : boolean,
}

export function NavBar({ isLoggedIn } : I_NavBar){
    const loggedInNav : I_NavItemWrapper[] = [
        { href: "/logout", iconID: 'logOut', title: "LOG OUT" },
        { href: "/callEditor", iconID: 'newCall', title: "FRESH HELL" },
        { href: "/calls", iconID: 'calls', title: "CALLS", divider: 'before' },
        { href: "/messages", iconID: 'messages', title: "MSGS", srOnly: "MESSAGES" },
        { href: "/victims", iconID: 'contacts', title: "VICTIMS", divider: 'after' },
        { href: "/deleted", iconID: 'deleted', title: "DELETED" },
    ]

    const navDrawerRef : MutableRefObject<HTMLUListElement | null> = useRef(null);
    const menuButtonRef : MutableRefObject<HTMLButtonElement | null> = useRef(null);
    const { 
        handleClick: hamburgerClick, 
        handleKeyDown: hamburgerKeyDown,
        isExpanded
    } = useHamburgerMenu({ burgerButtonRef: menuButtonRef, navDrawerRef });

    return  <nav    
                role="navigation" 
                aria-label = "Main menu"
                className = { styles.navBar } 
                onKeyDown = { hamburgerKeyDown }
            >
                <button 
                    type="button" 
                    aria-controls="navDrawer" 
                    aria-expanded = { isExpanded }
                    onClick = { hamburgerClick }
                    className = { styles.hamburgerButton }
                    ref = { menuButtonRef }
                >
                { isExpanded 
                    ? <Icon iconID = { 'close' } />
                    : <Icon iconID = { 'burgerMenu' } />
                }
                    <span className='visuallyHidden'>
                        { isExpanded ? "close" : "menu" }
                    </span>
                </button>

                <ul 
                    id="navDrawer"
                    className = { isExpanded ? styles.menuExpanded : styles.menuCollapsed }
                    ref = { navDrawerRef }
                >
            { !isLoggedIn
                ? <NavItemWrapper 
                        href = { "/login" }
                        iconID = { 'logIn' }
                        title = { "LOG IN" }
                    />
                : loggedInNav.map(navData => {
                    return  <NavItemWrapper key = { `${navData.iconID}${navData.title}`}
                                divider = { navData.divider }
                                href = { navData.href }
                                iconID = { navData.iconID }
                                title = { navData.title }
                                srOnly = { navData.srOnly }
                            />
                })
            }
                </ul>
            </nav>
}

interface I_NavItemWrapper {
    divider? : 'before' | 'after',
    href : string,
    iconID : string,
    srOnly? : string,
    stylesIn? : string[],
    title? : string,
}

function NavItemWrapper({ divider, href, iconID, stylesIn, srOnly, title } : I_NavItemWrapper){

    const myStyles = stylesIn === undefined
        ? styles.menuItem
        : mergeStyleArraysIntoString({ passedIn: stylesIn, classesToAdd: [styles.menuItem] })
    ;

    return  <>
            { divider && divider === 'before' ? <hr /> : null }
            <li>
                <Link 
                    className = { myStyles }
                    href={ href } 
                >
                    <Icon iconID={ iconID as ICON_ID } />
            { srOnly ?
                    <span className = "visuallyHidden">
                        { srOnly }
                    </span>
                    : null
            }
            { title ?
                    <span aria-hidden={ srOnly !== undefined }>
                        { title }
                    </span>
                    : null
            }
                </Link>
            </li>
            { divider && divider === 'after' ? <hr /> : null }
            </>
}