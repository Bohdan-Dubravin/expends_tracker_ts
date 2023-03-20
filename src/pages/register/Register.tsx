import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "../../common/components/input/Input";
import { authSchema } from "../../utils/validation.schemas";
import Loader from "@/common/components/loader/Loader";
import { authApi } from "@/services/AuthService";
import { AuthFormValues } from "@/types/authInput";
import { useAppDispatch, useAppSelector } from "@/store";
import { authenticate } from "@/store/slices/userSlice";

const Register = () => {
  const navigate = useNavigate();
  const { id } = useAppSelector((state) => state.auth.user);
  if (id) {
    navigate("/dashboard/home");
  }
  const dispatch = useAppDispatch();

  const [registerUser, { isLoading, isError, isSuccess, error }] =
    authApi.useRegisterMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<AuthFormValues>({
    mode: "onTouched",
    resolver: yupResolver(authSchema),
  });

  async function submitLogin(values: AuthFormValues) {
    const response = await registerUser(values);
    console.log(response);
    console.log(error);

    if (!error) {
      //@ts-ignore
      dispatch(authenticate(response.data));
      navigate("/dashboard/home");
    }

    reset();
    // navigate('/home');
  }

  return (
    <div className="flex items-center justify-center bg-orange1 min-h-screen w-full ">
      <form
        className="bg-white p-6 rounded-2xl w-[320px] shadow-2xl border"
        onSubmit={handleSubmit(submitLogin)}
      >
        <h1 className="text-xl text-center text-gray-700 mb-2">Register</h1>
        {isError && (
          // @ts-ignore
          <h2 className="text-center text-red-500 text-xl">
            Error {error?.data.message}
          </h2>
        )}
        <div className="mb-4 ">
          <Input
            label="Email"
            placeholder="yourEmail@gmail.com"
            {...register("email")}
            errorMessage={errors.email?.message}
          />
        </div>
        <div className="mb-4">
          <Input
            label="Password"
            placeholder="Your password"
            {...register("password")}
            errorMessage={errors.password?.message}
          />
        </div>
        <button className="relative block bg-orange3 hover:bg-[rgb(241,154,99)] transition-colors text-white rounded-lg shadow py-2 px-5 w-full">
          {isLoading && <Loader />}
          Sign In
        </button>

        <p className="text-center text-gray-700 text-xs mt-4">
          Don`t have an account? {"   "}
          <Link className="text-orange3 hover:underline" to="/register">
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
