export default function RowTypeC({ src1, src2 }) {

    return(
      <>

        <div className="grid-row c">
            <div className="block">
              <img src={src1} alt=""/>
            </div>
            <div className="block">
              <img src={src2} alt=""/>
            </div>
        </div>

      </>
    )
  }