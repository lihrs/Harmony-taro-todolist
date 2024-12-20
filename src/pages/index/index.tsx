import { View, Text, Button } from '@tarojs/components'
import Taro, { useLoad } from '@tarojs/taro'
import './index.less'

export default function Index () {
  useLoad(() => {
    console.log('Page loaded.')
  });

  const goto = (url:string) => {
    if(url) {
      Taro.navigateTo({
        url
      });
    }
  }

  return (
    <View className='wrap'>
      <Button type='primary' onClick={() => goto('pages/todolist/index')}>
        <Text className='text-[14px] text-white font-[500]'>goto Todolist</Text>
      </Button>

      <Button className='btn2' type='primary'>
        <Text className='text-[14px] text-white font-[500]'>test</Text>
      </Button>
    </View>
  )
}
