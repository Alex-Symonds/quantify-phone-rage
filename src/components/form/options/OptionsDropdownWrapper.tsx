/*
    Wrapper to go around options for a select, combobox or search.

    Adds:
        * Message explaining the status of results (loading, number found)
            > This message is optional visually, but always in place for screenreaders
              (Assumption is that visually you only want it when there's a lot of results)
        * Sets the height and position of the pop out options box
*/

import { ReactNode } from "react"

import styles from './OptionsDropdownWrapper.module.scss';

type T_OptionsDropdownProps = 
    Pick<T_OptionsListStatus, "showNumResults"> & {
    id : string,
    disabled? : boolean,
    loading?: boolean,
    numOptions : number,
    children : ReactNode,
}

export function OptionsDropdownWrapper({ disabled, id, loading, numOptions, showNumResults, children } : T_OptionsDropdownProps){

    let autoChildren : JSX.Element | null;
    let screenReaderMsg : string;

    if(loading === true){
        autoChildren = <LoadingOptions />
        screenReaderMsg = "Loading results...";
    }
    else if(numOptions === 0){
        autoChildren = <NoOptions />
        screenReaderMsg = "No results found"; 
    }
    else{
        autoChildren=null;
        screenReaderMsg = `${numOptions} results found. Use up and down arrows to review.`;
    }

    return  <div id={id} className={styles.optionsDropdown}>
                <OptionsListStatus 
                    optionListId = { id }
                    screenReaderMsg = { screenReaderMsg }
                    showNumResults = { showNumResults }
                />
                { autoChildren === null ?
                    children
                    : autoChildren
                }
            </div>
}


type T_OptionsListStatus = {
    optionListId : string,
    screenReaderMsg : string,
    showNumResults? : boolean,
}

function OptionsListStatus({optionListId, screenReaderMsg, showNumResults,} 
    : T_OptionsListStatus)
{
    return  <div 
                id={`optionsAnnouncement_${optionListId}`} 
                aria-live="polite" 
                className={ showNumResults ? styles.visibleNumResults : styles.invisibleNumResults }
            >
                {screenReaderMsg}
            </div>
}

function LoadingOptions(): JSX.Element{
    return  <>
                <OptionLoading />
                <OptionLoading />
                <OptionLoading />
            </>
}

function OptionLoading(){
    return <div className={styles.optionLoading}></div>
}

function NoOptions() : JSX.Element{
    return  <div className={styles.noOptions}>
                No results
            </div>
}

export function getNumOptions(
    options : any[] | null | undefined 
    ) : number {

    return options ? options.length : 0;
}