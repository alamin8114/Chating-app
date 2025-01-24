
const CommonUserProfile = ({CommonPhoto, commonName}) => {
  return (
    <>
    <div className="commonProfile">
        <div className="container">
            <div className="common-profile-row flex gap-[10px] items-center">
            <div className="common-img w-[60px] h-[60px] rounded-full bg-gray-300">
                <img src={CommonPhoto} alt="commonPhoto" />
            </div>
            <div className="common-text">
                <h2 className="text-[20px] font-Poppins font-semibold text-gray-400">{commonName}</h2>
            </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default CommonUserProfile