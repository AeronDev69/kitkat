import React, { useState } from "react";

export default ({ Icon, color, onHoverColor, className }: { Icon: React.ComponentType<{ solid: boolean; color: string }>, color: string, onHoverColor: string, className?: string}) => {
    const [onHover, setOnHover] = useState(false);

    return (
        <button onMouseEnter={() => setOnHover(true)} onMouseLeave={() => setOnHover(false)} className={className}>
            <Icon solid={onHover} color={onHover ? onHoverColor : color} />
        </button>
    );
};