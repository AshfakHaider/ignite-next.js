import React from 'react';
import { Carousel, CarouselItem } from 'react-bootstrap'
import Image from 'next/Image'

// importing images
import slider1 from '../../../../assets/images/vol-slide-small.png';
import slider2 from '../../../../assets/images/shabolombi-slide.jpg';


const Hero = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <Image
                        className="d-block w-100"
                        src={slider1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h4 className='minimal-heading' >DONATE HERE</h4>
                        <h2 className='main-heading' >Help poor people life <br />and Their <span className='style-font'>Formation</span></h2>
                        <button className='donatebtn'>Donate Now</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image
                        className="d-block w-100"
                        src={slider2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h4 className='minimal-heading' >DONATE HERE</h4>
                        <h2 className='main-heading' >Help poor people life <br />and Their <span className='style-font'>Formation</span></h2>
                        <button className='donatebtn'>Donate Now</button>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image
                        className="d-block w-100"
                        src={slider1}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h4 className='minimal-heading' >DONATE HERE</h4>
                        <h2 className='main-heading'>Help poor people life <br />and Their <span className='style-font'>Formation</span></h2>
                        <button className='donatebtn'>Donate Now</button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil, distinctio perferendis? Quo quia fugiat aspernatur illum autem tempore maiores repudiandae, itaque distinctio molestiae expedita fuga adipisci magnam fugit corporis et, dolor veritatis. Quasi rem dolores fugit nihil corrupti aut quidem, ipsum cumque culpa error, deleniti dolore voluptas laudantium quam inventore natus at magni molestiae iste est ad deserunt. Numquam quaerat qui, ipsam eligendi incidunt sed similique omnis rerum repellat minus mollitia perferendis fugiat voluptates assumenda soluta, hic ea? Molestias, expedita accusamus quidem unde consectetur eligendi quia ducimus. Repellat illum veritatis fugit minus tempore tenetur non consequatur ut labore rerum nisi eaque praesentium sint dicta fugiat optio, quibusdam fuga similique nam doloremque. Quos, quae minima accusantium tenetur, quo porro harum repellendus numquam perferendis voluptatibus possimus illo, illum aliquam. Qui eaque dolores veritatis dolore minus adipisci omnis natus! Minus eaque voluptatum debitis quos deserunt obcaecati explicabo accusamus optio, dignissimos consequuntur enim officiis eius illo ullam maiores neque harum in doloremque. Voluptas odio et excepturi! Ea itaque possimus laboriosam non explicabo sapiente illum eum ex? Quo consectetur ducimus labore et nemo excepturi in, reiciendis, impedit veritatis deserunt saepe laudantium optio ullam pariatur fugiat porro eos tempore recusandae nam rem architecto quisquam. Tenetur quia aut eligendi facilis! Nisi, sunt cumque. Expedita dolore fugiat vel cumque labore culpa consequuntur, incidunt iure accusamus nihil ipsum totam alias. Natus fugit, cupiditate eos minus eaque sapiente facilis sed repudiandae ipsum nobis ipsam neque unde nesciunt ab mollitia exercitationem itaque sit culpa facere? Obcaecati aut explicabo iure commodi incidunt magnam a ratione nihil nam velit ut perspiciatis nisi rem quasi sed cumque molestias veniam laboriosam consequuntur deserunt, quod tempore! Quos optio, harum in reprehenderit, ullam architecto ipsam sapiente officia corrupti ea necessitatibus et placeat sed ipsum eius mollitia ad omnis beatae magnam doloremque saepe quam impedit autem. Sit sequi vitae dolore atque laboriosam autem itaque ducimus amet sint voluptas dolorum omnis dignissimos minima, aperiam quam adipisci est ut dolores commodi! Quos accusantium saepe magni dolores perferendis iusto aperiam illum. Illo nam pariatur velit eius, exercitationem recusandae excepturi tempora ut reprehenderit rem, maiores ab impedit, veritatis ratione consequatur? Ad quas recusandae qui nemo nulla? Rerum dolore dolorem non nihil ipsum adipisci fugit commodi ex veritatis alias, repellendus necessitatibus praesentium ratione, cumque dolores fugiat eum labore corrupti sit, enim maiores aspernatur laboriosam? Eaque ea, vitae voluptatibus eius tempora cum quos. Nam temporibus laborum aliquam enim ut reiciendis dignissimos facilis, quia impedit modi, excepturi explicabo voluptatem est natus nisi deserunt incidunt eligendi vitae perspiciatis laboriosam! Nemo labore nobis quas dolorem sapiente natus totam facere enim unde similique molestiae tenetur ipsam commodi, placeat pariatur vero veritatis reiciendis assumenda! Quis esse natus optio placeat nisi quisquam harum iusto sunt vero, obcaecati reprehenderit pariatur ipsa id dicta! Aliquid eveniet minima rem, reiciendis quasi repellat magni ea consequatur aspernatur maxime, ducimus optio fuga nobis, voluptates vero explicabo eaque facilis exercitationem labore. Similique officiis odit consequuntur velit doloremque, quod at ut perspiciatis quibusdam aliquam fugiat, ex fugit repellat qui. Voluptatum optio architecto doloribus et, laudantium veniam molestiae?
            </p>
        </div>
    );
};

export default Hero;