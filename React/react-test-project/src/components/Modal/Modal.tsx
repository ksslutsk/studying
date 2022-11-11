import { FunctionComponent } from "react";

interface ModalProps {
    children: React.ReactNode,//how write it in func props
    title: string,
    onClose: () => void
}

export const Modal: FunctionComponent<ModalProps> = ({ children, title, onClose }: ModalProps) => {
    return (
        <>
            <div className="fixed bg-black/50 top-0 right-0 left-0 bottom-0" onClick={onClose}></div>
            <div className="w-[500px] p-5 rounded bg-white absolute top-10 left-1/2 -translate-x-1/2">
                
                <h1 className="text-2xl text-center mb-2">{ title }</h1>

                {children}
            </div>
        </>
    );
}