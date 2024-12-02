import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";
import { signupSchema } from "../../utils/formValidation";
import { z } from "zod";

const schema = signupSchema;

type FormData = z.infer<typeof schema>;

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit: SubmitHandler<FormData> = async (formData) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(formData);
  };

  return (
    <form
      className="mt-8 mb-2 w-full"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <div className="mb-4 flex flex-col gap-6">
        <div>
          <label className="block mb-2 text-md text-bold text-gray-900">
            Username
          </label>
          <input
            {...register("username")}
            type="text"
            className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
            placeholder="Your Username"
          />
          {errors.username && (
            <p className="text-red-700 mt-1 error-message">
              {errors.username.message}
            </p>
          )}
        </div>
        <div>
          <label className="block mb-2 text-md text-bold text-gray-900">
            Email
          </label>
          <input
            {...register("email")}
            type="email"
            className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
            placeholder="Your Email"
          />
          {errors.email && (
            <p className="text-red-700 mt-1">{errors.email.message}</p>
          )}
        </div>
        <div>
          <label className="block mb-2 text-md text-bold text-gray-900">
            Password
          </label>
          <input
            {...register("password")}
            type="password"
            className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
            placeholder="Your Password"
          />
          {errors.password && (
            <p className="text-red-700 mt-1">{errors.password.message}</p>
          )}
        </div>
        <div>
          <label className="block mb-2 text-md text-bold text-gray-900">
            Confirm Password
          </label>
          <input
            {...register("confirmPassword")}
            type="password"
            className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
            placeholder="Confirm Password"
          />
          {errors.confirmPassword && (
            <p className="text-red-700 mt-1">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>
      </div>
      <button
        className="mt-4 w-full text-white bg-gradient-to-r from-green-500 via-green-600 to-green-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 shadow-lg shadow-green-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Signing Up..." : "Sign up"}
      </button>
      <p className="flex justify-center mt-6 text-sm text-slate-600">
        Already have an account?
        <Link
          to="/login"
          className="ml-1 text-sm font-semibold text-blue-700 underline"
        >
          Login
        </Link>
      </p>
    </form>
  );
};

export default SignupForm;