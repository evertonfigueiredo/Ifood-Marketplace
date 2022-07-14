import LogoNormal from '../../assets/logo-blue.png'
import Header from '../../components/header';

const Cadastro = () => {
	return (<div className="container-fluid h-100 bg-primary">
		<Header whiteVersion hideCard/>
		<div className="row">
			<div className='col-6 text-center my-auto'>
				<img src={LogoNormal} className='img-fluid logo-blue' />
			</div>
			<div className='col-6'>
				<div className='box col-8'>
					<h2 className='text-center mb-5'>Falta pouco para você matar sua fome.</h2>
					<input type="text" name="" id="" className="form-control form-control-lg mb-3" placeholder='Nome Completo' />

					<input type="email" name="" id="" className="form-control form-control-lg mb-3" placeholder='E-mail' />

					<input type="text" name="" id="" className="form-control form-control-lg mb-3" placeholder='Telefone' />

					<input type="text" name="" id="" className="form-control form-control-lg mb-3" placeholder='CPF' />
					<div className='d-grid'>
						<button className='btn btn-lg btn-secondary bg-secondary'>
						Finalizar Cadastro
					</button>
					</div>
					
				</div>
			</div>
		</div>

	</div>);
};

export default Cadastro;
