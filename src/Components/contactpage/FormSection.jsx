import { useForm, Controller } from "react-hook-form";
import useTheme from "../../Hooks/useTheme";
import Checkbox from "../general/Checkbox";
import Input from "../general/Input";
import Container from "../layouts/Container";
import FormError from "../general/FormError";
import { useEffect } from "react";

const FormSection = () => {
  const { theme } = useTheme();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      work: {
        "UI/UX": "",
        Branding: "",
        development: "",
      },
    },
  });

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  const isNameValid = (name) => {
    // Check if the name consists of only alphabetic characters
    if (!/^[A-Za-z\s'-À-ÖØ-öø-ÿ]+$/.test(name)) {
      return false;
    }

    // Check if the name doesn't consist of only spaces or hyphens
    if (/^[\s'-]+$/.test(name)) {
      return false;
    }

    return true;
  };

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  const onError = (data) => {
    console.log(data);
  };

  const isLight =
    theme === "light" ? "border-colorDarkLight" : "border-colorLight";

  const input = `w-full rounded-sm border bg-inherit p-2 ${isLight} theme-transition border-solid outline-none focus:border-orangePrimary active:border-orangePrimary mt-2`;
  const label = `text-lg font-medium capitalize leading-7 text-${theme} theme-transition`;

  return (
    <Container id="form">
      <form
        className="m-auto max-w-full sm:max-w-[60%]"
        onSubmit={handleSubmit(onSubmit, onError)}
      >
        <>
          <Controller
            name="firstName"
            control={control}
            rules={{
              required: "First Name is required",
              validate: (value) => isNameValid(value) || "Invalid First Name",
            }}
            render={({ field }) => (
              <Input
                {...field}
                type="text"
                label="firstName"
                name="firstName"
                autoComplete="on"
                placeholder="First Name"
                className={input}
                labelClass={label}
                labelText="First Name"
              />
            )}
          />
          <FormError error={errors.firstName?.message} />
        </>

        <>
          <Controller
            name="lastName"
            control={control}
            rules={{
              required: "Last Name is required",
              validate: (value) => isNameValid(value) || "Invalid Last Name",
            }}
            render={({ field }) => (
              <Input
                placeholder="Last Name"
                label="lastName"
                type="text"
                className={input}
                name="lastName"
                autoComplete="on"
                labelClass={label}
                labelText="Last Name"
                {...field}
              />
            )}
          />
          <FormError error={errors.lastName?.message} />
          
        </>

        <Controller
          name="email"
          control={control}
          rules={{
            required: "Email address is required",
            pattern: {
              value:
                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              message: "Invalid email format",
            },
          }}
          render={({ field }) => (
            <>
              <Input
                {...field}
                name="email"
                autoComplete="email"
                type="email"
                placeholder="Email address"
                className={input}
                labelClass={label}
                labelText="Email address"
                label="email"
              />
              <FormError error={errors.email?.message} />
            </>
          )}
        />
        <Controller
          name="phoneNumber"
          control={control}
          defaultValue=""
          rules={{
            pattern: {
              value:
                /^(?:\(\d{3}\)|\d{3})(?:-|\s)?\d{3}(?:-|\s)?\d{4}$|^\d{11}$/,
              message: "Invalid phone number format",
            },
          }}
          render={({ field }) => (
            <>
              <Input
                {...field}
                autoComplete="tel"
                type="tel"
                placeholder="Phone Number"
                name="phone"
                className={input}
                labelClass={label}
                labelText="Phone Number (Optional)"
                label="phone"
              />
              {errors.phoneNumber && (
                <FormError error={errors.phoneNumber?.message} />
              )}
            </>
          )}
        />

        <div className="">
          <h3
            className={`text-xl font-bold leading-10 sm:text-3xl text-${theme} theme-transition`}
          >
            I need the service of
          </h3>
          <div className="mt-2 flex flex-col gap-6 md:flex-row md:items-center ">
            <Checkbox
              type="checkbox"
              labelFor="UI/UX"
              name="UI/UX"
              {...register("work.UI/UX")}
            />
            <Checkbox
              type="checkbox"
              labelFor="Branding"
              name="Branding"
              {...register("work.Branding")}
            />
            <Checkbox
              type="checkbox"
              labelFor="development"
              name="development"
              {...register("work.development")}
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
            {...register("textArea")}
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
