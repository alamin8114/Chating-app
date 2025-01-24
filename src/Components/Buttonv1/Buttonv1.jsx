import React from 'react'

const Buttonv1 = ({buttonv1bg , buttonv1text}) => {
  return (
    <>
        <div className="button-v1">
            <div className="container">
                <button className={`py-1 text-[16px] font-Poppins font-bold hover:scale-[1.1] hover:text-[#000957] transition-all duration-[.2s] text-black rounded px-3 ${buttonv1bg} `}>{buttonv1text}</button>
            </div>
        </div>
    </>
  )
}

export default Buttonv1