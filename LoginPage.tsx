import { postSignin } from "../apis/auth"
import { LOCAL_STORAGE_KEY } from "../constants/key"
import useForm from "../hooks/useForm"
import { useLocalStorage } from "../hooks/useLocalStorage"
import validateSignin, { UserSigninInformation } from "../utills/validate"

const LoginPage = () => {
    const {setItem}=useLocalStorage(LOCAL_STORAGE_KEY.accessToken)
    const {values,errors,touched,getInputProps } = useForm<UserSigninInformation>({
        initialValues: {email: "", password: ""},
        validate: validateSignin
    })

    const handleSubmit = async () => {
        try {
            const response = await postSignin(values)
            setItem(response.data.accessToken)
        }catch (error) {
            alert(error?.message)
        }
        console.log(response)
    }

    const isDisabled = 
        Object.values(errors || {}).some((error) => error.length >0) ||
        Object.values(values).some((value)=>value === '')     //에러가 있는지 확인하는 함수
    
    return (
        <div className="flex flex-col items-center justify-center h-full gap-4">
            <div className="flex flex-col gap-3">
                <input
                {...getInputProps("email")}
                type={"emial"} 
                className={`border border-[#ccc] w-[300px] p-[10px] focus:border-[#807bff] ${errors?.email && touched?.email ? 'border-red-500' : 'border-gray-300'}`}
                placeholder={'이메일'}
                />
                {errors?.email && touched?.email && (<div className="text-red">{errors.email}</div>)}
                <input 
                {...getInputProps("password")}
                type={"password"} 
                className={`border border-[#ccc] w-[300px] p-[10px] focus:border-[#807bff] ${errors?.password && touched?.password ? 'border-red-500' : 'border-gray-300'}`}
                placeholder={'비밀번호'}/>
                {errors?.password && touched?.password && (<div className="text-red">{errors.password}</div>)}
                <button type="button" onClick={handleSubmit} disabled={isDisabled} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer disabled:bg-gray-300 disabled:cursor-not-allowed">
                    로그인
                </button>
            </div>
        </div>
    )
}

export default LoginPage


