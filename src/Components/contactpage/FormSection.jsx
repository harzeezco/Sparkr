import useTheme from "../../Hooks/useTheme";
import Checkbox from "../general/Checkbox";
import Container from "../layouts/Container";

const FormSection = () => {
  const { theme } = useTheme();

  const isLight =
    theme === "light" ? "border-colorDarkLight" : "border-colorLight";

  const input = `w-full rounded-sm border bg-inherit p-2 ${isLight} theme-transition border-solid outline-none focus:border-orangePrimary active:border-orangePrimary mt-2`;
  const label = `text-lg font-medium capitalize leading-7 text-${theme} theme-transition`;

  return (
    <Container id="form">
      <form className="m-auto max-w-full sm:max-w-[60%]">
        <div className="pb-4">
          <label htmlFor="firstName" className={label}>
            First name
          </label>
          <input
            type="text"
            name="firstName"
            autoComplete="firstName"
            required
            id="firstName"
            placeholder="First Name"
            className={input}
          />
        </div>

        <div className="pb-4">
          <label htmlFor="lastName" className={label}>
            Last name
          </label>
          <input
            placeholder="Last Name"
            type="text"
            id="last-name"
            className={input}
            name="lastName"
            autoComplete="lastName"
            required
          />
        </div>

        <div className="pb-4">
          <label htmlFor="email" className={label}>
            Email
          </label>
          <input
            name="email"
            autoComplete="email"
            required
            type="email"
            id="email"
            placeholder="Email address"
            className={input}
          />
        </div>

        <div className="pb-4">
          <label htmlFor="phoneNumber" className={label}>
            phone (optional)
          </label>
          <input
            autoComplete="phoneNumber"
            type="number"
            placeholder="Phone Number"
            name="phoneNumber"
            id="phoneNumber"
            className={input}
          />
        </div>

        <div className="">
          <h3 className="sm:text-3xl text-xl font-bold leading-10">
            I need the service of
          </h3>
          <div className="mt-2 flex flex-col gap-6 md:flex-row md:items-center ">
            <Checkbox type="checkbox" labelFor="UI/UX" name="UI/UX" />
            <Checkbox type="checkbox" labelFor="Branding" name="Branding" />
            <Checkbox
              type="checkbox"
              labelFor="Development"
              name="Development"
            />
          </div>
        </div>

        <div className="mt-5 flex flex-col pb-4">
          <label className={label} htmlFor="message">
            message
          </label>
          <textarea
            type="number"
            id="description"
            defaultValue=""
            placeholder="Describe your idea"
            className={`${input} resize-none`}
            rows={5}
            cols={20}
          />
        </div>

        <div className="text-end">
          <button type="submit" className="btn-primary mt-3 w-full md:w-auto">
            Send Message
          </button>
        </div>
      </form>
    </Container>
  );
};

export default FormSection;
