function Navbar({view, onChangeView}){
    const tabClass= (name) =>
        `rounded-full px-5 py-2 text-sm font-medium transition ${
            view === name
                ? "bg-indigo-600 text-white shadow-md shadow-indigo-200"
                : "text-slate-500 hover:bg-white hover:text-slate-900"
        }`;

    return (
        <nav className="sticky top-0 z-20 border-b border-slate-200 bg-white/80 backdrop-blur-mc">
            <div classname="mx auto flex max-w-6x1 items-center justify-between px-6 py-4">
                <h1 className="text-2x1 font-bold tracking-tight">
                    Show<span className="text-indigo-600">Case</span>
                </h1>
            </div>

            <div classname="flex gap-1 rounded-full bg-slate-100 p-1">
                <button className={tabClass("gallery")} onClick={() => onChangeView("gallery")}>
                    Gallery
                </button>
                <button className={tabClass("manage")} onClick={() => onChangeView("manage")}>
                    Manage
                </button>
            </div>
        </nav>
    )
}

export default Navbar;