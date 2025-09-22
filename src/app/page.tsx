import HomeAbout from "@/app/(home)/components/home-about";
import HomeSection from "@/app/(home)/components/home-board";
import HomeFooter from "@/app/(home)/components/home-footer";
import "@/app/(home)/components/home.scss";

export default function Home() {
  return (
    <div>
      <HomeSection />
      <HomeAbout />
      <HomeFooter />
    </div>
  );
}
