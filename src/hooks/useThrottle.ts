import { useEffect, useRef, useState } from "react";

function useThrottle<T>(value:T, delay:number):T {
    const [throttleValue, setThrottleValue] = useState<T>(value)

    const lastExecutionTime = useRef<number>(Date.now())

    useEffect(()=>{
        //현재 시간과 lastExecutionTime.current에 시간 + dealy비교
        //충분한 시간이 지나면 업데이트
        if(Date.now() >= lastExecutionTime.current + delay){
            //현재 시간이 지난 경우 현재 시간으로 lastExecutionTime.current를 업데이트
            lastExecutionTime.current = Date.now()
            setThrottleValue(value)
        }
        else{
            //충분한 시간이 지나지 않은 경우 dealy시간 후에 업데이트
            const time = setTimeout(()=>{
                lastExecutionTime.current=Date.now()
                setThrottleValue(value)
            },delay)

            //클린업 함수
            return () => clearTimeout(time)
        }
    },[value,delay])

    return throttleValue
}

export default useThrottle