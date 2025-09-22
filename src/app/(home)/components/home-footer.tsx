import React from 'react'

export default function HomeFooter() {
  return (
    <div className='flex justify-center items-center mb-12'>
      <div className='container px-24'>
        <ul className='flex justify-center items-center gap-6 text-[14px] text-[#999] my-6'>
          <li className='hover:text-[#FFD875]'>
            <a href='#'>Hỏi-Đáp</a>
          </li>
          <li className='hover:text-[#FFD875]'>
            <a href='#'>Chính sách bảo mật</a>
          </li>
          <li className='hover:text-[#FFD875]'>
            <a href='#'>Điều khoản sử dụng</a>
          </li>
          <li className='hover:text-[#FFD875]'>
            <a href='#'>Giới thiệu</a>
          </li>
          <li className='hover:text-[#FFD875]'>
            <a href='#'>Liên hệ</a>
          </li>
        </ul>
        <div className='text-center text-[14px]'>
          &copy; 2025 <span className='cursor-pointer hover:text-[#FFD875]'>Ophim</span>
        </div>
      </div>
    </div>
  )
}
