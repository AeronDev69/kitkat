import SearchIcon from "../icons/searchIcon"

export default ({setValue, handleOnclick, className}: {setValue: React.Dispatch<React.SetStateAction<string>>, handleOnclick: () => void, className?: string}) => {

    return (
        <div className={`flex flex-row ${className}`}>
            <div className="flex items-center bg-gray-900 px-2 py-1 border-solid border-secondary w-72 p-5">
                <div className="mr-2">
                    <SearchIcon color="rgb(249, 250, 251)"/>
                </div>
                    <input
                        placeholder="Search..."
                        className="bg-transparent text-white w-full outline-none"
                        onChange={((e) => {setValue(e.target.value)})}
                    />
                </div>
            <button onClick={handleOnclick} className="bg-secondary p-5 text-white font-primary hover:bg-gray-50 hover:text-gray-900">SEARCH</button>
        </div>

    )
}