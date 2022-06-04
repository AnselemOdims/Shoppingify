import Logo from '../../assets/images/logo.svg';
import './SideBar.scss';

const SideBar = () => (
  <aside>
    <div>
      <img src={Logo} alt="logo" />
    </div>
    <nav>
      <ul>
        <li>
          <span className="material-symbols-outlined">list</span>
        </li>
        <li>
          <span className="material-symbols-outlined">replay</span>
        </li>
        <li>
          <span className="material-symbols-outlined">insert_chart</span>
        </li>
      </ul>
    </nav>
    <div>
      <span className="material-symbols-outlined">shopping_cart</span>
    </div>
  </aside>
);

export default SideBar;
