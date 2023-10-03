import useTheme from "../../Hooks/useTheme";
import { SOCIAL_LINKS } from "../../lib/data";
import RegularList from "../general/RegularList";
import SocialLink from "../navigation/SocialLink";
import Img1 from "../../assets/Images/Blog/insight-img-4.png";
import Img2 from "../../assets/Images/Blog/blog-img-3.png";


const Blogdetails = () => {
  const { theme } = useTheme();

  const minor_heading = `font-primary text-[26px] leading-[36px] text-${theme} theme-transition`;

  return (
    <div id="blog-details">
      <div className={`bg-${theme}-secondary p row-span-2 h-[15rem] px-5 py-8`}>
        <div>
          <h3
            className={`text-xl font-bold underline transition-all hover:no-underline text-${theme}`}
          >
            Have any project in mind?
          </h3>
          <p className="pb-10 pt-2 leading-7 ">
            Let’s talk about your awesome project and make something cool!
          </p>
          <a href="#" className="btn-secondary">
            Let’s Talk
          </a>
        </div>
        <h3>share:</h3>
        <ul className="flex items-center justify-start gap-x-4 pt-5">
          <RegularList
            items={SOCIAL_LINKS}
            resourceName="items"
            itemComponent={SocialLink}
          />
        </ul>
      </div>
      <div>
        <p>Job - January 24, 2023</p>
        <h3 className="text-${theme} theme-transition font-bold capitalize leading-10 sm:text-[2.9rem] sm:leading-[50px] lg:text-[3.5vw] lg:leading-[54px]">
          How to Start Looking for a UI/UX Design Job in 2023
        </h3>
        <p>Author: Trent Boult</p>
        <div>
          <img src={Img1} alt="" />
          <p className="text-[18px]  leading-[35px]">
            Ideas and solutions can be iterated to create better ones over time.
            Sharing experiences, discussing mistakes, and eventually learning
            from them will help you gain experience and confidence much faster.
            Which (hopefully) will result if diminishing your fear of making
            mistakes. At BB, it is common practice to share experiences and
            mistakes so that we can all learn from them on a personal and
            project level.
          </p>

          <ul>
            <li>
              <a href="#">Be Curious</a>
            </li>
            <li>
              <a href="#">Take UI/UX Design Courses</a>
            </li>
            <li>
              <a href="#">Get A Mentorship</a>
            </li>
          </ul>
        </div>
        <div>
          <img src={Img2} alt="" />
          <h3 className={`${minor_heading}`}>Solution</h3>
          <p className="text-[18px] leading-[35px]">
            Ideas and solutions can be iterated to create better ones over time.
            Sharing experiences, discussing mistakes, and eventually learning
            from them will help you gain experience and confidence much faster.
            Which (hopefully) will result if diminishing your fear of making
            mistakes. At BB, it is common practice to share experiences and
            mistakes so that we can all learn from them on a personal and
            project level.
          </p>
        </div>
        <div>
          <img src={Img2} alt="" />
          <h3 className={`${minor_heading}`}>Solution</h3>
          <p className="text-[18px] leading-[35px]">
            Ideas and solutions can be iterated to create better ones over time.
            Sharing experiences, discussing mistakes, and eventually learning
            from them will help you gain experience and confidence much faster.
            Which (hopefully) will result if diminishing your fear of making
            mistakes. At BB, it is common practice to share experiences and
            mistakes so that we can all learn from them on a personal and
            project level.
          </p>
        </div>
        <div>
          <img src={Img2} alt="" />
          <h3 className={`${minor_heading}`}>Solution</h3>
          <p className="text-[18px] leading-[35px]">
            Ideas and solutions can be iterated to create better ones over time.
            Sharing experiences, discussing mistakes, and eventually learning
            from them will help you gain experience and confidence much faster.
            Which (hopefully) will result if diminishing your fear of making
            mistakes. At BB, it is common practice to share experiences and
            mistakes so that we can all learn from them on a personal and
            project level.
          </p>
        </div>
        <div>
          <h3 className={`${minor_heading}`}>Solution</h3>
          <p className="text-[18px] leading-[35px]">
            Ideas and solutions can be iterated to create better ones over time.
            Sharing experiences, discussing mistakes, and eventually learning
            from them will help you gain experience and confidence much faster.
            Which (hopefully) will result if diminishing your fear of making
            mistakes. At BB, it is common practice to share experiences and
            mistakes so that we can all learn from them on a personal and
            project level.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogdetails;
