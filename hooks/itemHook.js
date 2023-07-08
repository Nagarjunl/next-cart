import { useSelector, useDispatch } from "react-redux"; // updated
import { addItem } from "@/store/slices/itemslice";
import { useState, useEffect } from "react";

const ItemHook = () => {
  const items = useSelector((state) => state.items.items);
  const dispatch = useDispatch();

  let showDiscount = false;

  const [total, setTotal] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  const qtyChange = (e, itemObj) => {
    const quantity = parseInt(e) || 0;
    const id = itemObj.id;
    let cartItem = { ...itemObj };

    if (quantity) {
      cartItem.total = quantity * cartItem.amount;
      cartItem.qty = quantity;
      dispatch(
        addItem(
          items.map((obj) => {
            const { category, items } = { ...obj };
            return {
              category: category,
              items: items.map((item) =>
                item.id === id
                  ? {
                      ...item,
                      total: cartItem.total,
                      qty: cartItem.qty,
                    }
                  : item
              ),
            };
          })
        )
      );
    } else {
      dispatch(
        addItem(
          items.map((obj) => {
            const { category, items } = { ...obj };
            return {
              category: category,
              items: items.map((item) =>
                item.id === id
                  ? {
                      ...item,
                      total: "",
                      qty: "",
                    }
                  : item
              ),
            };
          })
        )
      );
    }
  };

  const removeItemFromCart = (e, itemObj) => {
    const quantity = parseInt(e) || 0;
    const id = itemObj.id;
    let changedItem = { ...itemObj };

    changedItem.total = quantity * changedItem.amount;
    changedItem.qty = quantity;
    dispatch(
      addItem(
        items.map((obj) => {
          const { category, items } = { ...obj };
          return {
            category: category,
            items: items.map((item) =>
              item.id === id
                ? {
                    ...item,
                    total: "",
                    qty: "",
                  }
                : item
            ),
          };
        })
      )
    );
  };

  const cartQtyChange = (e, itemObj) => {
    const quantity = parseInt(e) || 0;
    const id = itemObj.id;
    let changedItem = { ...itemObj };

    changedItem.total = quantity * changedItem.amount;
    changedItem.qty = quantity;
    dispatch(
      addItem(
        items.map((obj) => {
          const { category, items } = { ...obj };
          return {
            category: category,
            items: items.map((item) =>
              item.id === id
                ? {
                    ...item,
                    total: changedItem.total,
                    qty: changedItem.qty,
                  }
                : item
            ),
          };
        })
      )
    );
  };

  useEffect(() => {
    let itemsArray = [];
    items.map((item) => item.items.map((item) => itemsArray.push(item)));
    setCartItems(itemsArray.filter((item) => item.total !== ""));
    setTotal(
      itemsArray.reduce(
        (acc, item) => (item.total === "" ? acc : acc + item.total),
        0
      )
    );
    if (showDiscount) {
      setDiscount(
        itemsArray.reduce(
          (acc, item) =>
            item.actual_amount === ""
              ? acc
              : acc + (item.actual_amount - item.amount) * item.qty,
          0
        )
      );
    }
  }, [setTotal, items, showDiscount]);

  return {
    items,
    total,
    discount,
    cartItems,
    showDiscount,
    qtyChange,
    removeItemFromCart,
    dispatch,
    cartQtyChange,
  };
};

export default ItemHook;
