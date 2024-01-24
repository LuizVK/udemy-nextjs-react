export default function Logo() {
    return (
        <div className={`
            flex flex-col items-center justify-center
            h-12 w-12 rounded-full
            bg-white
        `}>
            <div className="h-3 w-3 rounded-full bg-emerald-400 mb-0.5" />
            <div className="flex mt-0.5">
                <div className="h-3 w-3 rounded-full bg-purple-700 mr-0.5" />
                <div className="h-3 w-3 rounded-full bg-rose-900 ml-0.5" />
            </div>
        </div>
    )
}