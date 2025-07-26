import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./AsSeenInSlider.css";

const logos = [
  { name: "Vogue", url: "//au.koala.com/cdn/shop/files/layer1.svg?v=1726543341" },
  { name: "Bazaar", url: "//au.koala.com/cdn/shop/files/Harper_s_Bazaar_Logo_1.svg?v=1726543341" },
  { name: "GQ", url: "//au.koala.com/cdn/shop/files/gq_1.svg?v=1726543341" },
  { name: "Refinery29", url: "//au.koala.com/cdn/shop/files/Group.svg?v=1726543341" },
  { name: "Urban List", url: "//au.koala.com/cdn/shop/files/Page-1.svg?v=1726543341" }
  
];

const AsSeenInSlider = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 }},
      { breakpoint: 768, settings: { slidesToShow: 2 }},
      { breakpoint: 480, settings: { slidesToShow: 1 }},
    ]
  };

  return (
    <div className="bg-[#f7f7f3] py-6 px-4 rounded-lg">
      <div className="text-xl font-semibold mb-4">As seen in</div>
      <Slider {...settings}>
        {logos.map((logo, idx) => (
          <div key={idx} className="flex justify-center items-center px-4">
            <img src={logo.url} alt={logo.name} className="h-12 object-contain grayscale hover:grayscale-0 transition duration-300" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default AsSeenInSlider;
