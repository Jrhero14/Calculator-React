
const History = (props) => {
     const { mainProps } = props
     return (
          <>
          <h1 className="text-xl font-bold text-center mb-3">History</h1>
                    {
                         mainProps.history.map((data, index) => {
                              return (
                                   <div className="flex justify-between" key={index}>
                                        <p className="text-lg font-semibold font-mono">{data}</p>
                                        <p className="text-lg font-semibold font-mono">{index+1}</p>
                                   </div>
                              )
                         })
                    }
          </>
     )
}

export default History