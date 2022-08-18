import React from "react";

const Badge = ({ bordered, align, badgeValue, buttonValue }) => {
  const classNameFunction = () => {
    let classNameList = "absolute h-[20px] min-w-[20px] rounded-full bg-blue-400 inline-flex items-center justify-center";
    classNameList += bordered ? " border-2 border-white" : "";

    return classNameList;
  };
  const styles = {
    component: {
      inset:
        align === "left"
          ? "auto calc(100% - 12px) calc(100% - 12px) auto"
          : "auto auto calc(100% - 12px) calc(100% - 12px)",
    },
  };
  return (
    <>
      <span className="relative inline-block">
        {buttonValue && (
            <span>{buttonValue}</span>
        )}
        
        <span className={classNameFunction()} style={styles.component}>
          {badgeValue && <span name="badgeContent">{badgeValue}</span>}
        </span>
      </span>
    </>
  );
};

export default Badge;
