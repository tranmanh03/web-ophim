import { IconArrowRight } from "@/components/icons";
import React from "react";

export default function HomeBoard() {
  return (
    <div className="image-background">
      <div className="flex justify-center items-center">
        <div className="container">
          <div className="flex justify-center items-center flex-col p-16 mt-[80px] mb-[40px] home-board">
            <a href="/phimhay">
              <img
                alt="Logo oPhim"
                src={"./images/logo-removebg.png"}
                className="h-[68px]"
              />
            </a>
            <h2 className="text-center text-4xl text-white leading-[1.5] font-semibold">
              Xem Phim Miễn Phí Cực Nhanh, Chất Lượng Cao Và Cập Nhật Liên Tục
            </h2>
            <a href="/phimhay">
              <button className="btn-play flex justify-center items-center gap-3 py-6 px-10 rounded-4xl cursor-pointer">
                <strong className="text-[18px] text-black">Xem ngay</strong>
                <IconArrowRight />
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
