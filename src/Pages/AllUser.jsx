import Buttonv1 from "../Components/Buttonv1/Buttonv1"
import CommonUserProfile from "../Components/common/CommonUserProfile"

const AllUser = () => {
  return (
    <>
    <div className="allUser">
        <div className="container">
        <h2 className="text-[28px] font-Poppins font-bold p-3 text-gray-400 ">All User</h2>
        <div className="flex justify-between items-center py-2">
            <CommonUserProfile commonName={'Aamin'}/>
            <Buttonv1 buttonv1bg={'bg-brand-color '} buttonv1text={'Add'}/>
        </div>
        </div>
    </div>
    </>
  )
}

export default AllUser