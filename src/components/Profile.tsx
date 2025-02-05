import myAvatar from '../assets/my-images/my-avatar.png'

export const Profile = () => {
    return (
        <div className='flex flex-row md:flex-col items-center gap-6 p-0'>
            {/* Avatar with gradient border */}
            <div className='bg-gradient-to-t from-[#303030] from-5% to-[#3f3f40] to-95% h-[120px] w-[120px] lg:h-[130px] sm:h-[80px] lg:w-[130px] rounded-2xl lg:rounded-3xl flex justify-center items-center border border-[#3d3d3d] overflow-hidden'>
                <img
                    src={myAvatar}
                    alt="Mohammed Yaseen Ron"
                    className='w-full h-full object-cover rounded-2xl lg:rounded-3xl'
                />
            </div>

            <div className='mt-4 lg:mt-6 text-center'>
                <div className='flex flex-col items-center space-y-1'>
                    <h1 className='text-xl lg:text-3xl font-medium'>Mohammed Yaseen</h1>
                    <h1 className='text-xl lg:text-3xl font-medium'>Ron</h1>
                </div>

                <div className='mt-3 inline-block bg-[#2b2b2c] rounded-lg px-4 py-2 text-xs lg:text-sm'>
                    Full Stack Developer
                </div>
            </div>
        </div>
    );
}