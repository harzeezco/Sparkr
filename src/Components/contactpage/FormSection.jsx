import useTheme from "../../Hooks/useTheme";
import Checkbox from "../general/Checkbox";
import Input from "../general/Input";
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
        <Input
          type="text"
          label="firstName"
          name="firstName"
          autoComplete="on"
          required
          placeholder="First Name"
          className={input}
          labelClass={label}
          labelText="First Name"
        />

        <Input
          placeholder="Last Name"
          label="lastName"
          type="text"
          className={input}
          name="lastName"
          autoComplete="on"
          required
          labelClass={label}
          labelText="Last Name"
        />

        <Input
          name="email"
          autoComplete="email"
          required
          type="email"
          placeholder="Email address"
          className={input}
          labelClass={label}
          labelText="Email address"
          label="email"
        />

        <Input
          autoComplete="tel"
          type="tel"
          placeholder="Phone Number"
          name="phone"
          className={input}
          labelClass={label}
          labelText="Phone Number (Optional)"
          label="phone"
        />

        <div className="">
          <h3
            className={`text-xl font-bold leading-10 sm:text-3xl text-${theme} theme-transition`}
          >
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
