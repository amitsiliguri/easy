import React from 'react'

const Card = ({outlined,elevate,body,header,footer}) => {
    const classNameFunction = () => {
        let classNameList =
          "rounded-md bg-white dark:bg-gray-800";
        classNameList += outlined ? " border border-gray-200 dark:border-gray-900" : "";
        classNameList += elevate ? " shadow-md" : "";
        return classNameList;
      };
  return (
    <>
    <div className={classNameFunction()}>
        {header && (
            <div className="py-5 px-2 border-b border-gray-200 dark:border-gray-900">
            <span name="header">{header}</span>
        </div>
        )}
        {body && (
            <div className="py-5 px-2">
            <p>{body}</p>
        </div>
        )}
        {footer && (
            <div className="py-5 px-2 border-t border-gray-200 dark:border-gray-900">
            <span name="footer">{footer}</span>
        </div>
        )}
        
        
    </div>
    </>
  )
}

export default Card