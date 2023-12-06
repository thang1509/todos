import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { style } from './style'
import { fetchToDo } from './api/ToDoApi'

export default function ToDo() {
  const [dataApi, setDataApi] = useState([])

  useEffect(() => {
    fetchToDo().then((data) => {
      setDataApi(data)
    })
  }, [])

  const renderData = () => {
    return dataApi.map((item: any, index) => {
      return (
        <View style={style.item} key={index}>
          <Text>{item.title}</Text>
        </View>
      )
    })
  }

  return (
    <View style={[style.container_todo, style.mt_16]}>
      <Text style={style.title}>Todo List</Text>
      <ScrollView>{renderData()}</ScrollView>
    </View>
  )
}
