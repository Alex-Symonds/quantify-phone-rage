import Link from 'next/link';
import { Fragment } from 'react';

import { mergeStyleArraysIntoString } from "../utils"
import { ICON_ID, Icon } from '../icons/Icons';

import styles from './NavBar.module.scss';
import { useHamburgerMenu } from './useHamburgerMenu';
import { MutableRefObject, useRef } from 'react';

interface I_NavBar{
    loggedInAs? : string
}

export function NavBar({ loggedInAs } : I_NavBar){
    const loggedInNav : I_NavItemWrapper[] = [
        { href: "/logout", iconID: 'logOut', title: "LOG OUT", subtitle: loggedInAs },
        { href: "/callEditor", iconID: 'newCall', title: "FRESH HELL" },
        { href: "/calls", iconID: 'calls', title: "CALLS", divider: 'before' },
        { href: "/messages", iconID: 'messages', title: "MSGS", srOnly: "MESSAGES" },
        { href: "/victims", iconID: 'contacts', title: "VICTIMS", divider: 'after' },
        { href: "/deleted", iconID: 'deleted', title: "DELETED" },
    ]

    const isLoggedIn = loggedInAs !== null;
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
                                subtitle = { navData.subtitle }
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
    subtitle? : string,
    title? : string,
}

function NavItemWrapper({ divider, href, iconID, srOnly, stylesIn, subtitle, title } : I_NavItemWrapper){

    const myStyles = stylesIn === undefined
        ? styles.menuItem
        : mergeStyleArraysIntoString({ passedIn: stylesIn, classesToAdd: [styles.menuItem] })
    ;

    const Wrapper = title && subtitle ? TitleWrapper : Fragment;

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
                    <Wrapper>
            { title ?
                        <span aria-hidden={ srOnly !== undefined }>
                            { title }
                        </span>
                        : null
            }
            { subtitle ?
                        <span className={ styles.subtitle }>
                            { subtitle }
                        </span>
                        : null
            }
                    </Wrapper>
                </Link>
            </li>
            { divider && divider === 'after' ? <hr /> : null }
            </>
}


function TitleWrapper({children} : { children : React.ReactNode }){
    return <div className={ styles.titleWrapper }>
        { children }
    </div>
}