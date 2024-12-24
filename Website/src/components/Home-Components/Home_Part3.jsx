import { WhoWeAre, Heading, Paragraph, Images } from "./HomePart3Component";

export default function Home_Part3() {
  return (
    <>
      <div
        className="flex flex-col py-6 px-4 xxxs:py-6 xxxs:px-6 md:py-12 md:px-16 lg:pt-20 lg:px-15 mb-6 lg:mb-20"
        id="about"
      >
        <WhoWeAre />
        <div className="flex flex-col lg:flex-row justify-between items-start relative">
          <div className="flex-3/4 lg:w-3/4 pr-4 lg:pr-8">
            <Heading />
            <Paragraph />
          </div>
          {/* Right Section (Image) */}
          <div className="flex-2/5 lg:w-2/5">
            <Images />
          </div>
        </div>
      </div>
    </>
  );
}