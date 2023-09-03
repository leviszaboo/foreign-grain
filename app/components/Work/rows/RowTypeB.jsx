
export default function RowTypeB({ src1, src2 }) {

  return(
    <>
  
    <div className="grid-row b">
        <div className="block">
          <img src={src1}/>
        </div>
        <div className="block">
          <img src={src2}/>
        </div>
      </div>

    </>
  )
}