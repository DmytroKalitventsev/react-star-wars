const MenuCard = ({ data }) => {
  const {title, api} = data;

  return (
    <a className="menu-card" href='#'>
      <div className="menu-card__img">
        <img src={`img/categories/${title}.jpg`} alt="card" />
      </div>
      <div className="menu-card__footer">
        <h2 className="menu-card__title">{title}</h2>
      </div>
    </a>
  );
};

export default MenuCard;