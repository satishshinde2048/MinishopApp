import { SET_PRODUCT } from "../../constant/actionType";


const Setproduct=(products)=>{
return {
  type:SET_PRODUCT,
  payload:products
}
}

export {Setproduct};