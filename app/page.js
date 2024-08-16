import Header from "@/components/layouts/Header";
import Banner from "@/components/themes/Banner";
import AboutBanner from "@/components/themes/AboutBanner";
import AboutBanner2 from "@/components/themes/AboutBanner2";
import Blog from "@/components/themes/Blog";
import Form from "@/components/forms/Form";
import Footer from "@/components/layouts/Footer";

export default function Home() {
  return (
    <>
      <div>
        <Header />
        <Banner />
        <AboutBanner />
        <AboutBanner2 />
        <Blog />
        <Form />
        <Footer />
      </div>
    </>
  );
}
