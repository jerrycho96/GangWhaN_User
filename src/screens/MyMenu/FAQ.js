import * as React from 'react';
import {
  Text,
  Image,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {List} from 'react-native-paper';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';

import {TextInput} from 'react-native-paper';
import {navigate} from '../../navigation/RootNavigation';
import style from '../../style/style';

const faqData = {
  data1: [
    {
      key: '0',
      faqtitle: '자주하는 질문',
      date: '2021-02-02',
      contents:
        '공개하지 아니한 회의내용의 공표에 관하여는 법률이 정하는 바에 의한다. 대통령은 법률에서 구체적으로 범위를 정하여 위임받은 사항과 법률을 집행하기 위하여 필요한 사항에 관하여 대통령령을 발할 수 있다. \n\n일반사면을 명하려면 국회의 동의를 얻어야 한다. 체포·구속·압수 또는 수색을 할 때에는 적법한 절차에 따라 검사의 신청에 의하여 법관이 발부한 영장을 제시하여야 한다. 다만, 현행범인인 경우와 장기 3년 이상의 형에 해당하는 죄를 범하고 도피 또는 증거인멸의 염려가 있을 때에는 사후에 영장을 청구할 수 있다.',
      new: true,
    },
    {
      key: '1',
      faqtitle: '자주하는 질문',
      date: '2021-02-02',
      contents:
        '공개하지 아니한 회의내용의 공표에 관하여는 법률이 정하는 바에 의한다. 대통령은 법률에서 구체적으로 범위를 정하여 위임받은 사항과 법률을 집행하기 위하여 필요한 사항에 관하여 대통령령을 발할 수 있다. \n\n일반사면을 명하려면 국회의 동의를 얻어야 한다. 체포·구속·압수 또는 수색을 할 때에는 적법한 절차에 따라 검사의 신청에 의하여 법관이 발부한 영장을 제시하여야 한다. 다만, 현행범인인 경우와 장기 3년 이상의 형에 해당하는 죄를 범하고 도피 또는 증거인멸의 염려가 있을 때에는 사후에 영장을 청구할 수 있다.',
      new: true,
    },
    {
      key: '2',
      faqtitle: '자주하는 질문',
      date: '2021-02-02',
      contents:
        '공개하지 아니한 회의내용의 공표에 관하여는 법률이 정하는 바에 의한다. 대통령은 법률에서 구체적으로 범위를 정하여 위임받은 사항과 법률을 집행하기 위하여 필요한 사항에 관하여 대통령령을 발할 수 있다. \n\n일반사면을 명하려면 국회의 동의를 얻어야 한다. 체포·구속·압수 또는 수색을 할 때에는 적법한 절차에 따라 검사의 신청에 의하여 법관이 발부한 영장을 제시하여야 한다. 다만, 현행범인인 경우와 장기 3년 이상의 형에 해당하는 죄를 범하고 도피 또는 증거인멸의 염려가 있을 때에는 사후에 영장을 청구할 수 있다.',
      new: true,
    },
    {
      key: '3',
      faqtitle: '자주하는 질문',
      date: '2021-02-02',
      contents:
        '공개하지 아니한 회의내용의 공표에 관하여는 법률이 정하는 바에 의한다. 대통령은 법률에서 구체적으로 범위를 정하여 위임받은 사항과 법률을 집행하기 위하여 필요한 사항에 관하여 대통령령을 발할 수 있다. \n\n일반사면을 명하려면 국회의 동의를 얻어야 한다. 체포·구속·압수 또는 수색을 할 때에는 적법한 절차에 따라 검사의 신청에 의하여 법관이 발부한 영장을 제시하여야 한다. 다만, 현행범인인 경우와 장기 3년 이상의 형에 해당하는 죄를 범하고 도피 또는 증거인멸의 염려가 있을 때에는 사후에 영장을 청구할 수 있다.',
      new: false,
    },
    {
      key: '4',
      faqtitle: '자주하는 질문',
      date: '2021-02-02',
      contents:
        '공개하지 아니한 회의내용의 공표에 관하여는 법률이 정하는 바에 의한다. 대통령은 법률에서 구체적으로 범위를 정하여 위임받은 사항과 법률을 집행하기 위하여 필요한 사항에 관하여 대통령령을 발할 수 있다. \n\n일반사면을 명하려면 국회의 동의를 얻어야 한다. 체포·구속·압수 또는 수색을 할 때에는 적법한 절차에 따라 검사의 신청에 의하여 법관이 발부한 영장을 제시하여야 한다. 다만, 현행범인인 경우와 장기 3년 이상의 형에 해당하는 죄를 범하고 도피 또는 증거인멸의 염려가 있을 때에는 사후에 영장을 청구할 수 있다.',
      new: false,
    },
    {
      key: '5',
      faqtitle: '자주하는 질문',
      date: '2021-02-02',
      contents:
        '공개하지 아니한 회의내용의 공표에 관하여는 법률이 정하는 바에 의한다. 대통령은 법률에서 구체적으로 범위를 정하여 위임받은 사항과 법률을 집행하기 위하여 필요한 사항에 관하여 대통령령을 발할 수 있다. \n\n일반사면을 명하려면 국회의 동의를 얻어야 한다. 체포·구속·압수 또는 수색을 할 때에는 적법한 절차에 따라 검사의 신청에 의하여 법관이 발부한 영장을 제시하여야 한다. 다만, 현행범인인 경우와 장기 3년 이상의 형에 해당하는 죄를 범하고 도피 또는 증거인멸의 염려가 있을 때에는 사후에 영장을 청구할 수 있다.',
      new: false,
    },
    {
      key: '6',
      faqtitle: '자주하는 질문',
      date: '2021-02-02',
      contents:
        '공개하지 아니한 회의내용의 공표에 관하여는 법률이 정하는 바에 의한다. 대통령은 법률에서 구체적으로 범위를 정하여 위임받은 사항과 법률을 집행하기 위하여 필요한 사항에 관하여 대통령령을 발할 수 있다. \n\n일반사면을 명하려면 국회의 동의를 얻어야 한다. 체포·구속·압수 또는 수색을 할 때에는 적법한 절차에 따라 검사의 신청에 의하여 법관이 발부한 영장을 제시하여야 한다. 다만, 현행범인인 경우와 장기 3년 이상의 형에 해당하는 죄를 범하고 도피 또는 증거인멸의 염려가 있을 때에는 사후에 영장을 청구할 수 있다.',
      new: false,
    },
  ],
};

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: 'white',
    accent: 'black',
  },
};

export default function FAQ({navigation}) {
  const [faqRender, setfaqRender] = React.useState(faqData.data1);
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);

  return (
    <PaperProvider theme={theme}>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <FlatList
          ListHeaderComponent={
            <View style={styles.searchBox}>
              <TextInput
                borderWidth={1}
                borderColor="#CCCCCC"
                underlineColor="white"
                borderRadius={100}
                width="100%"
                style={{
                  width: '100%',
                  height: 45,
                  backgroundColor: 'white',
                  paddingHorizontal: 12,
                }}
                placeholder="제목을 입력하세요"
                placeholderTextColor="#AAAAAA"
                right={
                  <TextInput.Icon
                    style={{backgroundColor: 'white'}}
                    name={require('../../images/search_icon.png')}
                    color={'#E51A47'}
                  />
                }
              />
            </View>
          }
          renderItem={RenderFaqItem}
          data={faqRender}
        />
      </View>
    </PaperProvider>
  );
}

const RenderFaqItem = ({item}) => {
  return (
    <View>
      <List.Accordion
        title={item.faqtitle}
        description={item.date}
        titleStyle={{marginBottom: 5}}>
        <List.Item
          title={item.contents}
          titleNumberOfLines={0}
          titleStyle={{marginVertical: 15, marginRight: 5}}
          style={{backgroundColor: '#F6F6F6', flex: 1}}
        />
      </List.Accordion>
      <View style={{backgroundColor: '#E3E3E3', height: 1}}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {flex: 1, backgroundColor: 'white'},
  searchBox: {
    borderWidth: 0.5,
    borderColor: '#E5E5E5',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5,
    marginBottom: 5,
  },
  itemView: {
    flexDirection: 'row',
    borderBottomColor: 'grey',
    margin: 8,
    marginBottom: 12,
    alignItems: 'center',
  },
  itemImg: {
    width: 70,
    height: 70,
    resizeMode: 'cover',
    marginRight: 10,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    marginRight: 5,
  },
  itemMsg: {
    marginLeft: 5,
  },
  delPrice: {
    color: '#777777',
  },
  newtakeout: {marginRight: 5},
  title: {marginBottom: 10, fontSize: 16},
  contents: {marginRight: 20, marginBottom: 10, fontSize: 16},
  img: {resizeMode: 'cover', marginRight: 10, marginBottom: 10},
});
