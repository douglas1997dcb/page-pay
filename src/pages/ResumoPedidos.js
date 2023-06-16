import React from 'react';
import ImgTenis from '../components/ImgTenis';
import ImgRelogio from '../components/ImgRelogio';
import ImgCamiseta from '../components/ImgCamiseta';
import ImgOculos from '../components/ImgOculos';

import '../style/StyleResumoPedidos.css'
import { HiChevronDown } from "react-icons/hi";

export default function ResumoPedidos() {
    return (
        <div className='container-resumo-compras'>
            <h2>RESUMO DE COMPRAS</h2>

            <div className='item'>
                <div className='img-produto'> <ImgTenis /> </div>
                <div className='descricao-produto'>
                    <p className='produto'> Tênis Mizuno Wave Titan 2 - Preto </p>
                    <p className='modelo-produto'>Têxtil e Sintético</p>
                    <p className='quantidade'>Quantidade - 01</p>
                    <p className='preco'>R$ 1.500,00</p>
                </div>

            </div>
            <div className='item'>
                <div className='img-produto'> <ImgRelogio /> </div>
                <div className='descricao-produto'>
                    <p className='produto'>Relogio Inteligente Smartwatch</p>
                    <p className='modelo-produto'>Smart Bracelet D20</p>
                    <p className='quantidade'>Quantidade - 01</p>
                    <p className='preco'>R$ 2.399,00</p>
                </div>

            </div>
            <div className='item'>
                <div className='img-produto'> <ImgCamiseta /> </div>
                <div className='descricao-produto'>
                    <p className='produto'>Camiseta Masculina Dry</p>
                    <p className='modelo-produto'>Camisa - Preto</p>
                    <p className='quantidade'>Quantidade - 02</p>
                    <p className='preco'>R$ 799,00</p>
                </div>

            </div>
            <div className='item'>
                <div className='img-produto'> <ImgOculos /> </div>
                <div className='descricao-produto'>
                    <p className='produto'>Oculos de Sol Esportivo Bike</p>
                    <p className='modelo-produto'>Proteção 100% Uv 400nm</p>
                    <p className='quantidade'>Quantidade - 01</p>
                    <p className='preco'>R$ 1.800,00</p>
                </div>

            </div>

            <div className='comprovante'>
                <p>Tem um comprovante? <HiChevronDown /> </p>
            </div>
            <div className='subtotal'>
                <p>Sub-total <strong>R$ 6.496,00</strong></p>
                <p>Frete <strong>Gratis</strong></p>
            </div>
            <div className='total'>Total <strong>R$ 6.496,00</strong></div>

        </div>
    )
}