const Button = ({ text = '',
     textColor = "text-stone-600",
     bgColor = "bg-stone-300",
     borderColor = "border-stone-400",
     activeColor = "active:bg-stone-400",
     mainProps = {}
}) => {
     return (
          <button type="button" className={`${bgColor} ${textColor} w-full h-full rounded-lg p-2 border-b-4 ${borderColor} text-2xl font-bold ${activeColor} overflow-hidden`}
               onClick={
                    checkFunctButton.bind(this, text, mainProps)
               }>{text}
          </button>
     )
}

function checkFunctButton(text, parentProps) {
     if (!isNaN(Number(text))) {
          return addNumberToString(parentProps, text)
     }
     switch (text) {
          case 'Reset':
               return resetDisplay(parentProps.setTextDisplay, parentProps.setHistory, parentProps.setSubString)
          case 'DEL':
               return deleteNumber(parentProps.textDisplay, parentProps.setTextDisplay)
          case '.':
               return alert("Not implemented yet")
          case '+':
               return pushOperation(parentProps, '+')
          case '-':
               return pushOperation(parentProps, '-')
          case 'x':
               return pushOperation(parentProps, 'x')
          case '/':
               return pushOperation(parentProps, '/')
          case '=':
               return equalLogic(parentProps)
          default:
               return
     }
}

function pushOperation(parentProps, operationButton) {
     let numbersCopy = parentProps.numbers
     numbersCopy.push(Number(parentProps.textDisplay))
     parentProps.setNumbers(numbersCopy)
     parentProps.setTextDisplay('0')

     let operatorsCopy = parentProps.operators
     operatorsCopy.push(operationButton.toString())
     parentProps.setOperators(operatorsCopy)

     // Update substring
     let subStringCurrent = parentProps.subString
     subStringCurrent += ` ${parentProps.textDisplay} ${operationButton.toString()}`
     parentProps.setSubString(subStringCurrent)
}

function equalLogic(parentProps) {
     let numbersCopy = parentProps.numbers
     numbersCopy.push(Number(parentProps.textDisplay))
     parentProps.setNumbers(numbersCopy)
     let operationCopy = parentProps.operators
     var result = 0
     var historyStringBuilder = ''

     let combine = []
     for (let i = 0; i < numbersCopy.length; i++) {
          combine.push(numbersCopy[i])
          if (i + 1 === numbersCopy.length) {
               break
          }
          for (let j = 0; j < operationCopy.length; j++) {
               combine.push(operationCopy[i])
               break
          }
     }
     historyStringBuilder = combine.join("")
     console.log(combine)

     if (operationCopy.length !== 0) {
          while (combine.indexOf('/') !== -1) {
               let dump = 0
               let index = combine.indexOf('/')
               if (index !== -1) {
                    dump = combine[index - 1] / combine[index + 1]
                    combine[index] = dump
                    combine.splice(index - 1, 1)
                    combine.splice(index, 1)
               }
          }
          console.log(combine)

          while (combine.indexOf('x') !== -1) {
               let dump = 0
               let index = combine.indexOf('x')
               if (index !== -1) {
                    dump = combine[index - 1] * combine[index + 1]
                    combine[index] = dump
                    combine.splice(index - 1, 1)
                    combine.splice(index, 1)
               }
          }
          console.log(combine)

          while (combine.indexOf('+') !== -1) {
               let dump = 0
               let index = combine.indexOf('+')
               if (index !== -1) {
                    dump = combine[index - 1] + combine[index + 1]
                    combine[index] = dump
                    combine.splice(index - 1, 1)
                    combine.splice(index, 1)
               }
          }
          console.log(combine)

          while (combine.indexOf('-') !== -1) {
               let dump = 0
               let index = combine.indexOf('-')
               if (index !== -1) {
                    dump = combine[index - 1] - combine[index + 1]
                    combine[index] = dump
                    combine.splice(index - 1, 1)
                    combine.splice(index, 1)
               }
          }
          result = combine[0]
          console.log(combine)


          // Update History
          historyStringBuilder += `=${result}`
          parentProps.setTextDisplay(result)
          let historyCopy = parentProps.history
          historyCopy.push(historyStringBuilder)
          parentProps.setHistory(historyCopy)

          // Reset Numbers and Operators
          parentProps.setNumbers([])
          parentProps.setOperators([])

          // Reset substring
          parentProps.setSubString('')

     } else {
          // Update History
          let historyCopy = parentProps.history
          historyCopy.push(`${parentProps.textDisplay} =`)
          parentProps.setHistory(historyCopy)

          // Reset Display Number
          parentProps.setTextDisplay('0')
     }
}

function addNumberToString(parentProps, text) {
     if (parentProps.textDisplay === '0') {
          parentProps.setTextDisplay(text.toString())
     } else {
          parentProps.setTextDisplay(parentProps.textDisplay.toString() + text.toString())
     }
}

function resetDisplay(onClick, setHistory, setSubString) {
     setHistory([])
     onClick('0')
     setSubString('')
}

function deleteNumber(currentText, onClick) {
     if (currentText.toString().length === 1) {
          onClick(currentText.toString().slice(0, -1))
          onClick('0')
     } else {
          onClick(currentText.toString().slice(0, -1))
     }
}

export default Button