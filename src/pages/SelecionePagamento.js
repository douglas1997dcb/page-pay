import '../style/StyleSelecionePagamento.css'
import Button from '@mui/material/Button';
import ImgFrente from '../components/ImgFrente'
import ImgCostas from '../components/ImgCostas'
import CreditoDebito from '../components/BotaoCreditoDebito';


export default function FormaDePagamento() {
    return (
        <div className='InfoPessoal'>
            <p className='selecione-pagamento'>SELECIONE O PAGAMENTO</p>
            <p className='cartoes-salvos'>CARTÕES SALVOS</p>

            <div className='Cartoes'>
                <ImgFrente />
                <ImgCostas />
            </div>


            <p className='metodos-pagamento'>OUTROS METODOS DE PAGAMENTOS</p>
            <div className='BotoesMetodos'>
                <CreditoDebito />
                <Button
                    variant="outlined"
                    style={{ width: '260px', height: '40px' }}
                    sx={{
                        color: "black",
                        fontWeight: 'bold',
                        border: '1px solid rgb(201, 201, 201)'
                    }}
                >
                    Internet Bankign
                </Button>
                <Button
                    variant="outlined"
                    style={{ width: '260px', height: '40px' }}
                    sx={{
                        color: "black",
                        fontWeight: 'bold',
                        border: '1px solid rgb(201, 201, 201)'
                    }}
                >
                    UPI
                </Button>
            </div>

        </div>
    )
}