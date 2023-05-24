import { useParams } from "react-router-dom";

const ProductDescription = () => {
  const { id, name } = useParams()

  return (
    <div>
       Produto: {name} com id: {id}
    </div>
  )
}

export default ProductDescription