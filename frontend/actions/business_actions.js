import * as BizAPIUtil from '../util/biz_api_util';

export const RECEIVE_NEW_BIZ = "RECEIVE_NEW_BIZ";
export const RECEIVE_ALL_BIZ = "RECEIVE_ALL_BIZ";
export const REMOVE_BIZ = "REMOVE_BIZ";

export const receiveBiz = business => ({
  type: RECEIVE_NEW_BIZ,
  business
});

export const receiveAllBiz = businesses => ({
  type: RECEIVE_ALL_BIZ,
  businesses
});

export const removeBiz = businessId => ({
  type: REMOVE_BIZ,
  businessId
});

export const createBiz = business => dispatch => (
  BizAPIUtil.makeNewBiz(business).then( biz => dispatch(receiveBiz(biz)))
);

export const updateBiz = business => dispatch => (
  BizAPIUtil.updateBiz(business).then( biz => dispatch(recieveBiz(biz)))
);

export const deleteBiz = businessId => dispatch =>(
  BizAPIUtil.deleteBiz(businessId).then( dispatch(removeBiz(businessId)))
);

export const fetchBiz = businessId => dispatch => (
  BizAPIUtil.fetchBiz(businessId).then( biz => dispatch(receiveBiz(biz)))
);

export const fetchAllBiz = () => dispatch => (
  BizAPIUtil.fetchAllBiz().then( bizz => dispatch(receiveAllBiz(bizz)) )
);
