import React from 'react'

export default function HomeTopDesc({ data }: { data: any }) {
  return (
    <div className='mb-12'>
      <h3 className='text-[22px] text-white mb-[20px]'>{data.title}</h3>
      {data.desc && <p className='leading-[1.7] text-[16px]'>{data.desc}</p>}
      {data.desc2 && <p className='leading-[1.7] text-[16px] my-6'>{data.desc2}</p>}
      {data.topListData.map((item: any) => {
        return (
          <>
            <h4 className='text-[16px] text-[#FFD875] my-6 font-medium'>{item.header}</h4>
            <p>{item.desc}</p>
          </>
        )
      })}
    </div>
  )
}
