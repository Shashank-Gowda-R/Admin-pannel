import './Header.css';

function Header() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-color">
      <div class="container-fluid">
        <ul class="nav nav-tabs">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Product <i class="fa fa-plus" aria-hidden="true"></i></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="">Category <i class="fa fa-plus" aria-hidden="true"></i></a>
          </li>
          
        </ul>
        <div class="d-flex">
              <input class="form-control me-2 pos-search" type="text" placeholder="Search" />
              <i class="fa fa-search position" aria-hidden="true"></i>
              <i class="fa fa-user-circle fa-2x icon-color" aria-hidden="true"></i>
            </div>
      </div>
    </nav>
  );
}

export default Header;

