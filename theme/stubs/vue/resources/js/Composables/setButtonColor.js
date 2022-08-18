export function setButtonColor() {
    const buttonClasses = (outlined = false, colorType = 'default') => {
        let color = colorType, setClasses = '';
        color +=  (outlined) ? ' outlined':'';
        switch (color) {
            case 'primary':
                setClasses = 'bg-blue-500 text-gray-100 hover:text-white hover:bg-blue-600 dark:hover:bg-blue-400 active:bg-blue-700 dark:active:bg-blue-300'
                break;
        
            case 'warning':
                setClasses = 'bg-yellow-500 text-gray-100 hover:text-white hover:bg-yellow-600 dark:hover:bg-yellow-400 active:bg-yellow-700 dark:active:bg-yellow-300'
                break;
    
            case 'danger':
                setClasses = 'bg-rose-500 text-gray-100 hover:text-white hover:bg-rose-600 dark:hover:bg-rose-400 active:bg-rose-700 dark:active:bg-rose-300'
                break;
    
            case 'success':
                setClasses = 'bg-lime-500 text-gray-100 hover:text-white hover:bg-lime-600 dark:hover:bg-lime-400 active:bg-lime-700 dark:active:bg-lime-300'
                break;
    
            case 'default outlined':
                setClasses = 'text-gray-800 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 active:bg-gray-200 dark:active:bg-gray-700 border border-gray-800 dark:border-gray-100'
                break;
    
            case 'primary outlined':
                setClasses = 'text-blue-500 border border-blue-500 hover:bg-blue-500/10 active:bg-blue-500/20'
                break;
        
            case 'warning outlined':
                setClasses = 'text-yellow-500 border border-yellow-500 hover:bg-yellow-500/10 active:bg-yellow-500/20'
                break;
    
            case 'danger outlined':
                setClasses = 'text-rose-500 border border-rose-500 hover:bg-rose-500/10 active:bg-rose-500/20'
                break;
    
            case 'success outlined':
                setClasses = 'text-lime-500 border border-lime-500 hover:bg-lime-500/10 active:bg-lime-500/20'
                break;
    
            default:
                setClasses = 'bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 active:bg-gray-300 dark:active:bg-gray-600'
                break;
        }
        return setClasses;
    };

    return {buttonClasses}
}
