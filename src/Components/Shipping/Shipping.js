import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../Hooks/useAuth';
import './Shipping.css'

const Shipping = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user } = useAuth();
    const onSubmit = data => {
        console.log(data)
    };
    return (
        <div>
            <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>

                <input placeholder="Your name" defaultValue={user.displayName} {...register("name")} />
                <input placeholder="Your address"  {...register("adress")} />
                <input placeholder="Your city"  {...register("city")} />
                <input placeholder="Your email" defaultValue={user.email} {...register("email", { required: true })} />
                {errors.email && <span className="error">This field is required</span>}

                <input type="submit" />
            </form>
        </div>
    );
};

export default Shipping;