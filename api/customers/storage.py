from functools import lru_cache

from .schema import Customer, Order, Product

CustomerStorageType = dict[int, Customer]
OrdersStorageType = dict[int, Order]
ProductsStorageType = dict[int, Product]

CUSTOMERS: CustomerStorageType = {}
ORDERS: OrdersStorageType = {
    0: Order(
        customer_id=1,
        order_items=[0,1,2],
        order_id=0,
    ),
    1: Order(
        customer_id=2,
        order_items=[3,4,5],
        order_id=1
    ),
    2: Order(
        customer_id=0,
        order_items=[1,3,5],
        order_id=2
    ),
    3: Order(
        customer_id=3,
        order_items=[0,1,4],
        order_id=3
    ),
}

PRODUCTS: ProductsStorageType = {
    0: Product(name="Apple", price=3.5, description="A red apple", id=0),
    1: Product(name="Pizza", price=12.0, description="Pizza Margheritha", id=1),
    2: Product(name="Hamburger", price=8.0, description="Yummy beef burger", id=2),
    3: Product(name="Cola", price=4.0, description="Coca Cola Classic", id=3),
    4: Product(name="Pasta", price=10.0, description="Spaghetti Bolognese", id=4),
    5: Product(name="Water", price=3.0, description="A bottle of fresh water", id=5),
}


@lru_cache(maxsize=1)
def get_customers_storage() -> CustomerStorageType:
    return CUSTOMERS

@lru_cache(maxsize=1)
def get_orders_storage() -> OrdersStorageType:
    return ORDERS

@lru_cache(maxsize=1)
def get_products_storage() -> ProductsStorageType:
    return PRODUCTS