//Hooks
import { Link } from "react-router-dom";

import { useGet } from "../../hooks/useGet";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";

// import { useDelete } from "../../hooks/useDelete";
import { useDeleteDocument } from "../../hooks/useDeleteDocument";

import "./Dashboard.sass";

import { FaWindowClose, FaUserEdit } from "react-icons/fa";

//context
import { useAuthValue } from "../../context/AuthContext";
import { useAuthentication } from "../../hooks/useAuthentication";

const Dashboard = () => {
  // const { datas: items, error, loading, deletePosts, itemsFilter } = useGet();

  // const { deletePost } = useDelete();
  const { deleteDocument } = useDeleteDocument("products");

  const { logout } = useAuthentication();

  const { user } = useAuthValue();
  const uid = user.uid;

  const {
    documents: items,
    error,
    loading,
    deletePosts,
  } = useFetchDocuments("products", null, uid);

  const handleDelete = (id, name) => {
    const confirmDelet = confirm(`Deseja realmente excluir ${name}?`);

    if (confirmDelet) {
      deleteDocument(id);
    } else {
      return;
    }
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
        {items && items.length > 0 ? (
          items.map((item, i) => (
            <div key={i} className="card">
              <div className="image">
                <img src={item.image} alt="" />
              </div>
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
                      <Link to={`/product/${item.id}`}>
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
                      onClick={() => handleDelete(item.id, item.name)}
                    >
                      <Link to={"/dashboard"}>Excluir</Link>
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
          ))
        ) : (
          <p className="messages warning">
            Você ainda não tem produtos cadastrados clique em Anunciar para
            começar!
          </p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
