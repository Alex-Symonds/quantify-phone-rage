import { useLayoutEffect, MutableRefObject } from 'react';

interface I_useCloseOnOutsideClick{
    isOpen: boolean,
    ref : MutableRefObject<any>,
    setIsOpen : (value: boolean) => void,
}
export default function useCloseOnOutsideClick({isOpen, ref, setIsOpen} : I_useCloseOnOutsideClick){
    useLayoutEffect(() => {
        if(isOpen){
            window.addEventListener('click', clickOutsideToClose);
        }
        else{
            window.removeEventListener('click', clickOutsideToClose);
        }

        return function cleanup(){
            window.removeEventListener('click', clickOutsideToClose);
        }

        function clickOutsideToClose(e : MouseEvent){
            // Prevent the menu from closing prematurely when the user toggles an option
            if(ref.current && e.composedPath().includes(ref.current)){
                return;
            }
            setIsOpen(false);
        }

    }, [isOpen, ref, setIsOpen]);
}
