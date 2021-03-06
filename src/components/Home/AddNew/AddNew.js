import React from 'react';
import { useForm } from "react-hook-form";
const AddNew = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = `https://polar-wildwood-53235.herokuapp.com/cars`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
    };
    return (
        <div>
            <div className='w-50 mx-auto'>
            <h2>set new service</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
            <input className='mb-2' placeholder='Name'  {...register("name", { required: true, maxLength: 20 })} />
            <textarea className='mb-2' placeholder='Description'  {...register("description")} />
            <input className='mb-2' placeholder='Price'  type="number" {...register("price")} />
            <input className='mb-2' placeholder='Quantity'  type="number" {...register("quantity")} />
            <input className='mb-2' placeholder='Supplier'  type="text" {...register("supplier")} />
            <input className='mb-2' placeholder='Photo URL'  type="text" {...register("img")} />
            <input type="submit" value="Add Cars" />
            </form>
        </div>
        </div>
    );
};

export default AddNew;