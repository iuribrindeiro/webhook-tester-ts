import { RequestMethodEnum } from "models/request-method-enum";

export const RequestMethodBadgeMapper = {
  [RequestMethodEnum.DELETE]: 'badge-danger',
  [RequestMethodEnum.GET]: 'badge-primary',
  [RequestMethodEnum.PATCH]: 'badge-warning',
  [RequestMethodEnum.POST]: 'badge-success',
  [RequestMethodEnum.PUT]: 'badge-info'
}

