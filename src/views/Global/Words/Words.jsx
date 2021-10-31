import React from 'react';
import ceoImg from '../../../assets/images/ceo.jpg'
import Image from 'next/image';

const Words = () => {
    return (
        <div className='container'  style={{margin:'70px auto'}}>
            <div className="d-flex justify-content-center">
                <div className='col-md-4 me-2 pe-5 ceo-words-image'>
                    <Image src={ceoImg} alt='ignite ceo'/>
                </div>
                <div className='col-md-8 ps-4 mt-4'>
                    <h2 className='headings mb-4'>Words Of <span className='style-font'>CEO</span></h2>
                    <p className='global_description' style={{textIndent:'210px'}}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus eligendi explicabo dolore maiores praesentium aut, quos ullam minus dicta hic unde, natus voluptatem delectus sit fugiat vero eum. Mollitia, neque dolor itaque delectus ducimus nam veniam architecto provident, nihil natus, soluta dicta? Facere et aliquid temporibus! Quae veniam quo, atque, voluptatum ex eum nesciunt tempora illo assumenda asperiores officiis in accusamus doloremque officia porro consequuntur aliquam, culpa aspernatur recusandae quaerat. Numquam temporibus officiis quod, dolore earum tempore id tenetur, iusto a voluptatibus molestiae iste fugiat assumenda qui dignissimos omnis quas ipsam ratione quasi. Dolorum, ipsum, corporis qui totam doloremque optio facilis quam libero facere aut distinctio beatae quae quasi, architecto rem iure inventore soluta officiis. Facilis obcaecati sed eum. Perferendis eveniet incidunt nam saepe! Ipsa, odit. Placeat in, labore quasi nam blanditiis nulla, dolores voluptatum itaque, tempora voluptatibus atque? Dicta fugit tempora adipisci quas saepe soluta. Facere, in quasi voluptas sit assumenda aperiam vitae, ea maxime, consequatur amet dolore autem dignissimos suscipit nulla esse totam tempore sunt laudantium exercitationem cupiditate tenetur magni explicabo at culpa. Dicta earum atque velit, repudiandae adipisci reptur, quia impedit, fugiat natus itaque incidunt odio voluptatum! Assumenda totam sit fugiat at commodi sint accusamus, tenetur culpa sequi accusantium esse itaque veritatis deleniti iure blanditiis hic deserunt. Ea vitae obcaecati velit dicta sint, molestiae labore cum in maxime, rem neque veniam voluptate. Libero non possssimus cum similique maxime dolor, assumenda impedit unde libero ipsam praesentium debitis itaque voluptate provident laudantium deserunt nesciunt animi aspernatur, tempora distinctio! Quisquam nobis perspiciatis doloremque corrupti, quaerat modi dicta laudantium officia, consequatur, consectetur voluptatum reprehenderit minima sapiente quod magni iste ab vitae ipsa! Cum libero quia ipsa explicabo fuga quam distinctio voluptate?
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Words;