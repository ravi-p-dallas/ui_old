export class CartItem {
    itemId: string;
    name: string;
    orderCount: string;
    orderTo: string;
    price: number;

    constructor(itemId: string,
        name: string,
        orderCount: string,
        orderTo: string,
        price: number,
    ) {
        console.log("");
        this.name = name;
        this.itemId = name;
        this.orderCount = orderCount;
        this.orderTo = orderTo;
        this.price = price;
    }
}