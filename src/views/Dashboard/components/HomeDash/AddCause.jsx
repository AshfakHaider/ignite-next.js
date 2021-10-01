import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import Typography from '@mui/material/Typography';
import axios from 'axios';

const AddCause = () => {
    const { register, handleSubmit } = useForm();
    const [imgUrl, setImgUrl] = useState(null);

    const onSubmit = data => {
        let eventData = {
            heading: data.heading,
            description: data.description,
            raised: data.raised,
            goal: data.goal,
            image: imgUrl,
            category: data.category,
        }
       

        const frm = document.getElementsByName('cause-form')[0];
        const url = 'http://localhost:5000/addCause';
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
            .then(res =>{
                // frm.submit();
                // frm.reset();
                window.location.reload();
            })
           

    }
   
    const handleImgUpload = (e) => {
        const image = e.target.files[0];
        const imageData = new FormData();
        imageData.set('key', '0ad6173cd5aeb795e482f44abb146bbe');
        imageData.append('image', image);
        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(res => {
                setImgUrl(res.data.data.display_url);
            })

            .catch((err) => {
                console.log(err);
            })


    }

    return (
        <div className="m-auto col-md-8">
            <Typography
                variant='h2'
                className='form-headings text-center'
            >
                Enter Data Of Causes Section
            </Typography>
            <form name="cause-form" onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor='cause-heading' className='form-label'>Enter Headings Of Card </label>
                <input
                    name='cause-heading'
                    id='cause-heading'
                    className='form-control'
                    placeholder="Enter heading for cause card"
                    {...register("heading", { required: true })}
                    required
                />
                <label htmlFor='cause-image' className='form-label'>Enter Image For Cause Card  </label>
                <input
                    name='cause-image'
                    id='cause-image'
                    placeholder='Please enter an image'
                    defaultValue="cause"
                    type='file'
                    className='form-control'
                    required
                    onChange={handleImgUpload}
                />
                <label htmlFor='raised-donation' className='form-label'>Enter How much Donation has been raised  </label>
                <input
                    name='raised-donation'
                    id='raised-donation'
                    placeholder='Please Enter How Much Donation has been raised'
                    {...register('raised', { required: true })}
                    className='form-control'
                    type='number'
                    required
                />

                <label htmlFor='goal-donation' className='form-label'>Enter How much Donation has been raised  </label>
                <input
                    name='goal-donation'
                    id='goal-donation'
                    placeholder='Please Enter How Much Donation Is Our Goal'
                    {...register('goal', { required: true })}
                    className='form-control'
                    type='number'
                    required
                />
                <label htmlFor='cause-category' className='form-label'>Enter Category  </label>
                <input
                    name='cause-category'
                    id='cause-category'
                    placeholder='Please enter category'
                    defaultValue="cause"
                    {...register('category', { required: true })}
                    required
                    className='form-control'
                />

                <label htmlFor='cause-description' className='form-label'>Enter description Of Card </label>
                <textarea
                    name='cause-description'
                    id='cause-description'
                    placeholder='Enter Description for cause card'
                    {...register("description", { required: true })}
                    className='form-control'
                    required
                    rows='3'
                />

                <button className='submitBtn' id = 'submitButton'>Submit</button>
            </form>
        </div>
    );
};

export default AddCause;