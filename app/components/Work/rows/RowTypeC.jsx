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
            <div className="block">
              <div className="image-title">
                <h3>Oosterpark, Amsterdam</h3>
              </div>
              <div className="image-date">
                <h3>2023</h3>
              </div>
              <div className="image-description">
                <h4>Some description here. Anything about the picture or just some thoughts. Could be optional.</h4>
              </div>
            </div>
        </div>

      </>
    )
  }