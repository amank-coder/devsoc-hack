import { MoreVertical, ChevronLast, ChevronFirst } from "lucide-react"
import { useContext, createContext, useState, useEffect } from "react"
import Logout from './Logout';

const SidebarContext = createContext()

export default function Sidebar({ children }) {
  const [expanded, setExpanded] = useState(true)
  const [logout, setLogout] = useState(false);

  useEffect(()=>{
    if(window.innerWidth<640)
      setExpanded(false);
    else 
      setExpanded(true);  
  },[window.innerWidth])

  return (
    <aside className="h-screen fixed">
      <nav className="h-full flex flex-col bg-white border-r shadow-sm">
        <div className="md:p-4 pb-2 flex justify-between items-center">
          {/* <img
            src="/logo.png" alt='logo'
            className={`overflow-hidden transition-all ${
              expanded ? "w-32" : "w-0"
            }`}
          /> */}
          <h2
            className={`overflow-hidden transition-all font-bold text-2xl ml-4 ${
              expanded ? "w-32" : "w-0"
            }`}
          ><a href='/'>Academia</a></h2>
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
          >
            {expanded ? <ChevronFirst /> : <ChevronLast />}
          </button>
        </div>

        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3">{children}</ul>
        </SidebarContext.Provider>

        <div className="border-t flex p-3">
          <img
            src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
            alt=""
            className="w-10 h-10 rounded-md"
          />
          <div
            className={`
              flex justify-between items-center
               transition-all ${expanded ? "w-52 ml-3" : "hidden"}
          `}
          >
            <div className="leading-4">
              <h4 className="font-semibold">Aman Konchgamey</h4>
              <span className="text-xs text-gray-600">aman@gmail.com</span>
            </div>
            <div className={`${!logout ? 'hidden' : 'block'} relative left-20 bottom-8`}>
              <Logout />
            </div>
            <div className="hover:bg-gray-200 rounded-md cursor-pointer p-2" onClick={()=>setLogout(!logout)}>
              <MoreVertical size={20} />
            </div>
            
          </div>
        </div>
      </nav>
    </aside>
  )
}

export function SidebarItem({ icon, text, active, link }) {
  const { expanded } = useContext(SidebarContext)
  
  return (
    <li
      
    >
    <a href={link} className={`
        relative flex items-center py-2 px-3 my-4
        font-medium rounded-md cursor-pointer
        transition-colors group
        ${
          active
            ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
            : "hover:bg-indigo-50 text-gray-600"
        }
    `}>
      {icon}
      <span
        className={`overflow-hidden transition-all ${
          expanded ? "w-52 ml-3" : "w-0"
        }`}
      >
        {text}
      </span>
      </a>
      

      {!expanded && (
        <div
          className={`
          absolute left-full rounded-md px-2 py-1 ml-6
          bg-indigo-100 text-indigo-800 text-sm
          invisible opacity-20 -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
      `}
        >
          {text}
        </div>
      )}
    </li>
  )
}