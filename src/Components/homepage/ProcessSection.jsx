import Card2 from "../Common/Card2";



const ProcessSection = () => {
   return (
     <div
       id="process"
       className="m-auto w-full px-6  pb-[6rem]  lg:max-w-[85vw]"
     >
       <h1 className="font-weight-lg font-primary text-[30px] font-bold capitalize leading-10 text-white sm:text-[45px] md:leading-[74px] lg:text-[60px]">
         our <span className="text-orangePrimary">customized</span> <br />
         workflow
       </h1>

       <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
         <Card2
           num="#1"
           heading="discussion"
           prgh="We start by learn and research based on client brief and resource
             to gain about the needs, goals, product and requirements. We are
             providing the best."
         />
         <Card2
           num="#2"
           heading="discovery"
           prgh="We start by learn and research based on client brief and resource
             to gain about the needs, goals, product and requirements. We are
             providing the best."
         />
         <Card2
           num="#3"
           heading="strategy"
           prgh="We start by learn and research based on client brief and resource
             to gain about the needs, goals, product and requirements. We are
             providing the best."
         />
         <Card2
           num="#4"
           heading="design & dev"
           prgh="We start by learn and research based on client brief and resource
             to gain about the needs, goals, product and requirements. We are
             providing the best."
         />
       </div>
     </div>
   );
};

export default ProcessSection;
