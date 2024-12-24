import classroom_img from "/src/assets/Home_Assets/classroom_star.png";

export default function Images() {
  return (
    <div className="relative flex flex-col items-center justify-center lg:justify-start lg:items-start lg:block w-full hidden xl:block">
      {/* Star Image */}
      <img
        src={classroom_img}
        alt="classroom_img"
        className="w-full lg:w-120  xl:w-160 lg:absolute lg:right-70 hidden xl:block"
      />
    </div>
  );
}



