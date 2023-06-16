import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Collapse from '@mui/material/Collapse';
import TextField from '@mui/material/TextField';

import '../style/StyleBotaoCreditoDebito.css'

const CreditoDebito = () => {
    const [expanded, setExpanded] = useState(false);

    const handleButtonClick = () => {
        setExpanded(!expanded);
    };

    /* Cod for card credit */
    const [expiryDate, setExpiryDate] = React.useState('');

    const handleExpiryDateChange = (event) => {
        let value = event.target.value;
        // Remove qualquer caractere que não seja número ou barra
        value = value.replace(/[^0-9/]/g, '');
        // Adiciona uma barra após 2 caracteres
        if (value.length > 2) {
            value = value.slice(0, 2) + '/' + value.slice(2);
        }
        setExpiryDate(value);
    };

    //Código para o número do cartão de crédito
    const [cardNumber, setCardNumber] = React.useState('');

    const handleCardNumberChange = (event) => {
        let value = event.target.value;
        // Remove qualquer caractere que não seja número
        value = value.replace(/\D/g, '');
        // Adiciona espaços a cada 4 dígitos
        value = value.replace(/(\d{4})(?=\d)/g, '$1 ');
        setCardNumber(value);
    };

    //Código para digito verificado do cartão
    const [cvv, setCvv] = React.useState('');

    const handleCvvChange = (event) => {
        let value = event.target.value;
        // Remove qualquer caractere que não seja número
        value = value.replace(/\D/g, '');
        setCvv(value);
    };

    return (
        <div>
            <Button
                variant="outlined"
                style={{ width: '260px' }}
                sx={{
                    color: "black",
                    fontWeight: 'bold',
                    border: '1px solid rgb(201, 201, 201)'
                }}

                onClick={handleButtonClick}>
                {expanded ? 'CRÉDITO/DÉBITO' : 'CRÉDITO/DÉBITO'}
            </Button>

            <Collapse in={expanded}>
                <form>
                    <div className='form-card'>
                        <div className='numero-nome'>
                            <TextField
                                variant="standard"
                                id="standard-basic"
                                label="Número do Cartão"
                                type="text"
                                value={cardNumber}
                                onChange={handleCardNumberChange}
                                placeholder="XXXX XXXX XXXX XXXX"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                inputProps={{
                                    maxLength: 19,
                                }}
                            />
                            <TextField
                                id="standard-basic"
                                label="Nome do Cartão"
                                variant="standard"
                                style={{ marginLeft: '15px' }}

                            />
                            {/* Outros campos do formulário */}

                        </div>
                        <div className='validade-verificador'>
                            <TextField
                                variant="standard"
                                label="Validade do Cartão"
                                id="standard-basic"
                                type="text"
                                value={expiryDate}
                                onChange={handleExpiryDateChange}
                                placeholder="MM/AA"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                inputProps={{
                                    maxLength: 5,
                                }}
                            />
                            <TextField
                                variant="standard"
                                id="standard-basic"
                                label="CVV"
                                type="text"
                                value={cvv}
                                onChange={handleCvvChange}
                                placeholder="123"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                inputProps={{
                                    maxLength: 3,
                                }}
                                style={{ marginLeft: '15px' }}
                            />
                        </div>


                    </div>


                </form>
            </Collapse>
        </div>
    );
};

export default CreditoDebito;
