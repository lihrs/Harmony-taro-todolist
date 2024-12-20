import {useState} from "react";
import { View, Text, Input, Button, ScrollView } from '@tarojs/components';
import Taro from "@tarojs/taro";
import './index.less'

export default function Index () {
  const [val, setVal] = useState<string>("");
  const [list, setList] = useState<Array<string>>([]);

  const handleAdd = () => {
    if(val.trim() === "") {
      Taro.showToast({
        title: "添加内容不可为空",
        icon: "none"
      });

      return;
    }

    setList([val, ...list]);
    setVal("");
  }

  const handleDelete = (index: number) => {
    console.log("index:", index);
    Taro.showModal({
      title: "提示",
      content: "确定要删除此项吗？",
      success: (res) => {
        if (res.confirm) {
          const newList = [...list];

          newList.splice(index, 1);
          setList(newList);
        }
      }
    });
  }

  return (
    <View className='wrap'>
      <View className='head'>
        <View className='inputWrap'>
          <Input className='input' type='text' placeholder='请输入...' value={val} onInput={e => setVal(e.detail.value)} />
        </View>

        <View className='btnWrap'>
          <Button size='mini' className='btn' type='primary' onClick={handleAdd}>
            <Text className='text-white text-[14px] font-[500]'>添加</Text>
          </Button>
        </View>
      </View>

      <View className='scrollWrap'>
        {
          list.length === 0
            ? <View className='empty'><Text className='text'>暂无数据</Text></View>
            : <ScrollView className='scroll'>
                {
                  list.map((item, index) => (<View key={index} className='item'>
                    <View className='left'>
                      <Text className='text'>{index+1}. {item}</Text>
                    </View>

                    <View className='right'>
                      <Button size='mini' className='btn' type='default'>
                        <Text className='text-[#333333] text-[14px] font-[500]'>编辑</Text>
                      </Button>
                      <Button size='mini' className='btn' type='warn' onClick={() => handleDelete(index)}>
                        <Text className='text-white text-[14px] font-[500]'>删除</Text>
                      </Button>
                    </View>
                  </View>))
                }
              </ScrollView>
        }
      </View>
    </View>
  )
}
