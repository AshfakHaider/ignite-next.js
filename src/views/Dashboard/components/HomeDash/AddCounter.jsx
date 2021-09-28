import React from 'react';
import { useForm } from "react-hook-form";
import Typography from '@mui/material/Typography';


const AddCounter = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        alert('COUNTEER Submitted');

    }
    return (
        <div className="mt-5">
            <div className="m-auto col-md-8">
                <Typography
                    variant='h2'
                    className='form-headings text-center'
                >
                    Enter Data Of Counter Section
                </Typography>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor='counter-title' className='form-label'>Enter Counter Title</label>
                    <input
                        required
                        name='counter-title'
                        id='counter-title'
                        className='form-control'
                        placeholder="Enter Counter Title"
                        {...register("title", { required: true })} />

                    <label htmlFor='raised-donation' className='form-label'>Please Enter How Much Will the counter count  </label>
                    <input
                        required
                        name='count'
                        id='count'
                        placeholder='Please Enter How Much Will the counter count'
                        {...register('count', { required: true })}
                        className='form-control'
                        type='number'
                    />
                    <label htmlFor='raised-donation' className='form-label'>Please Enter if there is any suffix </label>
                    <input
                        type='text'
                        name='suffix'
                        id='suffix'
                        placeholder='Please Enter suffix '
                        {...register('suffix')}
                        className='form-control'
                    />
                    <label htmlFor='counter-category' className='form-label'>Enter Category  </label>
                    <input
                        name='counter-category'
                        id='counter-category'
                        placeholder='Please enter category'
                        defaultValue="counter"
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

export default AddCounter;