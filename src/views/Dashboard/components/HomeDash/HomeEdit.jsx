import React from 'react';
import { useForm } from "react-hook-form";
import Typography from '@mui/material/Typography';


const HomeEdit = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const {
        register: register1,
        handleSubmit: handleSubmit1,
    } = useForm();

    const {
        register: register2,
        handleSubmit: handleSubmit2,
    } = useForm();
    const {
        register: register3,
        handleSubmit: handleSubmit3,
    } = useForm();


    const onSubmit = data => {
        console.log(data);
        alert('Form Submitted');

    }

    const onSubmit1 = data => {
        console.log(data.title)
        console.log(data);
        alert('Form 2 Submitted');

    }
    const onSubmit2 = data => {
        
        console.log(data);
        alert('Form 3 Submitted');

    }
    const onSubmit3 = data => {
        
        console.log(data);
        alert('Form 4 Submitted');

    }


    return (
        <div className='homeEdit mt-4'>
            <div className="m-auto col-md-8">
                <Typography
                    variant='h2'
                    className='form-headings text-center'
                >
                    Enter Data Of Causes Section
                </Typography>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor='cause-heading' className='form-label'>Enter Headings Of Card </label>
                    <input
                        name='cause-heading'
                        id='cause-heading'
                        className='form-control'
                        placeholder="Enter heading for cause card"
                        {...register("heading", { required: true })}
                        required
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
                        defaultValue="Cause"
                        {...register('category', { required: true })}
                        required
                        className='form-control'
                    />
                    <label htmlFor='cause-image' className='form-label'>Enter Image For Cause Card  </label>
                    <input
                        name='cause-image'
                        id='cause-image'
                        placeholder='Please enter an image'
                        defaultValue="cause"
                        {...register('image', { required: true })}
                        type='file'
                        className='form-control'
                        required
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

                    <button className='submitBtn '>Submit</button>
                </form>
            </div>






            {/* cause section ended */}

            {/* counter staart */}


            <div className="mt-4">
                <div className="m-auto col-md-8">
                    <Typography
                        variant='h2'
                        className='form-headings text-center'
                    >
                        Enter Data Of Counter Section
                    </Typography>
                    <form onSubmit={handleSubmit1(onSubmit1)}>
                        <label htmlFor='counter-title' className='form-label'>Enter Counter Title</label>
                        <input
                            required
                            name='counter-title'
                            id='counter-title'
                            className='form-control'
                            placeholder="Enter Counter Title"
                            {...register1("title", { required: true })} />

                        <label htmlFor='raised-donation' className='form-label'>Please Enter How Much Will the counter count  </label>
                        <input
                            required
                            name='count'
                            id='count'
                            placeholder='Please Enter How Much Will the counter count'
                            {...register1('count', { required: true })}
                            className='form-control'
                            type='number'
                        />
                        <label htmlFor='raised-donation' className='form-label'>Please Enter if there is any suffix </label>
                        <input
                            type='text'
                            name='suffix'
                            id='suffix'
                            placeholder='Please Enter suffix '
                            {...register1('suffix')}
                            className='form-control'
                        />
                        <label htmlFor='counter-category' className='form-label'>Enter Category  </label>
                        <input
                            name='counter-category'
                            id='counter-category'
                            placeholder='Please enter category'
                            defaultValue="counter"
                            {...register1('category', { required: true })}
                            required
                            className='form-control'
                        />



                        <button className='submitBtn '>Submit</button>
                    </form>
                </div>
            </div>

            {/* counteer section ended */}

            {/* featured start */}

            <div className="mt-5">
                <div className="m-auto col-md-8">
                    <Typography
                        variant='h2'
                        className='form-headings text-center'
                    >
                        Enter Image for Featured Section
                    </Typography>
                    <form onSubmit={handleSubmit2(onSubmit2)}>
                        <label htmlFor='featured-img' className='form-label'>Enter Featured Image</label>
                        <input
                            type='file'
                            required
                            name='featured-img'
                            id='featured-img'
                            className='form-control'
                            placeholder="Enter Featured Image"
                            {...register2("featuredImg", { required: true })}
                        />
                        <label htmlFor='featured-category' className='form-label'>Enter Category  </label>
                        <input
                            name='featured-category'
                            id='featured-category'
                            placeholder='Please enter category'
                            defaultValue="featured"
                            {...register2('category', { required: true })}
                            required
                            className='form-control'
                        />

                        <button className='submitBtn '>Submit</button>
                    </form>

                </div>
            </div>



            {/* featured end */}



            {/* achivement start*/}
            <div className="mt-5">
                <div className="m-auto col-md-8">
                    <Typography
                        variant='h2'
                        className='form-headings text-center'
                    >
                        Enter Image for Achivements Section
                    </Typography>
                    <form onSubmit={handleSubmit3(onSubmit3)}>
                        <label htmlFor='featured-img' className='form-label'>Enter Featured Image</label>
                        <input
                            type='file'
                            required
                            name='achivement-img'
                            id='achivement-img'
                            className='form-control'
                            placeholder="Enter achivement Image"
                            {...register3("achivementImg", { required: true })}
                        />
                        <label htmlFor='featured-category' className='form-label'>Enter Category  </label>
                        <input
                            name='achivement-category'
                            id='achivement-category'
                            placeholder='Please enter category'
                            defaultValue="achivement"
                            {...register3('category', { required: true })}
                            required
                            className='form-control'
                        />

                        <button className='submitBtn '>Submit</button>
                    </form>

                </div>


            </div>



        </div>
    );
};

export default HomeEdit;