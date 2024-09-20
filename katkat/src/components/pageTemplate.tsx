import { PropsWithChildren } from "react"

export default ({children}: PropsWithChildren) =>{


    return (
        <div className="w-screen h-screen flex flex-col justify-between overflow-x-hidden">
            <div className="flex-grow flex justify-center">
                <div className="w-[1088px] relative">
                {children}
                </div>
            </div>
            <footer className="w-full bg-gray-900 text-gray-100 py-4 flex justify-center mt-5">
                <div className="w-[1088px] text-center">
                <p>&copy; 2024 Your Company. All rights reserved.</p>
                </div>
            </footer>
        </div>
    )
}