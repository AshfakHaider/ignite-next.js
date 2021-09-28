import React from 'react';
import { useForm } from "react-hook-form";
import Typography from '@mui/material/Typography';


const AddAchivement = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        alert('Achivement Submitted');

    }
    return (
        <div className="mt-5">
            <div className="m-auto col-md-8">
                <Typography
                    variant='h2'
                    className='form-headings text-center'
                >
                    Enter Image for Achivements Section
                </Typography>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor='featured-img' className='form-label'>Enter Featured Image</label>
                    <input
                        type='file'
                        required
                        name='achivement-img'
                        id='achivement-img'
                        className='form-control'
                        placeholder="Enter achivement Image"
                        {...register("achivementImg", { required: true })}
                    />
                    <label htmlFor='featured-category' className='form-label'>Enter Category  </label>
                    <input
                        name='achivement-category'
                        id='achivement-category'
                        placeholder='Please enter category'
                        defaultValue="achivement"
                        {...register('category', { required: true })}
                        required
                        className='form-control'
                    />

                    <button className='submitBtn '>Submit</button>
                </form>

            </div>
        </div>
);
};

export default AddAchivement;