import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  SafeAreaView,
  TextInput,
} from 'react-native';
import Modal from 'react-native-modal';
import {navigate, resetRoot} from '../navigation/RootNavigation';
import {
  ReceiptButton,
  SharedButton,
  RedIconButton,
} from '../components/BOOTSTRAP';

import style from '../style/style';

export default function QuickOrderSuccess() {
  const [receiptModal, setReceiptModal] = React.useState(false);

  const togglereceiptModal = () => {
    setReceiptModal(!receiptModal);
  };
  return (
    <View style={{flex: 1}}>
      <ScrollView contentContainerStyle={[{justifyContent: 'space-between'}]}>
        <View style={{padding: 15, backgroundColor: 'white'}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              padding: 15,
              marginBottom: 25,
              borderRadius: 5,
              borderWidth: 0.5,
              borderColor: '#E5E5E5',
            }}>
            <Image
              source={require('../images/ordercheck.png')}
              style={{marginRight: 15}}></Image>
            <View style={{justifyContent: 'center'}}>
              <Text style={style.text2}>주문이 정상적으로 완료되었습니다</Text>
              <Text style={{color: '#777777', marginTop: 5}}>
                주문일시 2021.01.28 14:03
              </Text>
            </View>
          </View>
          <Text style={styles.subtitle}>주소</Text>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                height: 26,
                width: 48,
                borderColor: '#E51A47',
                borderWidth: 1,
                borderRadius: 5,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: '#E51A47'}}>출발지</Text>
            </View>
            <View style={{marginTop: 3, marginLeft: 10, width: '84%'}}>
              <Text numberOfLines={3} ellipsizeMode="tail" style={style.text2}>
                인천 강화군 강화읍 갑룡길
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  marginVertical: 8,
                }}>
                <Text style={{color: '#777777'}}>[지번 주소] </Text>
                <Text
                  numberOfLines={3}
                  ellipsizeMode="tail"
                  style={{
                    color: '#777777',
                    width: '78%',
                  }}>
                  인천광역시 강화군 강화읍 관청리 89-1
                </Text>
              </View>
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                height: 26,
                width: 48,
                borderColor: '#E51A47',
                borderWidth: 1,
                borderRadius: 5,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: '#E51A47'}}>도착지</Text>
            </View>
            <View style={{marginTop: 3, marginLeft: 10, width: '84%'}}>
              <Text numberOfLines={3} ellipsizeMode="tail" style={style.text2}>
                인천 강화군 강화읍 갑룡길
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  marginVertical: 8,
                }}>
                <Text style={{color: '#777777'}}>[지번 주소] </Text>
                <Text
                  numberOfLines={3}
                  ellipsizeMode="tail"
                  style={{
                    color: '#777777',
                    width: '78%',
                  }}>
                  인천광역시 강화군 강화읍 관청리 89-1
                </Text>
              </View>
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                height: 26,
                width: 48,
                borderColor: '#E51A47',
                borderWidth: 1,
                borderRadius: 5,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: '#E51A47'}}>연락처</Text>
            </View>
            <View style={{marginLeft: 10, justifyContent: 'center'}}>
              <Text numberOfLines={3} ellipsizeMode="tail" style={style.text2}>
                010-1234-1234
              </Text>
            </View>
          </View>
        </View>

        <View style={{backgroundColor: 'white', padding: 15}}>
          <View
            style={{
              height: 1,
              backgroundColor: '#E5E5E5',
              marginTop: -10,
              marginBottom: 15,
            }}></View>
          <Text style={[styles.subtitle, {marginBottom: 10}]}>
            라이더님에게
          </Text>
          <Text numberOfLines={3} ellipsizeMode="tail" style={{fontSize: 16}}>
            조심히 안전하게 와주세요
          </Text>
        </View>
        <View style={{height: 10, backgroundColor: '#F5F5F5'}}></View>
        <View
          style={{
            paddingHorizontal: 15,
            paddingTop: 15,
            backgroundColor: 'white',
          }}></View>

        <View style={{padding: 15, backgroundColor: 'white'}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 20,
            }}>
            <Text style={style.text2}>결제방법</Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-end',
              }}>
              <Text style={style.text2}>카드결제</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 20,
            }}>
            <Text style={style.text2}>배 달 팁</Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-end',
              }}>
              <Text style={style.text2}>1,000원</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 20,
            }}>
            <Text style={style.text2}>주문금액</Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-end',
              }}>
              <Text style={style.text2}>1,000원</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 10,
            }}>
            <Text style={style.text2}>할인금액</Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-end',
              }}>
              <Text style={style.text2}>1,000원</Text>
            </View>
          </View>
          <View
            style={{
              height: 1,
              backgroundColor: '#E5E5E5',
              marginVertical: 16,
            }}></View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 5,
            }}>
            <Text style={{fontSize: 18}}>결제금액</Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-end',
              }}>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>9,000원</Text>
            </View>
          </View>
        </View>
        <View style={{height: 10, backgroundColor: '#F5F5F5'}}></View>

        <View style={{backgroundColor: 'white', padding: 15}}>
          <Text style={{fontSize: 18, marginTop: 10, fontWeight: 'bold'}}>
            배달 상품
          </Text>
          <View
            style={{
              height: 1,
              backgroundColor: '#E5E5E5',
              marginVertical: 20,
            }}></View>

          <View style={{}}>
            <Text style={{fontSize: 18, marginBottom: 10}}>토종꿀</Text>
          </View>
          <Text style={{fontSize: 16, color: '#777777'}}>무게: 1kg</Text>
        </View>
        <View style={{height: 10, backgroundColor: '#F5F5F5'}}></View>

        <View style={{padding: 15, backgroundColor: 'white', width: '100%'}}>
          {/* 주문내역으로 이동 버튼 */}
          <RedIconButton
            title="주문내역으로 이동"
            style={{marginBottom: 10}}
            src={require('../images/successlist.png')}
            onPress={() => {
              navigate('MyOrderList');
            }}
          />
          {/* 홈으로 가기 버튼 */}
          <RedIconButton
            title="홈으로 이동"
            style={{marginBottom: 10}}
            src={require('../images/homeicon1.png')}
            onPress={() => {
              resetRoot('Main');
            }}
          />
          <View style={style.Row1}>
            {/* 공유하기 버튼 */}
            <SharedButton
              style={{marginRight: 5}}
              title="공유하기"
              src={require('../images/successshare.png')}
            />
            {/* 영수증 파일 받기 버튼 */}
            <ReceiptButton
              onPress={togglereceiptModal}
              style={{marginLeft: 5}}
            />
          </View>
        </View>
      </ScrollView>

      {/* 영수증 모달 */}
      <ReceiptModal
        togglereceiptModal={togglereceiptModal}
        receiptModal={receiptModal}
      />
    </View>
  );
}

// {/* 영수증 모달 */}
const ReceiptModal = ({receiptModal, togglereceiptModal, setReceiptModal}) => {
  return (
    <Modal isVisible={receiptModal} onRequestClose={togglereceiptModal}>
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: 'white'}}>
          <TouchableOpacity
            style={{
              alignItems: 'flex-end',
              marginTop: 10,
              marginRight: 15,
            }}
            onPress={togglereceiptModal}>
            <Image source={require('../images/receiptclose.png')}></Image>
          </TouchableOpacity>
          <ScrollView
            style={{
              borderWidth: 1,
              flex: 1,
              margin: 15,
              padding: 15,
            }}>
            <Text
              style={{
                width: '100%',
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: 20,
                marginVertical: 20,
              }}>
              영수증
            </Text>
            <View>
              <Text style={{marginBottom: 3}}>
                강화 김치찌개 / 123-45-67890 / 홍길동
              </Text>
              <Text style={{marginBottom: 3}}>인천 강화군 강화읍 갑룡길 3</Text>
              <Text style={{marginBottom: 3}}>
                070-1234-1234 / 20210330-01-0001
              </Text>
              <Text style={{marginBottom: 3}}>2021-03-30 12:34:56</Text>
              <View height={15}></View>
              <View
                style={{
                  borderWidth: 1,
                  borderStyle: 'dashed',
                  borderColor: '#AAAAAA',
                }}></View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: '100%',
                  height: 35,
                  alignItems: 'center',
                }}>
                <Text style={{width: '50%'}}>상 품 명</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    width: '50%',
                  }}>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      width: '40%',
                      textAlign: 'center',
                    }}>
                    단가
                  </Text>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      width: '20%',
                      textAlign: 'center',
                    }}>
                    수량
                  </Text>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      width: '40%',
                      textAlign: 'center',
                    }}>
                    금액
                  </Text>
                </View>
              </View>
              <View
                style={{
                  borderWidth: 1,
                  borderStyle: 'dashed',
                  borderColor: '#AAAAAA',
                  marginBottom: 10,
                }}></View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginVertical: 5,
                }}>
                <View style={{width: '45%'}}>
                  <Text>김치찌개</Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    width: '55%',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                  }}>
                  <Text
                    adjustsFontSizeToFit={true}
                    numberOfLines={1}
                    style={{
                      width: '35%',
                      textAlign: 'right',
                    }}>
                    100
                  </Text>
                  <Text
                    adjustsFontSizeToFit={true}
                    numberOfLines={1}
                    style={{
                      width: '20%',
                      textAlign: 'right',
                    }}>
                    1
                  </Text>
                  <Text
                    adjustsFontSizeToFit={true}
                    numberOfLines={1}
                    style={{
                      width: '40%',
                      textAlign: 'right',
                    }}>
                    191
                  </Text>
                </View>
              </View>

              <View
                style={{
                  borderWidth: 1,
                  borderStyle: 'dashed',
                  borderColor: '#AAAAAA',
                  marginVertical: 15,
                }}></View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginBottom: 5,
                }}>
                <Text>합계금액</Text>
                <Text>18,500</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text>할인금액</Text>
                <Text>18,500</Text>
              </View>
              <View
                style={{
                  borderWidth: 1,
                  borderStyle: 'dashed',
                  borderColor: '#AAAAAA',
                  marginVertical: 15,
                }}></View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  width: '100%',
                }}>
                <Text style={{width: '50%'}}>*할인내역 :</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '50%',
                  }}>
                  <Text>쿠폰사용</Text>
                  <Text>1,000</Text>
                </View>
              </View>
              <View
                style={{
                  borderWidth: 1,
                  borderStyle: 'dashed',
                  borderColor: '#AAAAAA',
                  marginVertical: 15,
                }}></View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginBottom: 5,
                }}>
                <Text>전체금액</Text>
                <Text>18,500</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginBottom: 5,
                }}>
                <Text>물품가액</Text>
                <Text>18,500</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginBottom: 5,
                }}>
                <Text>부가세액</Text>
                <Text>18,500</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginBottom: 20,
                }}>
                <Text style={{fontWeight: 'bold'}}>합{'       '}계</Text>
                <Text style={{fontWeight: 'bold'}}>18,500</Text>
              </View>
            </View>
          </ScrollView>
          <TouchableOpacity
            style={{
              height: 50,
              backgroundColor: '#E51A47',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => {}}>
            <Text
              style={{
                color: 'white',
                fontSize: 18,
                fontWeight: 'bold',
              }}>
              다운로드
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </Modal>
  );
};
const styles = StyleSheet.create({
  subtitle: {fontSize: 18, fontWeight: 'bold', marginBottom: 20},
  footer: {
    justifyContent: 'flex-end',
    backgroundColor: 'white',
  },
  footer1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderTopWidth: 0.5,
    borderTopColor: '#E5E5E5',
    marginBottom: 10,
    paddingTop: 20,
    backgroundColor: 'white',
  },
  fotterbtn: {
    backgroundColor: '#E51A47',
    height: 50,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  plusminus: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderColor: '#E5E5E5',
    borderWidth: 0.5,
    height: 45,
    width: 133,
    alignItems: 'center',
    borderRadius: 5,
  },
  addcart: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
    backgroundColor: '#FEEDEC',
    borderRadius: 5,
  },
  subcontents: {color: '#777777', fontSize: 16},
  modalCancel: {
    backgroundColor: '#777777',
    width: '50%',
    marginRight: 5,
    alignItems: 'center',
    justifyContent: 'center',
    height: 45,
    borderRadius: 5,
  },
  modalOk: {
    backgroundColor: '#E51A47',
    width: '50%',
    marginLeft: 5,
    alignItems: 'center',
    justifyContent: 'center',
    height: 45,
    borderRadius: 5,
  },
  modalBtnFont: {color: 'white', fontSize: 16, fontWeight: 'bold'},
});
