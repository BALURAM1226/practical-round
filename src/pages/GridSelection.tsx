import { useState } from "react"


const gridArr = Array.from({ length : 9 }).fill({
    value : "",
    isActive : false
  })

export default function GridSelection() {
  const [totalGrid, setTotalGrid] = useState(gridArr)
  const [count , setCount] = useState(0)
  const handleClick = (index : number) => {
    const newCount = count + 1
    if(newCount >= totalGrid.length) return
    const newGridArray = totalGrid.map((item, idx) => {
      if(idx === index) {
        item = { value : newCount , isActive : true}
      }
      return item
    })
    setTotalGrid(newGridArray)
    setCount(newCount)
  }
  const handleReset = () => {
    setTotalGrid(gridArr)
  }
  return (
    <>
     <h2>Grid Selection</h2>
     <div className="grid-container">
      {
        totalGrid.map((item,index)=>{
          return(
            <div className={item?.isActive ? "child-grid-active" : "child-grid"} key={index} onClick={()=> handleClick(index)}>{item.value}</div>
          )
        })
      }
    </div>
    <button className="reset-button" onClick={handleReset}>Clear</button>
    </>
  )
}
