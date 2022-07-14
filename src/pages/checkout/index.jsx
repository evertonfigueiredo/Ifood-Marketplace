import Header from "../../components/header";
import Product from "../../components/product/list";
import './styles.css'

const Checkout = () => {
	return (
		<div className="h-100">
			<Header hideCard />
			<div className="container">
				<div className="row">
					<div className="col-6">
						<span className="section-title">Dados de Entrega</span>
						<div className="row mb-3">
							<div className="col-12">
								<input type="text" placeholder="CEP" className="form-control form-control-lg" />
							</div>
						</div>
						<div className="row mb-3">
							<div className="col-5">
								<input type="text" placeholder="Cidade" className="form-control form-control-lg" />
							</div>
							<div className="col-4">
								<input type="text" placeholder="Bairro" className="form-control form-control-lg" />
							</div>
							<div className="col-3">
								<input type="text" placeholder="UF" className="form-control form-control-lg" />
							</div>
						</div>
						<div className="row mb-3">
							<div className="col-9">
								<input type="text" placeholder="Logradouro" className="form-control form-control-lg" />
							</div>
							<div className="col-3">
								<input type="text" placeholder="Nº" className="form-control form-control-lg" />
							</div>
						</div>
						<div className="row mb-1">
							<div className="col-12">
								<input type="text" placeholder="Complemento" className="form-control form-control-lg" />
							</div>
						</div>
						<span className="section-title">Dados de Pagamento</span>
						<div className="row mb-3">
							<div className="col-12">
								<input type="text" placeholder="Número do cartão" className="form-control form-control-lg" />
							</div>
						</div>
						<div className="row mb-3">
							<div className="col-6">
								<input type="text" placeholder="Validade" className="form-control form-control-lg" />
							</div>
							<div className="col-6">
								<input type="text" placeholder="CVV" className="form-control form-control-lg" />
							</div>
						</div>
						<div className="row mb-3">
							<div className="col-6">
								<input type="text" placeholder="Nome do titular" className="form-control form-control-lg" />
							</div>
							<div className="col-6">
								<input type="text" placeholder="CPF / CNPJ do titular" className="form-control form-control-lg" />
							</div>
						</div>

						<div className="row my-4 pt-2 box-checkout">
							<div className="col-12 d-flex justify-content-between align-items-center">
								<b>Total</b>
								<h4>R$ 30,00</h4>
							</div>
							<div className="p-0 col-12 d-grid">
								<button className="btn btn-lg btn-primary">
									Finalizar Compra
								</button>
							</div>
						</div>
					</div>


					<div className="col-6 d-flex justify-content-center">
						<div className="box col mb-4 box-sidebar">
							<h5>Meu Carrinho (5)</h5>
							<div className="row products mt-4">
								{[1, 2, 3, 4, 5, 6, 7, 8, 9].map((p) => (<Product />))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Checkout;