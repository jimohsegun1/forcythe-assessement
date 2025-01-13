const CTA = () => {
  return (
    <div className="bg-gradient-to-b from-[#030516] via-[#071626] to-[#071626] flex flex-col justify-center items-center pb-28 px-4 md:px-12 xl:px-24">
      <div className="max-w-[720px] mx-auto text-center mb-6">
        <h2 className="text-[30px] md:text-[36px] lg:text-[42px] leading-[1.3] text-[#60a6e7]">
          Ready to Scale?
        </h2>
        <h2 className="text-[30px] md:text-[36px] lg:text-[42px] leading-[1.3]">
          Join successful brands that chose us as their{" "}
          <span className="text-[#60a6e7]">growth accelerator</span>
        </h2>
      </div>

      <div className="group relative z-30 w-fit">
        <div className="w-[144px] h-12 border border-dashed border-white rounded-full  group-hover:border-[#0066cc]"></div>
        <button className="absolute left-1 -top-1 lg:right-[90px] font-semibold text-black bg-white w-[144px] h-12 rounded-full group-hover:bg-[#154b81] group-hover:text-white transition ease-in-out flex items-center justify-center">
          Book a Call
        </button>
      </div>
    </div>
  );
};

export default CTA;
