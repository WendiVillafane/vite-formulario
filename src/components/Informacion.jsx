import { useForm } from "react-hook-form";
import { useRegFormContext } from "../providers/RegFormProvider";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Informacion = () => {

    const [, dispatch] = useRegFormContext();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch({ type: 'CHANGE_PERCENT', data: 0 })
    }, []);

    const { register, handleSubmit, formState: { isValid } } = useForm();

    const onSubmit = (values) => {
        if (isValid) {
            dispatch({ type: 'SET_COMMON_DATA', data: values });
            navigate('/problema');
   
        }
    }

    return 
}

export default Informacion;