import { useDispatch } from "react-redux"; 
import { addItem } from "../../store/Modules/cartSlice";
const ItemCardList = ({ items }) => {
  
  const dispatch  = useDispatch()

  const handleAddItem = (item) => {
    //dispatch an action 
    dispatch(addItem(item))
  }
  return (
    <div>
      {items.map((item) => (
        <div className="" key={item.card.info.id}>
          <div className="flex justify-between pt-[14px]">
            <div className="text-start">
              <h1 className="mt-[14px] font-medium">{item.card.info.name}</h1>
              <h2 className="mt-[4px] text-sm font-semibold">
                ₹{" "}
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </h2>
              <p className="w-[100%] mt-[14px] text-[1rem] text-gray-500 leading-[1.3] tracking-[-0.3px]">
                {item.card.info.description}
              </p>
            </div>
            <div className="relative ml-[16px] min-w-[118px] h-[120px]">
              {item.card.info.imageId ? (
                <img
                  className="res-logo rounded-sm h-[96px] w-[118px]"
                  alt="res-logo"
                  src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${item.card.info.imageId}`}
                />
              ) : (
                ""
              )}
              <div className="absolute border  shadow-md rounded-sm align-middle styles_itemAddButton__zJ7-R z-10 bottom-[8px] bg-white w-[96px] h-[36px]">
                <button className="text-green-500 align-middle" onClick={() => handleAddItem(item)}>Add + </button>
              </div>
            </div>
          </div>
          <div className="border border-b border-gray-300 my-[20px] h-[0.5px]"></div>
        </div>
      ))}
    </div>
  );
};

export default ItemCardList;
