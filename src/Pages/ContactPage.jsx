import withPageAnimation from "../Components/HOC/withPageAnimation";
import ContactPageSchema from "../Components/SEO/schemas/ContactPageShema";
import RootSection from "../Components/contactpage/RootSection";

const PageWithAnimation = withPageAnimation(RootSection);

const ContactPage = () => {
  return (
    <>
      <PageWithAnimation />
      <ContactPageSchema />
    </>
  );
};

export default ContactPage;
