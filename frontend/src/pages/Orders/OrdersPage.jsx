import { MainNav } from "@/components/MainNav";

import { DataTable } from "./components/DataTable";
import { Columns } from "./components/Columns";
import { UserNav } from "./components/UserNav";
import { navigationLinks } from "../../config/navigationLinks";
import { useState } from "react";
import { useEffect } from "react";

export const OrdersPage = () => {
  const [ordersData, setOrdersData] = useState([]);
  const [productsData, setProductsData] = useState([]);

  const fetchOrdersData = () => {
    fetch("http://127.0.0.1:8000/orders")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setOrdersData(data);
      });
  };

  const fetchProductsData = () => {
    fetch("http://127.0.0.1:8000/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProductsData(data);
      });
  };

  useEffect(() => {
    fetchOrdersData();
    fetchProductsData();
  }, []);

  return (
    <div className="hidden flex-col md:flex">
      <div className="border-b">
        <div className="flex h-16 items-center px-4">
          <MainNav className="mx-6" links={navigationLinks} />
          <div className="ml-auto flex items-center space-x-4">
            <UserNav />
          </div>
        </div>
      </div>
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Orders</h2>
        </div>
        <div className="hidden h-full flex-1 flex-col space-y-8 md:flex">
        <ul>
          <li>
            <p>
              <strong>Customer ID</strong>
            </p>
            <p>
              <strong>Order ID</strong>
            </p>
            <p>
              <strong>Ordered Products</strong>
            </p>
          </li>
            {ordersData.map((item) => (
              <li key={item.id}>
                <p className="customer">
                  {item.customer_id}
                </p>
                <p className="order">
                  {item.order_id}
                </p>
                <p>
                  {productsData
                    .filter((product) => item.order_items.includes(product.id))
                    .map((obj) => obj.name)
                    .join(", ")}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
