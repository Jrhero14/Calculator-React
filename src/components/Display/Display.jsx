const Display = (props) => {
     const {mainProps} = props
     return (
          <>
               <div className="h-full w-full bg-[#373A40] rounded-lg content-center p-3">
                    <h3 className="text-end text-sm font-bold text-white">{mainProps.subString}</h3>
                    <h1 className="text-end text-4xl font-bold text-white">{mainProps.textDisplay}</h1>
               </div>
          </>
     )
}

export default Display