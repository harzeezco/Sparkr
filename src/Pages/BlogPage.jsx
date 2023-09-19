import image1 from '../assets/Images/blog-img-1.png'
import BlogCard from '../Components/blogpage/BlogCard'
import image2 from '../assets/Images/blog-img-2.png'
import image3 from '../assets/Images/blog-img-3.jpg'
import insight1 from '../assets/Images/insight-img-1.jpg'
import insight2 from '../assets/Images/insight-img-2.png'
import insight3 from '../assets/Images/insight-img-3.png'
import insight4 from '../assets/Images/insight-img-4.png'
import tutorial1 from '../assets/Images/tutorial-img-1.png'
import tutorial2 from '../assets/Images/tutorial-img-2.png'
import tutorial3 from '../assets/Images/tutorial-img-3.png'
import tutorial4 from '../assets/Images/tutorial-img-4.png'
import tutorial5 from '../assets/Images/tutorial-img-5.png'
import tutorial6 from '../assets/Images/tutorial-img-6.png'
const BlogPage = () => {
  return (
    <div className="bg-colorDark">
    
        <section className="m-auto s w-full  px-4 py-6 lg:max-w-[85vw] text-left">
          <h2 className="font-weight-lg font-primary text-[30px] font-bold capitalize leading-10 text-white sm:text-[45px] md:leading-[74px] lg:text-[60px] w-3/6 ">latest <span className='text-orangePrimary'> blog </span></h2>
        <p className="text-colorwhite-100 text-lg mb-12 mt-2">The latest in security, access control, IT compliance, and other news.</p>
        <div className="grid md:grid-cols-2  gap-8">
          <div>
            <BlogCard img={image1} date={'Jan 24'} year={2023} title={'10 tips for UI/UX designers who are kicking off their careers in 2023'}/>
            
          </div>
          <div className='grid gap-8'>
            <BlogCard img={image2} date={'Jan 24'} year={2023} title={'10 tips for UI/UX designers who are kicking off their careers in 2023'} />
             <BlogCard img={image3} date={'Jan 24'} year={2023} title={'10 tips for UI/UX designers who are kicking off their careers in 2023'}/>

          </div>
        </div>
        <h3 className='font-weight-lg font-primary text-[30px] font-bold capitalize leading-10 text-white sm:text-[45px] md:leading-[74px] lg:text-[60px] w-3/6  md:mt-24  md:mb-12 mt-16 mb-7'>insight</h3>
        <div className="grid md:grid-cols-2 gap-8">
          <BlogCard img={insight1} date={'Jan 24'} year={2023} title={'10 tips for UI/UX designers who are kicking off their careers in 2023'} />
          <BlogCard img={insight2} date={'Jan 24'} year={2023} title={'10 tips for UI/UX designers who are kicking off their careers in 2023'} />
          <BlogCard img={insight3} date={'Jan 24'} year={2023} title={'10 tips for UI/UX designers who are kicking off their careers in 2023'} />
          <BlogCard img={insight4} date={'Jan 24'} year={2023} title={'10 tips for UI/UX designers who are kicking off their careers in 2023'}/>
        </div>
        <h3 className='font-weight-lg font-primary text-[30px] font-bold capitalize leading-10 text-white sm:text-[45px] md:leading-[74px] lg:text-[60px] w-3/6 md:mt-24  md:mb-12 mt-16 mb-7'>tutorial</h3>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 ">
          <BlogCard img={tutorial1} date={'Jan 24'} year={2023} title={'10 tips for UI/UX designers who are kicking off their careers in 2023'} />
          <BlogCard img={tutorial2} date={'Jan 24'} year={2023} title={'10 tips for UI/UX designers who are kicking off their careers in 2023'} />
          <BlogCard img={tutorial3} date={'Jan 24'} year={2023} title={'10 tips for UI/UX designers who are kicking off their careers in 2023'} />
          <BlogCard img={tutorial4} date={'Jan 24'} year={2023} title={'10 tips for UI/UX designers who are kicking off their careers in 2023'}/>
          <BlogCard img={tutorial5} date={'Jan 24'} year={2023} title={'10 tips for UI/UX designers who are kicking off their careers in 2023'} />
          <BlogCard img={tutorial6} date={'Jan 24'} year={2023} title={'10 tips for UI/UX designers who are kicking off their careers in 2023'}/>
        </div>
        </section>


    </div>
  );
};



export default BlogPage;
