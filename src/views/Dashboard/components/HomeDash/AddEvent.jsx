import React from 'react';
import { useForm } from "react-hook-form";
import Typography from '@mui/material/Typography';


const AddEvent = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        alert('Event Submitted');

    }
    return (
        <div className="mt-5">
            <div className="m-auto col-md-8">
                <Typography
                    variant='h2'
                    className='form-headings text-center'
                >
                    Enter Data Of Event Section
                </Typography>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor='title' className='form-label'>Enter Title Of Events </label>
                    <input
                        name='title'
                        id='title'
                        className='form-control'
                        placeholder="Enter title for event"
                        {...register("event", { required: true })}
                        required
                    />

                    <label htmlFor='time' className='form-label'>Enter Time Of Event </label>
                    <input
                        name='time'
                        id='time'
                        placeholder='Please Enter Time Of Events'
                        {...register('time', { required: true })}
                        className='form-control'
                        required
                    />
                    <label htmlFor='location' className='form-label'>Enter The Location of Event  </label>
                    <input
                        name='location'
                        id='location'
                        placeholder='Please Enter Location of Event'
                        {...register('location', { required: true })}
                        className='form-control'
                        required
                    />
                    <label htmlFor='category' className='form-label'>Enter Category  </label>
                    <input
                        name='category'
                        id='category'
                        defaultValue="event"
                        {...register('eventCategory', { required: true })}
                        required
                        className='form-control'
                    />
                    <label htmlFor='event-image' className='form-label'>Enter Image For Event   </label>
                    <input
                        name='event-image'
                        id='event-image'
                        placeholder='Please enter an event image'
                        {...register('eventImg', { required: true })}
                        type='file'
                        className='form-control'
                        required
                    />
                    <label htmlFor='event-description' className='form-label'>Enter description Of Event </label>
                    <textarea
                        name='event-description'
                        id='event-description'
                        placeholder='Enter Description of event'
                        {...register("eventDescription", { required: true })}
                        className='form-control'
                        required
                        rows='3'
                    />

                    <button className='submitBtn '>Submit</button>
                </form>
            </div>

        </div>


    );
};

export default AddEvent;