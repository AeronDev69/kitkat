import { PropsWithChildren } from "react"

export default ({children}: PropsWithChildren) =>{


    return (
        <div className="w-screen h-screen flex justify-center overflow-x-hidden">
            <div className={`w-[1088px] relative`}>
                {children}
            </div>
        </div>

    )
}