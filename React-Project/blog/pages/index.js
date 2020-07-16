import React,{useState} from 'react'
import Head from 'next/head'
import Link from 'next/link'
//引入子组件
import Header from '../components/Header'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'
//引入antd组件
import {Row, Col , List,Icon} from 'antd'

import axios from 'axios'
import  servicePath  from '../config/apiUrl'

import marked from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/monokai-sublime.css';
import '../public/style/pages/index.css'


const Home = (list) => {
   const [ mylist , setMylist ] = useState(list.data)
   const renderer=new marked.Renderer()
   marked.setOptions({
    renderer:renderer,
    gfm:true,
    pedantic:false,
    sanitize: false,
    tables:true,
    breaks:false,
    smartLists:true,
    highlight: function (code) {
      return hljs.highlightAuto(code).value;
    }
  })

   return(  
   <div>
    <Head>
      <title>Home</title>
    </Head>
    <Header />
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
          {/* 手机 普通 平板 大屏 */}
          {/* 屏幕配置 */}
         <div>    
            <List
              header={<div>最新日志</div>}
              //垂直布局
              itemLayout="vertical"
              dataSource={mylist}  //数据源
              //渲染项目
              renderItem={item => (
                <List.Item>
                  {/* 博客标题 */}
                  <div className="list-title">

                    {/* 跳转到文章详情页面  */}
                    <Link href={{pathname:'/detailed',query:{id:item.id}}}>
                       <a>{item.title}</a>
                    </Link>
                    
                  </div>
                   {/* 图标  日期，类别 ，数量 */}
                  <div className="list-icon">
                        {/* antd组件图的图标 */}
                      <span><Icon type="calendar" /> {item.addTime}</span>
                      <span><Icon type="folder" /> {item.typeName}</span>
                      <span><Icon type="fire" /> {item.view_count}人</span>
                  </div>
                   {/* 文章内容 */}
                  <div className="list-context"
                    dangerouslySetInnerHTML={{__html:marked(item.introduce)}}>
                  </div>
                </List.Item>
              )}
            />    
         </div>
        </Col>
        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
            <Author  />
            <Advert />
        </Col>
      </Row>
      <Footer/>
   </div>
 )
}
//获取文章列表
Home.getInitialProps= async()=>{
  const promise=new Promise((resolve)=>{
    axios(servicePath.getArticleList).then(
      (res)=>{
        // console.log('-----',res.data)
        resolve(res.data)
      }
    )
  })
  return await promise
}


export default Home
