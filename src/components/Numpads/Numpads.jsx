import Button from "../Numpads/Button"
const Numpads = (props) => {
     const {mainProps} = props
     return (
          <>
               <div className="h-full w-full rounded-lg bg-[#686D76] p-5">
                    <div className="grid grid-cols-4 gap-5">
                         <Button text={7} mainProps={mainProps}></Button>
                         <Button text={8} mainProps={mainProps} ></Button>
                         <Button text={9} mainProps={mainProps} ></Button>
                         <Button text={"DEL"} mainProps={mainProps} bgColor={"bg-[#DC5F00]"} borderColor={"border-orange-700"} activeColor={"active:bg-orange-700"}></Button>
                         <Button text={4} mainProps={mainProps} ></Button>
                         <Button text={5} mainProps={mainProps} ></Button>
                         <Button text={6} mainProps={mainProps} ></Button>
                         <Button text={'+'} mainProps={mainProps}></Button>
                         <Button text={1} mainProps={mainProps} ></Button>
                         <Button text={2} mainProps={mainProps} ></Button>
                         <Button text={3} mainProps={mainProps} ></Button>
                         <Button text={'-'} mainProps={mainProps}></Button>
                         <Button text={'.'} mainProps={mainProps}></Button>
                         <Button text={0} mainProps={mainProps} ></Button>
                         <Button text={'/'} mainProps={mainProps}></Button>
                         <Button text={'x'} mainProps={mainProps}></Button>

                         <div className="col-span-2">
                              <Button mainProps={mainProps} text={"Reset"} bgColor={"bg-[#DC5F00]"} borderColor={"border-orange-700"} activeColor={"active:bg-orange-700"}></Button>
                         </div>
                         <div className="col-span-2">
                              <Button mainProps={mainProps} text={'='} textColor="text-white" bgColor={"bg-stone-400"} borderColor={"border-stone-500"} activeColor={"active:bg-stone-500"}></Button>
                         </div>
                    </div>
               </div>
          </>
     )
}

export default Numpads