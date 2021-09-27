import { Typography } from '@mui/material';
import React from 'react';
import VisibilitySensor from "react-visibility-sensor";
import CountUp from "react-countup";

const HomeDash = () => {
    return (
        <div className='dashboard-home'>
            <div className='mt-4'>
                <h2 className="headings text-center style-font">
                    Ignite Youth Foundtion
                </h2>
                <div className='d-flex mt-4 justify-content-center text-center'>
                    <div className='mission-box'>
                        <Typography
                            variant='h5'
                            sx={{
                                fontSize: '1.5rem',
                            }}
                        >Students</Typography>
                        <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                            {({ isVisible }) => (
                                <div className='countt' >
                                    {isVisible ?
                                        <CountUp
                                            start={0}
                                            duration={1}
                                            end={75}

                                        /> :
                                        null}
                                </div>
                            )}
                        </VisibilitySensor>

                    </div>
                    <div className='mission-box'>
                        <Typography variant='h5' align='center' >Schools</Typography>
                        <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                            {({ isVisible }) => (
                                <div className='countt' >
                                    {isVisible ?
                                        <CountUp
                                            start={0}
                                            duration={1}
                                            end={1}
                                         
                                        /> :
                                        null}
                                </div>
                            )}
                        </VisibilitySensor>
                    </div>
                    <div className='mission-box'>
                        <Typography variant='h5' align='center' >Projects</Typography>
                        <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                            {({ isVisible }) => (
                                <div className='countt' >
                                    {isVisible ?
                                        <CountUp
                                            start={0}
                                            duration={1}
                                            end={6}
                                      
                                        /> :
                                        null}
                                </div>
                            )}
                        </VisibilitySensor>

                    </div>
                    <div className='mission-box'>
                        <Typography variant='h5' align='center'>Volunteers</Typography>
                        <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                            {({ isVisible }) => (
                                <div className='countt' >
                                    {isVisible ?
                                        <CountUp
                                            start={0}
                                            duration={1}
                                            end={23}
                                        /> :
                                        null}
                                </div>
                            )}
                        </VisibilitySensor>
                    </div>
                </div>
            </div>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas veritatis voluptatum error illum soluta mollitia sed fuga molestiae minima eligendi, sunt, ducimus deserunt vero autem minus pariatur, obcaecati suscipit! Harum sint magni sequi quaerat ut, dignissimos quo veritatis? Impedit, quae necessitatibus, distinctio obcaecati ex inventore iste aperiam minima incidunt, modi fugit accusamus rem libero nisi? Tempore, iusto dolores minus at ex perferendis quibusdam excepturi tenetur culpa ut, atque debitis architecto possimus nihil quidem quis iure recusandae odit cumque quas doloribus assumenda itaque aspernatur quam. Aperiam, dolorem assumenda quam quaerat laboriosam totam aliquid officiis dolore veniam officia! Vitae corrupti omnis, quibusdam reprehenderit eum hic doloribus alias, officia dolore expedita facilis unde iure dicta necessitatibus, nobis ex quam! Nulla, deserunt! Harum ipsum obcaecati, voluptatum temporibus fuga non odio numquam distinctio nesciunt facere omnis odit deleniti culpa eius aliquam, sunt quia! In, ad odit! Asperiores molestias ratione officia inventore aut facilis aperiam sint consectetur rem perferendis fugit doloribus dolorum assumenda voluptas optio veniam laborum magnam error, amet iste. Eum in quis dolorum, vitae corrupti, perspiciatis porro vero provident, eos id odit officiis? Laudantium error autem natus voluptates tenetur illum architecto doloribus, cum qui commodi soluta reiciendis magni! Ratione alias dignissimos unde, quae distinctio cumque minima, accusantium eum ullam nam maiores fugit nemo eos blanditiis, quia assumenda tenetur iure adipisci. Molestiae expedita quos adipisci quasi accusamus consequuntur aspernatur rerum eos esse, a similique impedit quibusdam sunt blanditiis velit vel nemo nam mollitia officiis ex, fugiat et dolor! Itaque corporis eum magni doloremque saepe! Placeat, ex nostrum. Quod veritatis officiis iure sunt fugit, eos dignissimos id. Ab earum fugiat incidunt iste recusandae nemo asperiores molestiae, ducimus ipsam reiciendis, itaque doloribus minima! Possimus eligendi illum exercitationem hic doloremque, nihil aliquam repudiandae quis voluptate quas aliquid dolorum sequi distinctio quidem numquam ipsum quasi pariatur consectetur. Asperiores ratione, unde harum, ea saepe eligendi maxime nihil, repellat laudantium aperiam soluta officia fugit ullam itaque ab cupiditate. Iste, et tenetur repudiandae delectus aperiam earum dignissimos nobis eos error consectetur vel, fuga ipsam at maiores suscipit cumque blanditiis adipisci perferendis, eaque molestias provident quaerat ad! Dolore inventore ipsa quas illo molestiae, doloremque id ut fugiat magnam repudiandae culpa rem ipsum voluptates explicabo provident ipsam? Quidem natus dicta voluptates beatae. Blanditiis labore iusto esse nemo maxime vitae doloremque quia ipsum ullam eligendi tempore rem modi animi, maiores ut ad error alias ipsa expedita eum consectetur est, voluptates dolores! Fuga id consequatur atque?</p>
        </div>
    );
};

export default HomeDash;