import React from 'react'
import {LineChart, BarChart} from 'react-native-chart-kit';
import {SafeAreaView,View, Text,Dimensions, StatusBar, StyleSheet,} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';

const data1 = {
  labels: ['Ba đình','Bắc Từ Liêm','Cầu Giấy ','Chương Mỹ','Đan Phượng','Đông Anh','Đống Đa','Gia Lâm','Hà Đông','Hai Bà Trưng','Hoài Đức','Hoàn Kiếm','Hoàng Mai','Long Biên','Nam Từ Liêm','Tây Hồ','Thạch Thất','Thành Trì','Thanh Oai','Thanh Xuân'],
  datasets: [
    {
      data: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
    }
  ]
};
const data2 = {
    labels: ['Thanh xuân','bắc từ liêm','Cao bằng','Bắc giang','Bắc ninh','hà nội','lạng sơn','tuyên quang','bắc kan','baby boo'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43,56,25,58,29]
      }
    ]
  };
  
const Chart = () => {
  
    return (
      <>
      <ScrollView style={styles.container} >
      <ScrollView  horizontal={true} >
      <View>
        <View style={styles.header} >
  
            <AntDesign name="left" size
            ={20} color="black" />
            <Text style={{
              fontSize: 24,
              flex: 1,
              width: null,
              height: 40,
              justifyContent: 'space-between',
              

            }}>Price fluctuations</Text>
        </View>
        <View style={styles.chartstyle}>
               <Text style={{fontSize: 20}}>Biểu đồ biến động giá của các quận:</Text>
               </View> 
            <StatusBar barStyle="dark-content" />
           <SafeAreaView style={styles.barStyle}>
             
                  <View
                    style={{
                    alignItems: 'center',
                  }}>
              
            </View>
            <View style={{alignItems: 'center'}}>
            <BarChart
                data ={data1}
                width={Dimensions.get('window').width / 0.4} 
                height={460}
                yAxisLabel="$"
                verticalLabelRotation="90"
                chartConfig={{
                  backgroundColor: '#7B68EE',
                  backgroundGradientFrom: '#D9D9D9',
                  backgroundGradientTo: '#E6E6FA',
                  decimalPlaces: 2, // optional, defaults to 2dp
                  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                  labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                  style: {
                    borderRadius: 16,
                  },
                  propsForDots: {
                    r: '6',
                    strokeWidth: '2',
                    stroke: '#ffa726',
                  },
                  
                }}
                bezier
                style={{
                  marginVertical: 10,
                  borderRadius: 15,
                }}
  
              />  
             
                
            </View>
          
        </SafeAreaView>
        
        </View>
        </ScrollView>
         </ScrollView>
      </>
  
    );
  };
  
  const styles = StyleSheet.create({
    container:{
          flex:1,
    },

    header:{
          flex: 0.3,
          flexDirection: 'row',
          backgroundColor: '#7066f6',
          alignItems: 'center',
          justifyContent: 'space-between'
    },
    chartstyle: {
           flex:0.3,
           flexDirection: 'column'
    },
    barStyle:{
           flex: 0.4,
    }
  });
  
  export default Chart;
