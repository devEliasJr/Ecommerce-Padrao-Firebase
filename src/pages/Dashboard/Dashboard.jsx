import { Link } from "react-router-dom";
import { useGet } from "../../hooks/useGet";
import { useDelete } from "../../hooks/useDelete";

import "./Dashboard.sass";

import { FaWindowClose, FaUserEdit } from "react-icons/fa";

//context
import { useAuthValue } from "../../context/AuthContext";
import { useAuthentication } from "../../hooks/useAuthentication";

const Dashboard = () => {
  const { datas: items, error, loading, deletePosts, itemsFilter } = useGet();

  const { deletePost } = useDelete();
  const { user } = useAuthValue();
  const { logout } = useAuthentication();

  const handleDelete = (id) => {
    deletePost(id);
    itemsFilter(items.filter((item) => item.id !== id));
  };

  return (
    <div className="container">
      <h1 className="page-title">Meus Produtos</h1>
      <div className="container-sub">
        <p className="gerenciar">Gerencie seus anuncios</p>
        <Link className="anunciar" to={"/product-register"}>
          Anunciar
        </Link>
      </div>

      <div className="container-items">
        {items.map((item, i) => (
          <div key={i} className="card">
            <img src="https://placehold.co/400" alt="" />
            <div className="card-body">
              <div className="content-info">
                <div className="name">
                  <span>{item.name}</span>
                </div>
                <div className="description">
                  <span>{item.description}</span>
                </div>
              </div>
              <div className="content-misc">
                <div className="options">
                  <span className="edit" onClick={() => {}}>
                    <Link to={`/product-edit/${item.id}`}>
                      <span>Ver</span>
                    </Link>
                  </span>
                  <span className="edit" onClick={() => {}}>
                    <Link to={`/product-edit/${item.id}`}>
                      <span>Editar</span>
                    </Link>
                  </span>
                  <span
                    className="close"
                    onClick={() => {
                      handleDelete(item.id);
                    }}
                  >
                    <Link to={"/about"}>Excluir</Link>
                  </span>
                </div>
                <div className="price">
                  <span>R${item.price}</span>
                </div>
                <div className="stock">
                  <p>Promoção: Não</p>
                  <p>Estoque: 5 unidades</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
