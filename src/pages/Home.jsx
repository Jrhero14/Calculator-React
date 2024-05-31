import Display from "../components/Display/Display"
import Numpads from "../components/Numpads/Numpads"
import History from "../components/History/History"

import { useState } from "react"

const HomePage = () => {
     const [textDisplay, setTextDisplay] = useState('0')
     const [numbers, setNumbers] = useState([])
     const [operators, setOperators] = useState([])
     const [history, setHistory] = useState([])
     const [subString, setSubString] = useState('')

     const properties = {
          textDisplay: textDisplay,
          setTextDisplay: setTextDisplay,
          numbers: numbers,
          setNumbers: setNumbers,
          operators: operators,
          setOperators: setOperators,
          history: history,
          setHistory: setHistory,
          subString: subString,
          setSubString: setSubString,
     }

     return (
          <>
               <div className="bg-slate-300">
                    <div className="w-full h-screen md:max-w-4xl mx-auto content-center">
                         <div className="flex flex-col md:flex-row gap-x-3">
                              {/* History Mobile */}
                              <div className="flex md:hidden flex-col gap-y-3 md:w-3/6 bg-slate-400 rounded-lg p-5 mb-5 mx-2">
                                   <History mainProps={properties}></History>
                              </div>
                              {/* Calculator */}
                              <div className="flex flex-col gap-y-5 md:w-3/6 mx-2 lg?:mx-0">
                                   <h1 className="text-xl font-bold">Calculator <span className="text-stone-600 text-sm font-light">created by: Jeremi Herodian</span></h1>
                                   {/* Display Components */}
                                   <Display mainProps={properties}></Display>
                                   {/* Numpads Components */}
                                   <Numpads mainProps={properties} ></Numpads>
                              </div>
                              {/* History Desktop */}
                              <div className="hidden md:flex flex-col gap-y-3 md:w-3/6 bg-slate-400 rounded-lg p-5">
                                   <History mainProps={properties}></History>
                              </div>
                         </div>

                    </div>
               </div>

          </>
     )
}

export default HomePage