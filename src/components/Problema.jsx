import { useForm } from "react-hook-form";
import { useRegFormContext } from "../providers/RegFormProvider";
import { useEffect } from "react";

const Problema = () => {

    const [, dispatch] = useRegFormContext();

    useEffect(() => {
        dispatch({ type: 'CHANGE_PERCENT', data: 85 })
    }, []);

}

export default Problema;
