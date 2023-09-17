import ServiceSliderSection from '../Components/homepage/ServiceSliderSection';
import about from '../assets/Images/about-img-1.png'

import icon1 from '../assets/Images/icon-1.png'
import icon2 from '../assets/Images/icon-2.png'
import icon3 from '../assets/Images/icon-3.png'
import icon4 from '../assets/Images/icon-4.png'
import icon5 from '../assets/Images/icon-5.png'
const AboutPage = () => {
  return (
    <>
    <div className="bg-colorDark">
      
    <section className="m-auto s w-full  px-4 py-6 lg:max-w-[85vw]">
      <h1 className="text-white font-primary text-3xl font-bold capitalize sm:text-[3.2rem] sm:leading-[60px] lg:text-[6.5vw] lg:leading-[95px] w-4/5">Hello, we're <span className="text-orangePrimary">creative</span>  agent</h1>
      <div className= "grid">
        <article className="grid grid-cols-2 pt-10">
            <p className="font-semibold text-white  w-3/5">Professional Creative Design Agency Based in Bangladesh</p>
            <p className="text-colorwhite-100">A team of creative thinkers and doers who believe in the power of creativity to inspire change. Working seamlessly across brand and digital, we build modern brands with heart and spirit. </p>
          </article>
          <img src={about} alt="" />

      </div>

    </section>
      </div>
      <div className='bg-colorDarkLight'>

          <ServiceSliderSection/>
      </div>
      <div className="bg-colorDark">

      <section className='m-auto s w-full  px-4 py-6 lg:max-w-[85vw] text-center'>
          <h2 className="font-weight-lg font-primary text-[30px] font-bold capitalize leading-10 text-white sm:text-[45px] md:leading-[74px] lg:text-[60px] w-3/6 m-auto">We bring<span className='text-orangePrimary'> ideas </span> to life</h2>
          <p className='text-colorwhite-100 w-3/6 m-auto'>Our culture is built on a foundation of taking care of our own, investing in continued education and wellness, and developing skills, because we know you can’t pour from an empty cup.</p>
          <div className="grid grid-cols-3 gap-8 text-left mt-16">

            <Stats num={ 0}  sign='+' p1='Years Experience' p2='We have over 5+ years of experience in this design industry.'/>
            <Stats num={ 0}  sign='+' p1='Design Awards' p2='We have achieved over 60 design awards for our awesome work. '/>
            <Stats num={ 0}  sign='%' p1='Client Satisfaction ' p2='Our client is 97% satisfied with our work and services'/>
          </div>
          
      </section>
      </div>
      <div className="bg-colorDark">
        <section className='m-auto s w-full  px-4 py-6 lg:max-w-[85vw] text-left'>
          <h2 className="font-weight-lg font-primary text-[30px] font-bold capitalize leading-10 text-white sm:text-[45px] md:leading-[74px] lg:text-[60px] w-full m-auto">core<span className='text-orangePrimary'> values.</span> <br /> expressed in everything</h2>
          <div className="grid grid-cols-3 gap-4">
            <Value icon={icon1 } p1='We Value Our People First' p2='We lead with empathy and take care of one another.'/>
            <Value icon={icon2 } p1='We Value Our People First' p2='We lead with empathy and take care of one another.'/>
            <Value icon={icon3 } p1='We Value Our People First' p2='We lead with empathy and take care of one another.'/>
            <Value icon={icon4 } p1='We Value Our People First' p2='We lead with empathy and take care of one another.'/>
            <Value icon={icon5 } p1='We Value Our People First' p2='We lead with empathy and take care of one another.'/>
            <Value icon={icon2 } p1='We Value Our People First' p2='We lead with empathy and take care of one another.'/>
            
          </div>

        </section>
      </div>
    </>
  );
};
const Stats = ({num,sign,p1,p2}) => {
  return <div className='bg-colorDarkLight py-4 px-9'>
    
            <p className="font-primary text-[40px] leading-[65px] text-white sm:text-[35px] lg:text-[54px]"><span data-value="5">{num }</span><span className="text-orangePrimary ">{sign}</span></p>
            <p className="font-bold text-white text-sm mt-5 mb-3">{
            p1}</p>
              <p className='text-colorwhite-100 text-xs mb-7'>{p2}</p>
          </div>

}
const Value = ({icon,p1,p2}) => {
  return<div className="md:hover:bg-colorDarkLight flex py-7 px-6 space-x-6 ">
              <img src={icon} alt={p1} className='w-10 h-10' />
              <article >
      <p className='text-white font-bold mb-3'>{ p1}</p>
      <p className='text-colorwhite-100 text-xs mb-7'>{p2 }</p>
              </article>
            </div>
}
export default AboutPage;
