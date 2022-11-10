import { FunctionComponent } from "react"

interface ErrorMessageProps {
    error: string
}

export const ErrorMessage: FunctionComponent<ErrorMessageProps> = ({ error }: ErrorMessageProps) => {
    return (
        <div>
            <p className='text-center'>{error}</p>
        </div>
    )
}