## 创建项目
ng new ng-cof --skip-install
cnpm install
cd ng-cof
ng serve --open

## 引入bootstrap框架
在index页面，写入
<link href="https://cdn.bootcss.com/twitter-bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
<script src="https://cdn.bootcss.com/jquery/3.4.0/jquery.min.js"></script>
<script src="https://cdn.bootcss.com/twitter-bootstrap/3.3.7/js/bootstrap.min.js"></script>

<!-- <link href="https://cdn.bootcss.com/twitter-bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet">
<script src="https://cdn.bootcss.com/twitter-bootstrap/4.3.1/js/bootstrap.min.js"></script> -->

引入fontAwesome字体库
<link href="https://cdn.bootcss.com/font-awesome/5.10.0-12/css/fontawesome.min.css" rel="stylesheet">


## 创建导航条组件
ng generate component header

编写导航条代码

## 创建footer组件
ng generate component public/footer

编写footer代码

## 创建home组件
ng generate component home

引入app-header组件
编写home组件html
引入footer组件



## 创建顶级路由
ng generate module app-routing --flat --module=app

导入组件，进行匹配
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component'

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent}
]



@NgModule({
  exports: [ RouterModule ],
  declarations: [],
  imports: [ RouterModule.forRoot(routes) ],
})

## 创建workshops组件
ng generate component workshops

- 在路由中引入workshops组件
进行路由配置

引入header组件
引入footer组件

编写workshops组件html和css代码

### workshops模拟数据导入
- 启用 HTTP 服务
打开根模块 AppModule，从 @angular/common/http 中导入 HttpClientModule 符号。

- 编写workshops格式规范

- 模拟数据服务器
安装内存 Web API 包：
cnpm install angular-in-memory-web-api --save

生成src/app/service/in-memory-data.service.ts 类：
ng generate service service/InMemoryData

编写模拟数据

- 创建workshops服务
ng generate service service/workshop






## 创建speakers组件
ng generate component speakers

编写spaekers


### speakers模拟数据导入
- 编写speakers格式规范

- 模拟数据服务器

- 创建workshops服务
ng generate service service/speaker

编写从内存服务器获取数据的函数

- 编写speakers的ts代码
编写函数，调用服务中的函数；


## 创建sessions组件
ng generate component sessions

去路由中注册sessions组件

引入header，footer组件；


### sessions模拟数据导入
- 编写sessions格式规范

- 模拟数据服务器

- 创建sessions服务
ng generate service service/sessions

编写从内存服务器获取数据的函数

- 编写sessions的ts代码
编写函数，调用服务中的函数；


## 创建sponsors组件
ng generate component sponsors

去路由中注册sponsors组件
import { SponsorsComponent } from './sponsors/sponsors.component';

const routes: Routes = [
  {path: 'sponsors', component: SponsorsComponent},
]

引入header，footer组件，

- 编写html，css代码

### sponsors模拟服务数据
- 编写sponsors数据格式规范

- 模拟数据服务器

- 创建sponsors服务

- 编写sponssors的ts代码



## schedule组件
### 创建schedule组件
ng generate component schedule

- 去路由中注册 schedule组件

- 编写html，css代码

### schedule模拟服务数据
编写schedule数据格式规范

- 模拟数据服务器

- 创建 schedule服务
ng generate service service/schedule

- 编写schedule的ts代码



## 创建nworkshops组件
ng generate component nworkshops

- 在路由中引入nworkshops组件
进行路由配置

引入header组件
引入footer组件

编写nworkshops组件html和css代码



## 创建nspeakers组件
ng generate component nspeakers

- 在路由中引入nspeakers组件
进行路由配置

引入header组件
引入footer组件

编写nspeakers组件html和css代码











