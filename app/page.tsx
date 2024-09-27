import Image from "next/image";

export default function Home() {
  return (
    <div id="whole-screen" className="flex items-center justify-center w-full h-screen ">
      <main id="main-container" className="flex items-center justify-center h-[900px] w-[1150px] ">
        <div id="sub-container" className="flex flex-row  w-full h-full">
          <div id="left-container" className="mr-5 flex flex-col h-full w-[250px] ">
            <div id="left-top-container" className="bg-[#f9eee1] mb-5 justify-center flex-col p-5 rounded-xl flex w-full h-[450px] ">
              <h1 className="font-bold text-3xl mb-5">Create and schedule content <span>quicker.</span></h1>
              <Image
                src="/illustration-create-post.webp"
                alt="create post"
                height={50}
                width={150}
              />
            </div>
            <div id="left-bottom-container" className="bg-[#ffcb6b] justify-between p-5 flex-col rounded-xl flex w-full h-[450px]  relative overflow-visible">
              <h1 className="font-bold text-4xl mb-5">Write your content using AI</h1>
              <Image
                src="/illustration-ai-content.webp"
                height={200}
                width={200}
                alt="ai content"
              />
            </div>
          </div>
          <div id="second-sub-container" className="flex h-full w-[900px] flex-col ">
            <div id="second-sub-top-container" className=" mb-5 w-full h-[650px] flex flex-row">
              <div id="second-sub-left-container" className="flex mr-5 flex-col h-full w-[650px] ">
                <div id="second-sub-left-top-container" className="bg-[#7650dc] mb-5 rounded-xl  flex-col p-10 text-center justify-between items-center w-full h-[400px] flex">
                  <h1 className="font-bold text-7xl text-white">Social Media <span className="text-orange-400">10x</span> Faster with AI</h1>
                  <div className="items-center flex flex-col mb-5">
                    <Image 
                      src="/illustration-five-stars.webp"
                      height={200}
                      width={200}
                      alt="stars"
                    />
                    <p className="text-white tracking-widest">Over 4,000 5-star reviews</p>
                  </div>
                </div>
                <div id="second-sub-bottom-container" className="flex flex-row w-full h-[300px] ">
                  <div id="second-sub-bottom-left-container" className="p-5 mr-5 bg-white rounded-xl flex flex-col h-full w-[450px] ">
                    <Image
                      src="/illustration-multiple-platforms.webp"
                      height={300}
                      width={300}
                      alt="mutiple platforms"
                      className="overflow-hidden"
                    />
                    <h1 className="font-bold text-3xl">Manage multiple accounts and platforms.</h1>
                  </div>
                  <div id="second-sub-bottom-right-container" className="bg-[#ffcb6b] overflow-hidden relative p-5 rounded-xl flex flex-col h-full w-[450px] ">
                    <h1 className="font-bold text-3xl w-[200px]">Maintain a consistent posting schedule</h1>
                    <Image
                      src="/illustration-consistent-schedule.webp"
                      height={200}
                      width={200}
                      alt="schedule"
                      className="absolute -bottom-16"  
                    />
                  </div>
                </div>
              </div>
              <div id="second-sub-right-top-container" className="justify-between relative p-6 overflow-hidden flex flex-col bg-[#dacffc] w-full h-full rounded-2xl ">
                <h1 className="font-bold text-3xl ">Schedule to social media</h1>
                <Image
                src="/illustration-schedule-posts.webp"
                height={500}
                width={500}
                alt="illustration"
                className="absolute top-52"
                />
                <p>Optimize post timings to publish content at the perfect time for your audience</p>
              </div>
            </div>
            <div id="third-sub-bottom-container" className="flex w-full h-full ">
              <div id="third-bottom-left-container" className="p-5 mr-5 justify-between bg-white rounded-xl flex flex-col w-[375px] h-full ">
                <h1 className=" text-7xl">&gt;56%</h1>
                <p className="tracking-widest">faster audience growth</p>
                <Image
                src="/illustration-audience-growth.webp"
                height={200}
                width={200}
                alt="audience"
                />
              </div>
              <div id="third-bottom-right-container" className="bg-[#7650dc] justify-center items-center flex-row rounded-xl p-6 flex w-[675px] h-full ">
                <Image
                src="/illustration-grow-followers.webp"
                height={210}
                width={210}
                alt="followers"
                />
                <h1 className="text-3xl font-bold text-white">
                  Grow followers with non-stop content.
                </h1>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
