import Link from 'next/link';

import { Icon as MyIcon } from '../icons/Icons';

import { NavBar } from "./NavBar";

import styles from './Header.module.scss';


// Nav is not inside the actual header tags for accessibility reasons
export function Header({ isLoggedIn } : { isLoggedIn : boolean }){
    return  <div className = {styles.headerContainer} >
                <header>
                    <Link href={"/"} >
                        <MyIcon iconID = {'logo'} />
                        <span className = "visuallyHidden">
                            HOME
                        </span>
                    </Link>
                </header>
                <NavBar 
                    isLoggedIn = { isLoggedIn }
                />
            </div>
}