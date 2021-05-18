import logo from '../../assets/img/logo.png';

const Header = ()=>{
	return (
		<header className="header">
			<div className="container">
				<img src={logo} className="img-responsive" alt="Logo"></img>
			</div>
		</header>
	)
}

export default Header;