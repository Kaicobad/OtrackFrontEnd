

export interface OrderModel
{
  orderNumber: string,
  poNumber: string,
  styleId: string,
  fcblCode: string,
  buyerId: string,
  projectedOrderCompleteDate: any,
  timeForOrderInDays: number,
  quantity: number,
  productUnitId: string,
  comboName: string,
  colorId: string,
  sizeId: string,
  poFileUrl: string,
  poFile : File
}
