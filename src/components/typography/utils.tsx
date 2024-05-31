
type HeadingLevelsWithFallback = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';

export function getValidHeadingTag(level : number) : HeadingLevelsWithFallback {
    const validHeadingLevels : HeadingLevelsWithFallback[] = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
    return level >= 0 && level < validHeadingLevels.length 
        ? validHeadingLevels[level] 
        : 'p';
}