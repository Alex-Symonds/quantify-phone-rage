import { getValidHeadingTag } from "../typography/headings/utils";
import { EmphasisBox } from "./EmphasisBox";
import styles from './ReasonToRage.module.scss';
import { Road_Rage } from 'next/font/google';

interface I_ReasonToRageBox{
    level : number,
    children : React.ReactNode
}

const roadRage = Road_Rage({
    weight: '400',
    subsets: ['latin']
})

export function ReasonToRage({ level, children } : I_ReasonToRageBox){
    const HeadingTag = getValidHeadingTag(level);
    return  <EmphasisBox
                borderOn={'leftOnly'}
                stylesIn={[styles.emphasisBox]}
            >
                <HeadingTag
                    className={styles.wrapper }
                >
                    <span className={styles.reasonTo}>REASON TO</span>
                    <span className={`${roadRage.className} ${styles.rage}`}>RAGE</span>  
                </HeadingTag>
                { children }
            </EmphasisBox>
}