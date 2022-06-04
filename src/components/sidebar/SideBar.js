import Logo from '../../assets/images/logo.svg';
import './SideBar.scss';

const SideBar = () => (
  <aside>
    <div>
      <img src={Logo} alt="logo" />
    </div>
    <div>
      <div>
        <span className="material-symbols-outlined">list</span>
      </div>
      <div>
        <span className="material-symbols-outlined">replay</span>
      </div>
      <div>
        <span className="material-symbols-outlined">insert_chart</span>
      </div>
    </div>
    <div>
      <span className="material-symbols-outlined">shopping_cart</span>
    </div>
  </aside>
);

export default SideBar;
