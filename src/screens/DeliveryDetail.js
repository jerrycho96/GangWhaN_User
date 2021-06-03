import React, {useState, useEffect} from 'react';
import {
  Text,
  Image,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from 'react-native';
import {List} from 'react-native-paper';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import {Dimensions} from 'react-native';
import Modal from 'react-native-modal';
import Stars from 'react-native-stars';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import style from '../style/style';
import {Footer} from 'native-base';
import {TextInput} from 'react-native-paper';
import CreateDeliveryList from '../components/CreateDeliveryList';
import {Platform} from 'react-native';
import DeliveryOrderTab from '../components/DeliveryOrderTab';
import DeliveryMenuTab from '../components/DeliveryMenuTab';
import {navigate} from '../navigation/RootNavigation';
import CreateModal from '../components/CreateModal';
import {ModalConfirm, ModalAdult} from '../components/BOOTSTRAP';

const windowWidth = Dimensions.get('window').width;

const defaultData = [
  {
    key: 0,
    title: '김치찌개1',
    data: [
      {
        name: '김치찌개',
        stars: 3.0,
        img: require('./../images/listitemimg.png'),
        delPrice: '7,000',
        delTime: '13:00 ~ 20:00',
        contents: '강화김치찌개에서 가장 잘나가는 메인메뉴!',
        delKm: '1.2',
        new: true,
        adult: null,
        titlemenu: true,
      },
      {
        name: '김치찌개',
        stars: 3.5,
        img: require('./../images/listitemimg.png'),
        delPrice: '7,000',
        delTime: '14:00 ~ 20:00',
        contents: '강화김치찌개에서 가장 잘나가는 메인메뉴!',
        delKm: '1.2',
        new: true,
        adult: null,
        titlemenu: true,
      },
      {
        name: '강화김치찌개3',
        stars: 5.0,
        img: require('./../images/listitemimg.png'),
        delPrice: '7,000',
        delTime: '15:00 ~ 20:00',
        contents: '강화김치찌개에서 가장 잘나가는 메인메뉴!',
        delKm: '1.2',
        new: false,
        adult: null,
        titlemenu: false,
      },
      {
        name: '강화김치찌개2',
        stars: 2.5,
        img: require('./../images/listitemimg.png'),
        delPrice: '7,000',
        delTime: '10:00 ~ 20:00',
        contents: '강화김치찌개에서 가장 잘나가는 메인메뉴!',
        delKm: '1.2',
        new: false,
        adult: null,
        titlemenu: false,
      },
    ],
  },
  {
    key: 1,
    title: '된장찌개',
    data: [
      {
        name: '된장찌개',
        stars: 3.0,
        img: require('./../images/listitemimg.png'),
        delPrice: '7,000',
        delTime: '13:00 ~ 20:00',
        contents: '강화김치찌개에서 가장 잘나가는 메인메뉴!',
        delKm: '1.2',
        new: true,
        adult: null,
        titlemenu: true,
      },
      {
        name: '된장찌개',
        stars: 3.5,
        img: require('./../images/listitemimg.png'),
        delPrice: '7,000',
        delTime: '14:00 ~ 20:00',
        contents: '강화김치찌개에서 가장 잘나가는 메인메뉴!',
        delKm: '1.2',
        new: true,
        adult: null,

        titlemenu: true,
      },
    ],
  },
  {
    key: 2,
    title: '주류메뉴',
    data: [
      {
        name: '참이슬후레쉬',
        contents: null,
        img: null,
        delPrice: '4,000',
        adult: true,
      },
      {
        name: '참이슬후레쉬',
        contents: null,
        img: null,
        delPrice: '4,000',
        adult: true,
      },
    ],
  },
];

const reviewData = {
  data1: [
    {
      key: '0',
      name: '달달무슨달',
      contents: '김치찌개 강추 !!',
      date: '2021-02-02',
      img1: require('./../images/listitemimg.png'),
      adminreview: {
        review: '소중한 리뷰 감사합니다.^^',
      },
    },
    {
      key: '1',
      name: '홍길동',
      contents: '김치찌개 강추 !!',
      img1: null,
      date: '2021-01-02',
    },
  ],
  data2: [
    {
      key: '2',
      name: '강화김치찌개',
      contents: '김치찌개 강추 !!',
      img1: null,
      date: '2021-02-02',
    },
  ],
};

const imgDatas = [
  {
    id: 1,
    img: require('./../images/pic1.png'),
  },
  {
    id: 2,
    img: require('./../images/pic2.png'),
  },
  {
    id: 3,
    img: require('./../images/pic3.png'),
  },
  {
    id: 4,
    img: require('./../images/pic4.png'),
  },
];

const Tab = createMaterialTopTabNavigator();

export default function DeliVeryDetailScreen(props) {
  // const {NAME, STARS, DELPRICE, DELTIME} = route.params;
  const [faqRender, setfaqRender] = useState(defaultData);
  const [menu, setMenu] = useState();
  const [onAdultModal, setOnAdultModal] = useState(false);

  const scrollViewRef = React.useRef();
  const autoscroll = () => scrollViewRef.current.scrollToEnd({animated: true});

  return (
    <View style={{flex: 1}}>
      <FlatList
        ref={scrollViewRef}
        style={{backgroundColor: 'white', flex: 1}}
        contentContainerStyle={[{justifyContent: 'space-between'}]}
        ListHeaderComponent={
          <View>
            <View style={styles.container}>
              <View style={styles.detailBox}>
                <Text style={styles.detailTitle}>김치찌개</Text>
                <View style={{alignItems: 'center', flexDirection: 'row'}}>
                  <Stars
                    display={3}
                    spacing={5}
                    count={5}
                    starSize={17}
                    fullStar={require('../images/starFilled.png')}
                    emptyStar={require('../images/starEmpty.png')}
                  />
                  <Text style={{fontWeight: '600', marginLeft: 10}}>3</Text>
                </View>
                <View style={{width: '100%'}}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={styles.boldText}>영업시간 </Text>
                    <Text style={style.text2}>10:00 ~ 20:00</Text>
                  </View>
                  <View style={{height: 8}}></View>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={styles.boldText}>영업상태 </Text>
                    <Text style={style.text2}>영업중</Text>
                  </View>
                </View>

                <Image
                  source={require('../images/line1.png')}
                  style={{width: '100%', marginBottom: -15}}></Image>
                <View style={styles.callButton}>
                  <TouchableOpacity>
                    <View style={styles.callBtnItem}>
                      <Image source={require('../images/callicon.png')}></Image>
                      <Text style={style.text2}> 전화걸기</Text>
                    </View>
                  </TouchableOpacity>
                  <Image source={require('../images/line2.png')}></Image>

                  <TouchableOpacity>
                    <View style={styles.callBtnItem}>
                      <Image
                        source={require('../images/hearticon.png')}></Image>
                      <Text style={style.text2}> 찜하기</Text>
                    </View>
                  </TouchableOpacity>
                  <Image source={require('../images/line2.png')}></Image>

                  <TouchableOpacity>
                    <View style={styles.callBtnItem}>
                      <Image
                        source={require('../images/shareicon.png')}></Image>
                      <Text style={style.text2}> 공유하기</Text>
                    </View>
                  </TouchableOpacity>
                </View>
                <Image
                  source={require('../images/line1.png')}
                  style={{width: '100%', marginTop: -15}}></Image>
                <TouchableOpacity
                  style={styles.couponeButton}
                  onPress={() => navigate('Coupon')}>
                  <Image source={require('../images/coupon.png')}></Image>
                  <Text style={style.text2}> 쿠폰 다운로드 하기 </Text>
                  <Image source={require('../images/download.png')}></Image>
                </TouchableOpacity>
              </View>
            </View>
            {/* 회색공백 */}
            <View style={{height: 10, backgroundColor: '#F5F5F5'}}></View>

            {/* 배달주문 */}
            {/* 탭바 */}
            <DetailDeliveryOrderTab1 />
            <DetailDeliveryOrderTab2 setMenu={setMenu} />
          </View>
        }
        // keyExtractor={(item, index) => item + index}
        renderItem={({item}) =>
          menu === '1' ? (
            <RenderFaqItem
              item={item}
              setOnAdultModal={setOnAdultModal}
              autoscroll={autoscroll}
            />
          ) : null
        }
        data={faqRender}
      />
      <ModalAdult
        open={onAdultModal}
        cancel={() => setOnAdultModal(false)}
        confirm={() => {}}
      />
      {/* 바텀 장바구니 버튼 */}

      {/* Footer */}
      <SafeAreaView>
        <View
          style={{
            backgroundColor: '#E51A47',
            // borderTopLeftRadius: 15,
            // borderTopRightRadius: 15,
            // borderBottomLeftRadius: 15,
            // borderBottomRightRadius: 15,
            borderRadius: 15,
          }}>
          <TouchableOpacity
            style={[
              styles.footer,
              {flexDirection: 'row', alignItems: 'center'},
            ]}
            onPress={() => {
              navigate('Cart');
            }}>
            <Image source={require('../images/footercart.png')}></Image>
            <Text
              style={[
                style.text2,
                {color: 'white', fontWeight: 'bold', marginLeft: 5},
              ]}>
              장바구니 (1)
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
}

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: 'black',
    accent: '#f1c40f',
  },
};

function RenderFaqItem({item, index, setOnAdultModal, autoscroll}) {
  const [expanded, setExpended] = React.useState(true);
  return (
    <PaperProvider theme={theme}>
      <View>
        <List.Accordion
          id={index}
          expanded={expanded}
          title={item.title}
          titleStyle={{fontWeight: '700', fontSize: 18}}
          style={{backgroundColor: '#F9F9F9'}}
          onPress={() => {
            autoscroll();
            setExpended(!expanded);
          }}>
          {item.data.map((item, index) => {
            return (
              <List.Item
                key={index}
                onPress={() => {
                  item.adult !== null
                    ? setOnAdultModal(true)
                    : navigate('DetailMenu');
                }}
                title={
                  <View>
                    <View style={{flexDirection: 'row'}}>
                      <Text
                        style={{
                          fontSize: 16,
                          fontWeight: 'bold',
                          marginRight: 10,
                        }}>
                        {item.name}
                      </Text>
                      {item.titlemenu ? (
                        <View
                          style={{
                            backgroundColor: '#E51A47',
                            height: 20,
                            width: 37,
                            borderRadius: 3,
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginRight: 5,
                          }}>
                          <Text style={{color: 'white'}}>대표</Text>
                        </View>
                      ) : null}
                      {item.adult ? (
                        <Image
                          source={require('../images/deliverydetailadult1.png')}></Image>
                      ) : null}
                    </View>
                    {item.contents !== null ? (
                      <Text style={{color: '#777777'}}>{item.contents}</Text>
                    ) : null}
                    <Text style={{marginTop: 15, fontSize: 16}}>
                      {item.delPrice}원
                    </Text>
                  </View>
                }
                right={() =>
                  item.img !== null ? (
                    <Image
                      source={item.img}
                      style={{
                        width: 90,
                        height: 90,
                        marginRight: 5,
                        marginVertical: 10,
                      }}></Image>
                  ) : null
                }
                titleNumberOfLines={0}
                titleStyle={{marginVertical: 15, marginRight: 5}}
                style={{backgroundColor: 'white', flex: 1}}
              />
            );
          })}
        </List.Accordion>
        <View style={{backgroundColor: '#E5E5E5', height: 1}}></View>
      </View>
    </PaperProvider>
  );
}

// 탭 메뉴 1
function DetailDeliveryOrderTab1() {
  const [tabMenu1, setTabMenu1] = useState(true);

  return (
    <View style={{flex: 1}}>
      {tabMenu1 ? (
        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <TouchableOpacity
              style={{
                height: 50,
                justifyContent: 'center',
                borderBottomWidth: 2,
                borderBottomColor: '#E51A47',
                width: '50%',
              }}
              onPress={() => {
                setTabMenu1(true);
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  color: '#E51A47',
                  fontSize: 17,
                  fontWeight: 'bold',
                }}>
                배달주문
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                height: 50,
                justifyContent: 'center',
                borderBottomWidth: 2,
                borderBottomColor: '#E5E5E5',
                width: '50%',
              }}
              onPress={() => {
                setTabMenu1(false);
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  color: '#777777',
                  fontSize: 17,
                }}>
                포장/방문 주문
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <View style={{padding: 15, backgroundColor: 'white'}}>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.title}>최소주문금액</Text>
                <Text style={style.text2}>10,000 원</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text style={[styles.title, {marginRight: 48}]}>배달시간</Text>
                <Text style={style.text2}>10,000 원</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text style={[styles.title, {marginRight: 48}]}>배달비용</Text>
                <Text style={style.text2}>10,000 원</Text>
              </View>
            </View>
            <View style={{height: 10, backgroundColor: '#F5F5F5'}}></View>
            {/* <DeliveryMenuTab></DeliveryMenuTab> */}
          </View>
        </View>
      ) : (
        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <TouchableOpacity
              style={{
                height: 50,
                justifyContent: 'center',
                borderBottomWidth: 2,
                borderBottomColor: '#E5E5E5',
                width: '50%',
              }}
              onPress={() => {
                setTabMenu1(true);
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  color: '#777777',
                  fontSize: 17,
                }}>
                배달주문
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                height: 50,
                justifyContent: 'center',
                borderBottomWidth: 2,
                borderBottomColor: '#E51A47',
                width: '50%',
              }}
              onPress={() => {
                setTabMenu1(false);
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  color: '#E51A47',
                  fontSize: 17,
                  fontWeight: 'bold',
                }}>
                포장/방문 주문
              </Text>
            </TouchableOpacity>
          </View>

          <View>
            <View style={{padding: 15, backgroundColor: 'white'}}>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.title}>최소주문금액</Text>
                <Text style={style.text2}>10,000 원</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text style={[styles.title, {marginRight: 48}]}>조리시간</Text>
                <Text style={style.text2}>10,000 원</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text style={[styles.title, {marginRight: 48}]}>위치안내</Text>
                <Text style={style.text2}>10,000 원</Text>
              </View>
              <View>
                <Image
                  source={require('../images/map.png')}
                  style={{resizeMode: 'contain', width: '100%'}}></Image>
              </View>
            </View>
            <View style={{height: 10, backgroundColor: '#F5F5F5'}}></View>
            {/* <DeliveryMenuTab></DeliveryMenuTab> */}
          </View>
        </View>
      )}
    </View>
  );
}

// 탭 메뉴 2
const DetailDeliveryOrderTab2 = props => {
  const [tabMenu2, setTabMenu2] = useState('1');
  useEffect(() => {
    props.setMenu(tabMenu2);
  });

  return (
    <View style={{width: '100%'}}>
      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <TouchableOpacity
            style={{
              height: 50,
              justifyContent: 'center',
              borderBottomWidth: 2,
              borderBottomColor: tabMenu2 === '1' ? '#E51A47' : '#E5E5E5',
              flex: 1,
            }}
            onPress={() => {
              setTabMenu2('1');
            }}>
            <Text
              style={{
                textAlign: 'center',
                color: tabMenu2 === '1' ? '#E51A47' : '#777777',
                fontWeight: tabMenu2 === '1' ? 'bold' : 'normal',
                fontSize: 17,
              }}>
              메뉴
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: 50,
              justifyContent: 'center',
              borderBottomWidth: 2,
              borderBottomColor: tabMenu2 === '2' ? '#E51A47' : '#E5E5E5',
              flex: 1,
            }}
            onPress={() => {
              setTabMenu2('2');
            }}>
            <Text
              style={{
                textAlign: 'center',
                color: tabMenu2 === '2' ? '#E51A47' : '#777777',
                fontWeight: tabMenu2 === '2' ? 'bold' : 'normal',
                fontSize: 17,
              }}>
              매장정보
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: 50,
              justifyContent: 'center',
              borderBottomWidth: 2,
              borderBottomColor: tabMenu2 === '3' ? '#E51A47' : '#E5E5E5',
              flex: 1,
            }}
            onPress={() => {
              setTabMenu2('3');
            }}>
            <Text
              style={{
                textAlign: 'center',
                color: tabMenu2 === '3' ? '#E51A47' : '#777777',
                fontWeight: tabMenu2 === '3' ? 'bold' : 'normal',
                fontSize: 17,
              }}>
              리뷰
            </Text>
          </TouchableOpacity>
        </View>

        {tabMenu2 === '2' ? <DetailDeliveryMenuTab2 /> : null}
        {tabMenu2 === '3' ? <DetailDeliveryMenuTab3 /> : null}
      </View>
    </View>
  );
};

function DetailDeliveryMenuTab2() {
  const [imgData, setImgData] = React.useState(imgDatas);
  // const [imageModal, setImageModal] = React.useState(false);
  // const [modalVisible, setModalVisible] = useState(false);
  const [onConfirm, setOnConfirm] = React.useState(false);

  const onStart = () => {
    setModalVisible(!modalVisible);
  };

  // const toggleImageModal = () => {
  //   setImageModal(!imageModal);
  // };
  return (
    <View style={{backgroundColor: 'white'}}>
      <View style={{backgroundColor: 'white'}}>
        <View
          style={{
            height: 50,
            justifyContent: 'center',
            backgroundColor: '#F9F9F9',
            borderBottomColor: '#E5E5E5',
            borderBottomWidth: 0.5,
            width: '100%',
            paddingHorizontal: 15,
          }}>
          <Text style={{fontSize: 18}}>가게소개</Text>
        </View>
        <View
          style={{
            marginTop: 15,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <FlatList
            data={imgData}
            keyExtractor={item => item.id}
            renderItem={({item, index}) => (
              <View>
                <TouchableOpacity onPress={() => setOnConfirm(true)}>
                  <Image
                    id={index}
                    source={item.img}
                    style={[
                      styles.img,
                      {width: windowWidth / 2.22, height: windowWidth / 2.22},
                    ]}
                  />
                  {/* 이미지 모달 위치 */}

                  {/* <CreateModal
                    modalVisible={modalVisible}
                    setModalVisible={setModalVisible}
                    body={<Image source={item.img}></Image>}
                  /> */}
                </TouchableOpacity>
              </View>
            )}
            numColumns={2}></FlatList>
        </View>
        <View style={{padding: 15}}>
          <Text style={{fontSize: 16}}>
            오늘도 저희 이차돌창원중동점 차돌박이 전문점을 찾아주신 고객님께
            감사드립니다.{'\n'}배달 영업시간 10:00~24:00입니다.{'\n'}
            이차돌창원중동점은 2년의 시간동안 고객과의 소통으로 만들어진
            가게입니다.
          </Text>
        </View>
        <View style={{width: '100%', paddingHorizontal: 15}}>
          <Image
            source={require('../images/map.png')}
            style={{resizeMode: 'cover', width: '100%'}}></Image>
        </View>
        <View>
          <View
            style={{
              height: 50,
              justifyContent: 'center',
              backgroundColor: '#F9F9F9',
              borderBottomColor: '#E5E5E5',
              borderBottomWidth: 0.5,
              width: '100%',
              paddingHorizontal: 15,
            }}>
            <Text style={{fontSize: 18}}>영업정보</Text>
          </View>
          <View>
            <View
              style={{
                padding: 15,
                backgroundColor: 'white',
                flexDirection: 'row',
              }}>
              <View style={{marginRight: 15}}>
                <Text style={styles.title}>운영시간</Text>
                <Text style={styles.title}>휴무일</Text>
                <Text style={styles.title}>전화번호</Text>
                <Text style={styles.title}>편의시설</Text>
              </View>
              <View style={{marginRight: 15}}>
                <Text style={styles.contents}>
                  매일 - 오전 10:00 ~ 오후 12:00
                </Text>
                <Text style={styles.contents}>매주 월요일</Text>
                <Text style={styles.contents}>070-1234-5678</Text>
                <Text style={styles.contents}>
                  주차, 단체석, 유아용 의자, 무선인터넷
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View>
          <View
            style={{
              height: 50,
              justifyContent: 'center',
              backgroundColor: '#F9F9F9',
              borderBottomColor: '#E5E5E5',
              borderBottomWidth: 0.5,
              width: '100%',
              paddingHorizontal: 15,
            }}>
            <Text style={{fontSize: 18}}>안내 및 혜택</Text>
          </View>
          <View>
            <View
              style={{
                padding: 15,
                backgroundColor: 'white',
                flexDirection: 'row',
              }}>
              <View style={{}}>
                <Text style={styles.contents}>
                  리뷰 이벤트 진행중이니 리뷰에서 확인 부탁드려요{'\n'}
                  {'\n'}소비자가 뽑은 한국의 영향력 있는 브랜드 대상{'\n'}
                  {'\n'}이차돌 특성상 상추 깻잎 등 쌈을 제공하지 않으니,{'\n'}
                  다양한 사이드 메뉴와 함께 곁들여 드시길 권장하오며,{'\n'}
                  손님들께 양해 말씀을 드립니다. 감사합니다.
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <ModalConfirm
        open={onConfirm}
        cancel={() => setOnConfirm(false)}
        confirm={() => {}}
      />
    </View>
  );
}

function DetailDeliveryMenuTab3() {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 15,
        }}>
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>
          사용자 리뷰 577개
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigate('WriteReview1');
          }}>
          <Image
            source={require('../images/deliverydetailwritereview.png')}
            style={{width: 101, height: 35}}></Image>
        </TouchableOpacity>
      </View>
      <FlatList
        data={reviewData.data1}
        renderItem={RenderReviewList}
        keyExtractor={item => item.key}></FlatList>
    </View>
  );
}

const RenderReviewList = ({item}) => {
  return (
    <View style={{padding: 15, backgroundColor: 'white'}}>
      <View style={{flexDirection: 'row'}}>
        <Text style={[styles.title, {marginRight: 10}]}>{item.name}</Text>
        <Text style={{color: '#777777'}}>{item.date}</Text>
      </View>
      <ReviewStars />
      <View>
        <Text style={[style.text2, {marginVertical: 10}]}>{item.contents}</Text>
      </View>
      {item.img1 !== null ? (
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Image
            source={item.img1}
            style={{
              width: windowWidth / 3.4,
              height: windowWidth / 3.4,
            }}></Image>
          <Image
            source={item.img1}
            style={{
              width: windowWidth / 3.4,
              height: windowWidth / 3.4,
            }}></Image>
          <Image
            source={item.img1}
            style={{
              width: windowWidth / 3.4,
              height: windowWidth / 3.4,
            }}></Image>
        </View>
      ) : (
        <View></View>
      )}
      <View
        style={{
          padding: 15,
          flexDirection: 'row',
          backgroundColor: '#F9F9F9',
          borderColor: '#E5E5E5',
          borderWidth: 1,
          borderRadius: 5,
          marginTop: 10,
        }}>
        <Image source={require('../images/adminreviewicon.png')}></Image>
        <View style={{marginLeft: 15}}>
          <View style={{flexDirection: 'row'}}>
            <Text style={[styles.title, {marginRight: 10}]}>강화김치찌개</Text>
            <Text style={{color: '#777777'}}>2021.0.1.02</Text>
          </View>
          <Text style={style.text2}>소중한 리뷰 감사합니다</Text>
        </View>
      </View>
      <View style={{height: 20}}></View>
      <View style={{height: 1, backgroundColor: '#E5E5E5'}}></View>
    </View>
  );
};

const ReviewStars = () => {
  return (
    <View style={{alignItems: 'flex-start'}}>
      <Stars
        display={3.67}
        spacing={2}
        count={5}
        starSize={17}
        fullStar={require('../images/reviewstar.png')}
        emptyStar={require('../images/reviewstar.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    padding: 15,
  },
  detailBox: {
    borderWidth: 0.5,
    borderColor: '#E5E5E5',
    height: 329,
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
  callButton: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    height: 45,
    alignItems: 'center',
  },
  couponeButton: {
    height: 50,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#FEEDEC',
    borderRadius: 6,
  },
  detailTitle: {fontSize: 24, fontWeight: 'bold'},
  boldText: {fontSize: 16, fontWeight: 'bold'},
  callBtnItem: {flexDirection: 'row', alignItems: 'center'},
  footer:
    Platform.OS !== 'ios'
      ? {
          height: 50,
          backgroundColor: '#E51A47',
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          alignItems: 'center',
          justifyContent: 'center',
        }
      : {
          height: 50,
          backgroundColor: '#E51A47',
          borderRadius: 15,
          alignItems: 'center',
          justifyContent: 'center',
        },
  title: {marginRight: 20, marginBottom: 10, fontSize: 16, fontWeight: 'bold'},
  contents: {marginBottom: 10, fontSize: 16},
});
