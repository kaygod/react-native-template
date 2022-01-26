import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { request } from "@/utils/common";

export interface typeItem {
  brand_name:string,	//显示名称	String	
  brand_id:string		//String	如果是纯数字，则正常执行 如果是“a+数字”，则执行特定逻辑
}

export interface newsItem {
  icon_url:string[],	//图片路径	一维数组	
  news_id:string,	//	资讯id	String	
  title	:string,	//资讯标题	String	
  date:string,	//	发布时间	String	格式：2017-05-01 12:12:33
  source:string,	//	信息来源	String	
  source_head	:string,	//来源方头像	String	123：不用显示头像 ‘’：显示默认头像
  writer_id	:string,	//作者id	String	
  share_content?:string, // 分享内容
  brand_name?:string // 品牌名称
}

interface newsPage{
  page_no:number,
  total_page:number,
  list:newsItem[]
}

export interface dataType{
  type_list:typeItem[],
  news_list:{
     [brand_id:string] : newsPage 
  }
}

export const getter = (state: any): dataType => {
  return state.News;
};

export const counterSlice = createSlice({
  name: 'News',
  initialState: {
    type_list:[],
    news_list:{}
  } as dataType,
  reducers: {
   //更新数据
    updateData(
      state,
      action: PayloadAction<{ key_name: keyof dataType; value: any}>
    ) {
      const { key_name, value } = action.payload;
      state[key_name] = value;
    },
    updateNews(state,action: PayloadAction<{ brand_id:string; value: newsPage}>){
        const { brand_id,value } = action.payload;
        state.news_list[brand_id] = value;
    },
    noOperate(state) {
      return state;
    },
    updatePage(state,action: PayloadAction<{brand_id:string,page_no:number}>){
       const { page_no,brand_id } = action.payload;
       state.news_list[brand_id].page_no = page_no;
    }
  },
});

// Action creators are generated for each case reducer function
export const {
  updateData,
  noOperate,
  updatePage,
  updateNews
} = counterSlice.actions;


/**
 *  获取新闻列表的数据
 */
 export const getNewsListAsync = (brand_id:string,page_no?: number) => async (dispatch: Function, getState: Function) => {

  const source = getter(getState()).news_list[brand_id];

  const page = page_no == null ? (source?source.page_no:1) : page_no;

  const response: any = await request({
    url: '/video_service/news/get_list',
    data: {
      brand_id,
      page_no:page
    },
  },false);

  let msg_list = [];

  if(response != null && response.msg_list != null){
    msg_list = response.msg_list;
  }

  dispatch(updateNews({brand_id,value:{
    page_no:page,
    total_page:response.total,
    list: page == 1 ? msg_list : source.list.concat(response.msg_list)
  }}));

};


/**
 *  获取导航栏
 */
export const getNavAsync = () => async (dispatch: Function, getState: Function) => {
  const response: any = await request({
    url: '/video_service/index/navigation'
  },false);
  dispatch(updateData({key_name:"type_list",value:response.type_list}));
  return Promise.resolve();
};



export default counterSlice.reducer;
