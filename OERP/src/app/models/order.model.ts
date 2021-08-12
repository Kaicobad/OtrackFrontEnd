

export interface OrderModel
{
  id: string,
  orderNumber: string,
  poNumber: string,
  styleId: string,
  fcblCode: string,
  buyerId: string,
  orderDate: any,
  projectedOrderCompleteDate: any,
  timeForOrderInDays: number,
  quantity: number,
  productUnitId: string,
  comboName: string,
  colorId: string,
  sizeId: string,
  poFileUrl: string
}
