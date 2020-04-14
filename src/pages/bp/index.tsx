import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.less'

export default class BloodPressure extends Component {
  state = {
    gluIndex: []
  }
  componentWillMount() { }

  componentDidMount() {

  }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
      <View className='index'>
        <Text>Hello world!</Text>
      </View>
    )
  }
}
