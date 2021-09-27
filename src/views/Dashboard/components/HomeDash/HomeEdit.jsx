import React from 'react';
import { useForm } from "react-hook-form";
import Typography from '@mui/material/Typography';


const HomeEdit = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data.heading)
        console.log(data);
        alert('Form Submitted');

    }


    return (
        <div className='homeEdit mt-4'>
            <div className="m-auto col-md-8">
                <Typography
                    variant='h2'
                    className='form-headings text-center'
                >
                    Enter/Edit Data Of Causes Section
                </Typography>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor='cause-heading' className='form-label'>Enter Headings Of Card </label>
                    <input
                        name='cause-heading'
                        id='cause-heading'
                        className='form-control'
                        placeholder="Enter heading for cause card"
                        {...register("heading", { required: true })} />

                    <label htmlFor='raised-donation' className='form-label'>Enter How much Donation has been raised  </label>
                    <input
                        name='raised-donation'
                        id='raised-donation'
                        placeholder='Please Enter How Much Donation has been raised'
                        {...register('raised', { required: true })}
                        className='form-control'
                        type='number'
                    />
                    <label htmlFor='goal-donation' className='form-label'>Enter How much Donation has been raised  </label>
                    <input
                        name='goal-donation'
                        id='goal-donation'
                        placeholder='Please Enter How Much Donation Is Our Goal'
                        {...register('goal', { required: true })}
                        className='form-control'
                        type='number'
                    />
                    <label htmlFor='cause-category' className='form-label'>Enter Category  </label>
                    <input
                        name='cause-category'
                        id='cause-category'
                        placeholder='Please enter category'
                        defaultValue="Cause"
                        {...register('category', { required: true })}

                        className='form-control'
                    />
                    <label htmlFor='cause-image' className='form-label'>Enter Category  </label>
                    <input
                        name='cause-image'
                        id='cause-image'
                        placeholder='Please enter an image'
                        defaultValue="Cause"
                        {...register('image', { required: true })}
                        type='file'
                        className='form-control'
                    />
                    <label htmlFor='cause-description' className='form-label'>Enter description Of Card </label>
                    <textarea
                        name='cause-description'
                        id='cause-description'
                        placeholder='Enter Description for cause card'
                        {...register("description", { required: true })}
                        className='form-control'
                        rows='3'
                    />
                    {errors.exampleRequired && <span>This field is required</span>}

                    <button className='submitBtn '>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default HomeEdit;