import { FunctionComponent, ReactNode } from "react";
import './tooltip.css'

interface Props {
    children: ReactNode,
    direction: string
}
export const ToolTip: FunctionComponent<Props> = ({children, direction}) => {
    return (
        <>
            <div className={`tooltip tooltip_top`}>
                <span className="tooltip_children">{children}</span>
            </div>
        </>
    )
}