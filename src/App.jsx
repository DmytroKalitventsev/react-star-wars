import './styles/common.scss';

function App() {
	return (
		<div className="wrapper">
			<div className='container'>

				<header className="header">
					<div className="logo">
						<img src="img/logo.png" alt="logo" />
					</div>
					<nav className="menu">
						<ul className="menu__items">
							<li className="menu__item">Home</li>
						</ul>
					</nav>
				</header>

				<main className="main">
					<div className="menu-categories">
						<div className="menu-cards">
							<div className="menu-card">
								<div className="menu-card__img">
									<img src="img/categories/films.jpg" alt="card" />
								</div>
								<div className="menu-card__footer">
									<h2 className="menu-card__title">Films</h2>
								</div>
							</div>
							<div className="menu-card">
								<div className="menu-card__img">
									<img src="img/categories/people.jpg" alt="card" />
								</div>
								<div className="menu-card__footer">
									<h2 className="menu-card__title">Characters</h2>
								</div>
							</div>
							<div className="menu-card">
								<div className="menu-card__img">
									<img src="img/categories/planets.jpg" alt="card" />
								</div>
								<div className="menu-card__footer">
									<h2 className="menu-card__title">Planets</h2>
								</div>
							</div>
							<div className="menu-card">
								<div className="menu-card__img">
									<img src="img/categories/species.jpg" alt="card" />
								</div>
								<div className="menu-card__footer">
									<h2 className="menu-card__title">Species</h2>
								</div>
							</div>
							<div className="menu-card">
								<div className="menu-card__img">
									<img src="img/categories/starships.jpg" alt="card" />
								</div>
								<div className="menu-card__footer">
									<h2 className="menu-card__title">Starships</h2>
								</div>
							</div>
							<div className="menu-card">
								<div className="menu-card__img">
									<img src="img/categories/vehicles.jpg" alt="card" />
								</div>
								<div className="menu-card__footer">
									<h2 className="menu-card__title">Vehicles</h2>
								</div>
							</div>
						</div>
					</div>
				</main>

				<footer className="footer">
					<div className="footer__main-info">
						<div className="follow">
							<h2 className="follow__title">FOLLOW ME:</h2>
							<a className="follow__link" href='https://www.linkedin.com/in/dmytro-kalitventsev-96a885250/' target='blank'>
								<i className="fa-brands fa-linkedin"></i>
								<span>LinkedIn</span>
							</a>
							<a className="follow__link" href='https://github.com/DmytroKalitventsev' target='blank'>
								<i className="fa-brands fa-square-github"></i>
								<span>GitHub</span>
							</a>
						</div>
						<div className="developer">
							DESIGNED AND DEVELOPED BY
							<a href='https://dmytrokalitventsev.github.io/my-portfolio/' target='blank'>DMYTRO KALITVENTSEV</a>
							©2023
						</div>
					</div>
					<div className="footer__copyright">
						Star Wars and all associated names and/or images are copyright Lucasfilm
						Ltd. Images were freely collected from
						<a href='https://starwars.fandom.com/wiki/Main_Page' target='blank'>Wookiepedia.</a>
					</div>
				</footer>

			</div>
		</div>
	);
}

export default App;
