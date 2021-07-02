import React from 'react'
import Counter from './components/Counter'
import GridPagination from './components/GridPagination'
import FormDialog from './components/Dialog1'
import TablePagination1 from './components/TablePagination1'
import CardAlbum from './components/CardAlbum'
import Card1 from './components/Card1'
import PageLoader from './components/PageLoader'
import './App.css'
import MemeGenerator from './components/MemeGenerator'
import CounterInFuncComp from './components/CounterInFuncComp'
import LikeCounter from './components/LikeCounter'
import CommentCounter from './components/CommentCounter'
import HocFav from './components/HocFav'
import HocToggleData from './components/HocToggleData'
import PureComp from './components/PureComp'
import MemoComp from './components/MemoComp'
import ContextCounter from './components/ContextCounter'

const App = () => {
  return (
    <div>
      <ContextCounter/>
      {/* <MemoComp/> */}
      {/* <PureComp/> */}
      {/* <HocFav/>
      <HocToggleData/> */}
      {/* <LikeCounter/>
      <CommentCounter/> */}
      {/* <CounterInFuncComp/> */}
      {/* <MemeGenerator/> */}
      {/* <PageLoader/> */}
      {/* <Card1/> */}
      {/* <CardAlbum/> */}
      {/* <TablePagination1/> */}
      {/* <FormDialog/> */}
      {/* <GridPagination/> */}
      {/* <Counter/> */}
    </div>
  )
}

export default App
