
import '../styles.css';

interface InfoProps {
    children: React.ReactNode;
    label: string;
    value: string;
  }
export const Info=({ children, label, value }:InfoProps)=>{
    return <div className={`w-full h-12 mt-[30px] flex flex-row justify-between`}>


      <div className="relative icon-box w-12 h-12 flex items-center justify-center rounded-xl bg-custom-gradient shadow-custom-soft z-1">
      <div className='w-[18px] h-[18px] '>
        {children}
      </div>
      </div>


      <div className='h-[41px] w-[150px]'>
        <div className='w-full h-[18px] text-[#b3b3b3] text-xs font-semibold'>
          {label}
        </div>
        <div className='w-full h-[21px] text-[#fafafa] font-light text-sm'>
          {value}
        </div>
      </div>
    </div>
}