
const BlogCard = ({img,date,year,title}) => {
  return (
    <div>
      <img src={img} alt='a book with a phone place on a platform' className='w-full'/>
      <p className='text-colorwhite-100 mt-5 mb-2 font-secondary'> Trent Boult •{date}, {year}</p>
      <p className='text-white font-bold md:text-xl  text-lg font-secondary'>{ title}</p>
    </div>
  )
}

export default BlogCard