import React from 'react';
import ImagemCamiseta from '../img/camiseta.png'

const ImgCamiseta = () => {
    return (
        <div>
            <img src={ImagemCamiseta} alt="Minha Imagem" width={'80px'} />
        </div>
    );
};

export default ImgCamiseta;