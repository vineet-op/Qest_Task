import Button from "./components/Button";
import Inputs from "./components/Inputs";
import Labels from "./components/Labels";
import Navbar from "./components/Navbar";
// import public from "./../../public"

export default function Home() {
  return (
    <main className="h-screen w-screen bg-neutral-100">
      <div className="flex pt-[20px] pl-[192px]">
        <Navbar />
      </div>
      <div className="w-full mt-[96px] flex items-center justify-center">
        <Inputs />
      </div>

      <div className=" flex flex-col gap-2 justify-center text-center items-center mt-[75px] w-full h-[209px]">
        <p className="font-bold text-6xl">
          Maximize Your Impact
        </p>
        <p className="font-bold text-6xl"><span className="text-orange-600">Business with</span> R <span className="text-pink-950">Max</span> </p>
        <p className=" bg-white px-40 p-2 rounded-lg mt-4 font-medium text-neutral-500">Enhance your business with Rmax's all-in-one platform—streamlining client <br /> engagement, automating workflows, and fueling growth.</p>

      </div>

      <div className="flex gap-6  mt-[60px] items-center justify-center">
        <Button backgroundColor={"bg-orange-600"} height={"50px"} width={"125px"} textColor={"white"} text={"Get Started"} />
        <Button backgroundColor={"bg-white"} height={"50px"} width={"120px"} textColor={"black"} text={"Book A Demo"} />
      </div>

      <div className="flex mt-[70px] justify-center w-screen items-center text-center">
        <div className="flex gap-8 justify-center flex-wrap">
          <Labels
            width="219px"
            height="47px"
            text="Seamless Onboarding"
            backgroundColor="bg-white"
            textColor="white"
            borderRadius="8px"
          />
          <Labels
            width="219px"
            height="47px"
            text="Client Engagement"
            backgroundColor="bg-white"

            textColor="white"
            borderRadius="8px"
          />
          <Labels
            width="219px"
            height="47px"
            text="Generate Report"
            backgroundColor="bg-white"

            textColor="black"
            borderRadius="8px"
          />
          <Labels
            width="219px"
            height="47px"
            text="Revenue Growth"
            backgroundColor="bg-white"

            textColor="white"
            borderRadius="8px"
          />

          {/* //TODO image */}
          <img src="../../public/Fab.png" alt="fab icon" className="size-16" />
        </div>
      </div>

    </main>
  );
}
