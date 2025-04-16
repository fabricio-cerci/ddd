import OrderRepositoryInterface from "../../domain/checkout/repository/order-repository.interface";
import OrderItemModel from "../db/sequelize/model/order-item.model";
import OrderModel from "../db/sequelize/model/order.model";
import OrderItem from "../../domain/checkout/entity/order_item";
import Order from "../../domain/checkout/entity/order";

export default class OrderRepository implements OrderRepositoryInterface{
    async create(entity: Order): Promise<void> {
        await OrderModel.create({
            id: entity.id,
            customer_id: entity.customerId,
            total: entity.total(),
            items: entity.items.map(item => ({
                id: item.id,
                name: item.name,
                price: item.price,
                product_id: item.productId,
                quantity: item.quantity
            }))
        }, {
            include: [{ model: OrderItemModel }]
        });
    }

    async update(entity: Order): Promise<void> {
        const transaction = await OrderModel.sequelize.transaction();
        
        try {
            const order = await OrderModel.findOne(
                {
                    where: { id: entity.id },
                    transaction
                }
            );

            await OrderItemModel.destroy({
                where: { order_id: entity.id },
                transaction
            });

            const items = entity.items.map(item => ({
                id: item.id,
                name: item.name,
                price: item.price,
                product_id: item.productId,
                quantity: item.quantity,
                order_id: entity.id
            }))

            await OrderItemModel.bulkCreate(items, { transaction });

            await order.update(
                { total: entity.total() },
                { transaction }
            );

            await transaction.commit();
        } catch (error) {
            await transaction.rollback();
            throw new Error("Falha ao atualizar a order");
        }
    }

    async find(id: string): Promise<Order> {
        let orderModel;
        try {
            orderModel = await OrderModel.findOne(
                {
                    where: {
                        id
                    },
                    include: [
                        { model: OrderItemModel }
                    ],
                    rejectOnEmpty: true
                });
        } catch (error) {
            throw new Error("Order not found");
        }

        const items = orderModel.items.map(item => new OrderItem(
            item.id,
            item.name,
            item.price,
            item.product_id,
            item.quantity
        ));

        return new Order(orderModel.id, orderModel.customer_id, items);
    }

    async findAll(): Promise<Order[]> {
        const ordersModel = await OrderModel.findAll({
            include: [
                { model: OrderItemModel }
            ]
        });

        return ordersModel.map(orderModel => {
            const items = orderModel.items.map(item => new OrderItem(
                item.id,
                item.name,
                item.price,
                item.product_id,
                item.quantity
            ));

            return new Order(orderModel.id, orderModel.customer_id, items);
        });
    }
}