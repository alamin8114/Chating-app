import { useSelector } from "react-redux"

const Profile = () => {
    const courentuser=useSelector((store)=>store.data.value)
return (
    <>
        <div className="Profile">
            <div className="container">
                <div className="profile-box shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] w-[500px] flex flex-col justify-center items-center py-[20px] bg-[#FBF5DD] rounded">
                    <div className="img w-[80px] h-[80px] rounded-full overflow-hidden border-[3px] border-brand-color">
                        <img src={courentuser?.photoURL} alt="profile-img" />
                    </div>
                    <h2 className="text-[28px] font-Poppins text-black my-[20px] font-bold">Name:<span className="text-gray-400 font-semibold ml-[10px]">{courentuser?.displayName}</span></h2>
                    <h2 className="text-[28px] flex items-center font-Poppins text-black pb-[20px] font-bold">Email:<span className="text-gray-400 text-[14px] font-semibold ml-[10px]">{courentuser?.email
                    }</span></h2>
                </div>
            </div>
        </div>
    </>
)
}

export default Profile