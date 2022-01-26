import { Md5 } from 'ts-md5/dist/md5';
import { getUserInfo } from "./common";

export const msgCode = (n:any)=>{
  if (n === undefined) {
    return "";
  }
  n = n.toString();
  switch (n) {
    case "100": return "json解析错误";
    case "101": return "缺少参数";
    case "102": return "参数有误";
    case "200": return "数据校验错误";
    case "625": return "数据库操作失败";
    case "1000": return "验证码错误";
    case "1001": return "您的账号已经被锁定，无法进行操作";
    case "1010": return "公司已经注册";
    case "1011": return "公司不存在";
    case "1020": return "手机号码已经注册了";
    case "1021": return "手机号码还没有注册";
    case "1022": return "手机号码不属于此用户";
    case "1030": return "用户不存在";
    case "1031": return "该账号未开启用户身份";
    case "1032": return "请进行企业认证";
    case "1033": return "本账号一天取消次数达到上限";
    case "1040": return "密码错误";
    case "1050": return "本订单状态下，不能进行此操作";
    case "1051": return "本订单没有邀请此服务商";
    case "1052": return "本账号不能接此订单";
    case "1053": return "本账号不是此订单的服务商";
    case "1054": return "此订单不是由本账号发布";
    case "1055": return "订单已取消";
    case "1056": return "订单不存在";
    case "1057": return "本账号无权对此订单进行此操作";
    case "1058": return "订单已评价";
    case "1060": return "账号在另一台手机登录了";
    case "1070": return "该公司已存在相同手机号码的工程师";
    case "1071": return "工程师不存在";
    case "1072": return "本账号无权对此操作";
    case "1090": return "该记录不存在";
    case "1170": return "您所在区域无可用服务商,无法发布订单";
    case "1250": return "百度地图第三方接口错误";
    case "1220": return "没有查询到相应订单";
    case "5030": return "该新闻已删除";
    case "5031": return "该新闻已删除";
    case "5040": return "该评论已删除";
    case "5041": return "该评论已删除";
    default: return "未知错误";
  }
}


/**
 * 获取设备参数
 */
 const getDeviceParams = ()=>{
  return {
   uuid:null,
   platform:1, // 安卓
   secrete:"xinwei2017"
  }
 }
 

 const md5do = (str:any)=>{
  var second = str.slice(1);
  second += str[0];
  return second;
}

const MD5 = (v:string)=>{
  let md5 = new Md5();
  return md5.appendStr(v).end();
}

export const assembleParams = (params:any) =>{

  const {uuid,platform,secrete} = getDeviceParams();

  const user_info = getUserInfo();

  if (!params.data.user_id) {
    if (user_info) {
      params.data.user_id = user_info.user_id;
    } else {
      params.data.user_id = 0;
    }
  }

  params.secret = secrete;

  if (user_info) {
    params.login_flag = user_info.login_flag;
  }

  if (uuid) {
    params.deviceId = uuid;
  }

  params.version = '2.1.0';

  if (platform == 1) {
    //安卓31  32 ios
    params.platform = 32;
  } else {
    params.platform = 31;
  }
  params = JSON.stringify(params);
  let params2 = MD5(params);
  params2 = md5do(params2);
  var reg = new RegExp(secrete);
  params = params.replace(reg, params2);
  return params;
}
