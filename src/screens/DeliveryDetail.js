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

import axios from './../api/axios';

import style from '../style/style';
import {Footer} from 'native-base';
import {TextInput} from 'react-native-paper';
import CreateDeliveryList from '../components/CreateDeliveryList';
import {Platform} from 'react-native';
import {navigate} from '../navigation/RootNavigation';
import {ModalConfirm, ModalAdult} from '../components/BOOTSTRAP';

const windowWidth = Dimensions.get('window').width;

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

export default function DeliVeryDetailScreen({route}) {
  const {
    sl_sn,
    min_order_price,
    sl_delv_time,
    delv_price,
    sl_soge,
    sl_addr1,
    sl_biztel,
    shop_review_list,
    sl_title,
    review_avg,
  } = route.params;
  const [menu, setMenu] = useState();
  const [onAdultModal, setOnAdultModal] = useState(false);

  const [shopMenuInfo, setShopMenuInfo] = React.useState([]);
  const [reviewList, setReviewList] = React.useState([]);
  const [reviewTotalcount, setReviewTotalCount] = React.useState();

  React.useEffect(() => {
    let dataToSend = {sl_sn: sl_sn};
    let formBody = [];
    for (let key in dataToSend) {
      let encodedKey = encodeURIComponent(key);
      let encodedValue = encodeURIComponent(dataToSend[key]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    formBody = formBody.join('&');
    axios
      .post(
        'shop_menuinfo.php',
        // mb_id: userEmail,
        // mb_password: userPassword,
        formBody,
      )
      .then(function (response) {
        setShopMenuInfo(response.data.rowdata);

        // console.log(response.data.rowdata);
        console.log(response.data.rowdata);
        console.log('메뉴 상세정보 통신 성공');
      })
      .catch(function (error) {
        console.log(error);
        console.log('통신 실패');
      });
  }, []);

  React.useEffect(() => {
    let dataToSend = {sl_sn: sl_sn};
    let formBody = [];
    for (let key in dataToSend) {
      let encodedKey = encodeURIComponent(key);
      let encodedValue = encodeURIComponent(dataToSend[key]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    formBody = formBody.join('&');
    axios
      .post(
        'shop_review.php',
        // mb_id: userEmail,
        // mb_password: userPassword,
        formBody,
      )
      .then(function (response) {
        setReviewList(response.data.rowdata);
        setReviewTotalCount(response.data.totalcount);

        console.log(response.data.rowdata);
        console.log('리뷰 통신 성공');
      })
      .catch(function (error) {
        console.log(error);
        console.log('통신 실패');
      });
  }, []);

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
                <Text style={styles.detailTitle}>{sl_title}</Text>
                <View style={{alignItems: 'center', flexDirection: 'row'}}>
                  <Stars
                    display={3}
                    spacing={5}
                    count={review_avg - 3}
                    starSize={17}
                    fullStar={require('../images/starFilled.png')}
                    emptyStar={require('../images/starEmpty.png')}
                  />
                  <Text style={{fontWeight: '600', marginLeft: 10}}>
                    {review_avg}
                  </Text>
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
            <DetailDeliveryOrderTab1
              min_order_price={min_order_price}
              sl_delv_time={sl_delv_time}
              delv_price={delv_price}
              sl_addr1={sl_addr1}
            />
            <DetailDeliveryOrderTab2
              setMenu={setMenu}
              sl_soge={sl_soge}
              sl_biztel={sl_biztel}
              reviewList={reviewList}
              reviewTotalcount={reviewTotalcount}
              sl_title={sl_title}
            />
          </View>
        }
        // keyExtractor={(item, index) => item + index}
        data={shopMenuInfo}
        renderItem={({item}) =>
          menu === '1' ? (
            <RenderFaqItem
              item={item}
              sl_sn={sl_sn}
              setOnAdultModal={setOnAdultModal}
              autoscroll={autoscroll}
              min_order_price={min_order_price}
              // shopMenuInfo={shpoMenuInfo}
            />
          ) : null
        }
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

function RenderFaqItem({
  item,
  index,
  setOnAdultModal,
  autoscroll,
  shpoMenuInfo,
  sl_sn,
  min_order_price,
}) {
  const [expanded, setExpended] = React.useState(true);
  return (
    <PaperProvider theme={theme}>
      <View>
        <List.Accordion
          id={item.menu_ca_id}
          expanded={expanded}
          title={item.ca_name}
          titleStyle={{fontWeight: '700', fontSize: 18}}
          style={{backgroundColor: '#F9F9F9'}}
          onPress={() => {
            autoscroll();
            setExpended(!expanded);
          }}>
          {item.menu_list.map((item, index) => {
            return (
              <List.Item
                key={item.it_id}
                onPress={() => {
                  item.adult_flag === 'Y'
                    ? setOnAdultModal(true)
                    : navigate('DetailMenu', {
                        it_id: item.it_id,
                        mnu_name: item.mnu_name,
                        mnu_price: item.mnu_price,
                        mnu_stock: item.mnu_stock,
                        mnu_pic: item.mnu_pic,
                        sl_sn: sl_sn,
                        min_order_price: min_order_price,
                      });
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
                        {item.mnu_name}
                      </Text>
                      {item.mnu_stock === 'Y' ? (
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
                      {item.adult_flag === 'Y' ? (
                        <Image
                          source={require('../images/deliverydetailadult1.png')}></Image>
                      ) : null}
                    </View>
                    {item.mnu_soge !== '' ? (
                      <Text style={{color: '#777777'}}>{item.mnu_soge}</Text>
                    ) : null}
                    <Text style={{marginTop: 15, fontSize: 16}}>
                      {item.mnu_price}원
                    </Text>
                  </View>
                }
                right={() =>
                  item.mnu_pic !== '' ? (
                    <Image
                      // source={item.img}
                      source={{uri: item.mnu_pic}}
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
function DetailDeliveryOrderTab1({
  min_order_price,
  sl_delv_time,
  delv_price,
  sl_addr1,
}) {
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
                <Text style={style.text2}>{min_order_price} 원</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text style={[styles.title, {marginRight: 48}]}>배달시간</Text>
                <Text style={style.text2}>{sl_delv_time} 분</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text style={[styles.title, {marginRight: 48}]}>배달비용</Text>
                <Text style={style.text2}>{delv_price} 원</Text>
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
                <Text style={style.text2}>{min_order_price} 원</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text style={[styles.title, {marginRight: 48}]}>조리시간</Text>
                <Text style={style.text2}>10,000 원</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text style={[styles.title, {marginRight: 48}]}>위치안내</Text>
                <Text style={style.text2}>{sl_addr1}</Text>
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

        {tabMenu2 === '2' ? (
          <DetailDeliveryMenuTab2
            sl_biztel={props.sl_biztel}
            sl_soge={props.sl_soge}
          />
        ) : null}
        {tabMenu2 === '3' ? (
          <DetailDeliveryMenuTab3
            reviewList={props.reviewList}
            reviewTotalcount={props.reviewTotalcount}
            sl_title={props.sl_title}
          />
        ) : null}
      </View>
    </View>
  );
};

function DetailDeliveryMenuTab2({sl_biztel, sl_soge}) {
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
                </TouchableOpacity>
              </View>
            )}
            numColumns={2}></FlatList>
        </View>
        <View style={{padding: 15}}>
          <Text style={{fontSize: 16}}>{sl_soge}</Text>
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
                <Text style={styles.contents}>{sl_biztel}</Text>
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

function DetailDeliveryMenuTab3(props) {
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
          사용자 리뷰 {props.reviewTotalcount}개
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
        data={props.reviewList}
        renderItem={({item}) => (
          <RenderReviewList item={item} sl_title={props.sl_title} />
        )}
        keyExtractor={item => item.key}></FlatList>
    </View>
  );
}

const RenderReviewList = ({item, sl_title}) => {
  return (
    <View style={{padding: 15, backgroundColor: 'white'}}>
      <View style={{flexDirection: 'row'}}>
        <Text style={[styles.title, {marginRight: 10}]}>{item.is_name}</Text>
        <Text style={{color: '#777777'}}>{item.date}</Text>
      </View>
      <ReviewStars is_score={item.is_score} />
      <View>
        <Text style={[style.text2, {marginVertical: 10}]}>
          {item.is_content}
        </Text>
      </View>
      {item.is_img !== '' ? (
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Image
            source={{uri: item.is_img}}
            style={{
              width: windowWidth / 3.4,
              height: windowWidth / 3.4,
            }}></Image>
          {item.is_img2 !== '' ? (
            <Image
              source={{uri: item.is_img2}}
              style={{
                width: windowWidth / 3.4,
                height: windowWidth / 3.4,
              }}
            />
          ) : null}
          {item.is_img3 !== '' ? (
            <Image
              source={{uri: item.is_img3}}
              style={{
                width: windowWidth / 3.4,
                height: windowWidth / 3.4,
              }}
            />
          ) : null}
        </View>
      ) : (
        <View></View>
      )}
      {item.is_re !== '' ? (
        <>
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
                <Text style={[styles.title, {marginRight: 10}]}>
                  {sl_title}
                </Text>
                <Text style={{color: '#777777'}}>{item.is_re_date}</Text>
              </View>
              <Text style={style.text2}>{item.is_re}</Text>
            </View>
          </View>
          <View style={{height: 20}}></View>
        </>
      ) : null}
      <View style={{height: 1, backgroundColor: '#E5E5E5'}}></View>
    </View>
  );
};

const ReviewStars = props => {
  return (
    <View style={{alignItems: 'flex-start'}}>
      <Stars
        display={3.67}
        spacing={2}
        count={props.is_score - 3}
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
