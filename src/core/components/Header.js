import logo from '../../assets/img/logo.png';

const Header = ()=>{
	return (
		<div className="container">
			<div className="header">
				<img src={logo} className="img-responsive" alt="Logo"></img>
			</div>
		</div>
	)
}

export default Header;