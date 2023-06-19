export const pageData = [
  // 레스토랑
  {
    img:"/img/icons/restaurant.png",
    title:"Restaurant",
    desc: "레스토랑",
    url:"restaurant",
    data:[
      // 식당
      {
        filter:"restaurant",
        id:0,
        title: '온센',
        openingHours: '11:00-20:30',
        openingHoursMemo: '무휴',
        img: '',
        menu:"텐동",
        googleMaps: '',
        contact:"032-214-5100",
        reservation:"",
        room:"",
        distance:"0m",
        memo:"",
        sale:"",
      },
      {
        filter:"restaurant",
        id:0,
        title: 'Test',
        openingHours: '11:00-20:30',
        openingHoursMemo: '무휴',
        img: '',
        menu:"대표음식",
        googleMaps: '',
        contact:"032-214-5100",
        reservation:"",
        room:"",
        distance:"0m",
        memo:"",
        sale:"10%",
      },
      // 카페
      {
        filter:"cafe",
        id:0,
        title: '카페평상인',
        openingHours: '10:00-22:00',
        openingHoursMemo: '무휴',
        img: '',
        menu:"아메리카노",
        googleMaps: '',
        contact:"0507-1425-0079",
        reservation:"",
        room:"",
        distance:"2.9km",
        memo:"",
        sale:"",
      },
      // 조식
      {
        filter:"breakfast",
        id:0,
        title: '파리바게트영종현대',
        openingHours: '10:00-22:00',
        openingHoursMemo: '',
        img: '',
        menu:"",
        googleMaps: '',
        contact:"032-746-0707",
        reservation:"",
        room:"",
        distance:"390m",
        memo:"",
        sale:"",
      },

    ]
  },  
  // 편의점
  {
    img:"/img/icons/convenience_store.png",
    title:"convenience_store",
    desc: "편의점",
    url:"convenience-store",
    data:[
      {
        id:0,
        title: 'CU영종블루오션점',
        openingHours: '01:00-24:00',
        openingHoursMemo: '',
        img: '/img/convenience_store/cu.jpg',
        googleMaps: 'https://www.google.co.kr/maps/place/%EC%9D%B8%EC%B2%9C%EA%B4%91%EC%97%AD%EC%8B%9C+%EC%A4%91%EA%B5%AC+%EC%98%81%EC%A2%85%EB%8C%80%EB%A1%9C+911/data=!4m6!3m5!1s0x357b83ab00a398dd:0x7e57b063c649df02!8m2!3d37.4873526!4d126.5635199!16s%2Fg%2F11jz7sdtgm?entry=ttu',
      },
      {
          id:1,
          title: '미니스톱 영종웰메이드점',
          openingHours: '01:00-24:00',
          openingHoursMemo: '',
          img: '/img/convenience_store/ministop.jpg',
          googleMaps: 'https://www.google.co.kr/maps/place/%EC%9D%B8%EC%B2%9C%EA%B4%91%EC%97%AD%EC%8B%9C+%EC%A4%91%EA%B5%AC+%ED%95%98%EB%8A%98%EB%B3%84%EB%B9%9B%EB%A1%9C65%EB%B2%88%EA%B8%B8+7-11/data=!3m1!4b1!4m6!3m5!1s0x357b83ab6c546a73:0xc8593b9c83c7fa53!8m2!3d37.4881418!4d126.5643488!16s%2Fg%2F11tjfgpnx8?entry=ttu',
      },
      {
          id:2,
          title: 'GS25 영종리베라점',
          openingHours: '01:00-24:00',
          openingHoursMemo: '',
          img: '/img/convenience_store/gs.jpg',
          googleMaps: 'https://www.google.co.kr/maps/place/GS25%EC%98%81%EC%A2%85%EB%A6%AC%EB%B2%A0%EB%9D%BC%EC%A0%90/data=!3m1!4b1!4m6!3m5!1s0x357b8324efa557a3:0xf5e239135dc35957!8m2!3d37.4851796!4d126.5615557!16s%2Fg%2F11j8_tqcgd?entry=ttu',
      }
    ]
  },
  // 약국  
  {
    img:"/img/icons/pharmacy.png",
    title:"Pharmacy",
    desc: "약국",
    url:"pharmacy",
    data: [
      {
          id:0,
          title: '하늘365약국',
          openingHours: '09:00-22:00',
          openingHoursMemo: '일요일 영업',

          img: '../img/pharmacy/p_0.jpg',
          googleMaps: 'https://www.google.co.kr/maps/place/%EC%9D%B8%EC%B2%9C%EA%B4%91%EC%97%AD%EC%8B%9C+%EC%A4%91%EA%B5%AC+%ED%95%98%EB%8A%98%EB%8B%AC%EB%B9%9B%EB%A1%9C+84/data=!3m1!4b1!4m6!3m5!1s0x357b83a9d542d405:0xb1ff593e13f04cfe!8m2!3d37.4867592!4d126.5581627!16s%2Fg%2F11sb7frj19?entry=ttu',
      },
      {
          id:1,
          title: '미소약국',
          openingHours: '09:00-22:00',
          openingHoursMemo: '일요일 유동적 휴무',

          img: '../img/pharmacy/p_1.jpg',
          googleMaps: 'https://www.google.co.kr/maps/place/%ED%95%B4%EC%86%94%ED%94%84%EB%9D%BC%EC%9E%90/data=!3m1!4b1!4m6!3m5!1s0x357b976f38f7c457:0xcf8cd451e2546b98!8m2!3d37.4884843!4d126.5634308!16s%2Fg%2F11h58f9xh2?entry=ttu',
      },
      {
          id:2,
          title: '영종올리브약국',
          openingHours: '09:00-20:00',
          openingHoursMemo: '일요일 휴무',

          img: '../img/pharmacy/p_2.jpg',
          googleMaps: 'https://www.google.co.kr/maps/place/%EC%9D%B8%EC%B2%9C%EA%B4%91%EC%97%AD%EC%8B%9C+%EC%A4%91%EA%B5%AC+%ED%95%98%EB%8A%98%EB%B3%84%EB%B9%9B%EB%A1%9C65%EB%B2%88%EA%B8%B8+7-9/data=!3m1!4b1!4m6!3m5!1s0x357b83ab662580d1:0x70f71a9083524932!8m2!3d37.4884886!4d126.5646288!16s%2Fg%2F11sb7d91m5?entry=ttu',
      }
    ]
  },  
  // 병원
  {
    img:"/img/icons/hospital.png",
    title:"hospital",
    desc: "병원",
    url: "hospital",
    data:[]
  },
  // 생활용품 판매점  
  {
    img:"/img/icons/household_goods_store.png",
    title:"household goods store",
    desc: "생활용품판매점",
    url: "household",
    data:[]
  },  
  // 코인세탁소
  {
    img:"/img/icons/coin_laundry.png",
    title:"coin laundry",
    desc: "코인세탁소",
    url: "coin-laundry",
    data:[
      {
        id:0,
        title: '버블맨24 인천영종도점',
        openingHours: '00:00-24:00',
        openingHoursMemo: '',
        img: '/img/coin_laundry/l_0.jpg',
        googleMaps: 'https://www.google.co.kr/maps/place/%EC%9D%B8%EC%B2%9C%EA%B4%91%EC%97%AD%EC%8B%9C+%EC%A4%91%EA%B5%AC+%EC%9E%90%EC%97%B0%EB%8C%80%EB%A1%9C+28+101%ED%98%B8/data=!3m1!4b1!4m5!3m4!1s0x357b83abd14c779f:0x817c82e110abcb4f!8m2!3d37.4883172!4d126.5611399?entry=ttu',
      },
      {
          id:1,
          title: '화이트365 영종도점',
          openingHours: '00:00-24:00',
          openingHoursMemo: '',
          img: '/img/coin_laundry/l_1.jpg',
          googleMaps: 'https://www.google.co.kr/maps/search/%EC%9D%B8%EC%B2%9C+%EC%A4%91%EA%B5%AC+%EC%9E%90%EC%97%B0%EB%8C%80%EB%A1%9C+37+%EC%8A%A4%EC%B9%B4%EC%9D%B4%EA%B0%80%EB%93%A0+1%EC%B8%B5+107%ED%98%B8/data=!3m1!4b1?entry=ttu',
      },
      {
          id:1,
          title: '크린토피아 코인워시365 인천영종스카이점',
          openingHours: '00:00-24:00',
          openingHoursMemo: '',
          img: '',
          googleMaps: 'https://www.google.co.kr/maps/place/%EC%9D%B8%EC%B2%9C%EA%B4%91%EC%97%AD%EC%8B%9C+%EC%A4%91%EA%B5%AC+%ED%95%98%EB%8A%98%EC%A4%91%EC%95%99%EB%A1%9C195%EB%B2%88%EA%B8%B8+14/data=!3m1!4b1!4m6!3m5!1s0x357b83abe0202a83:0xf058daee11fa80ba!8m2!3d37.4893272!4d126.5607988!16s%2Fg%2F11sb78dp_b?entry=ttu',
      },
    ]
  },  
  // 환전소
  {
    img:"/img/icons/exchange.png",
    title:"exchange",
    desc: "환전소",
    url: "exchange",
    data:[]
  },  
  // 관광지
  {
    img:"/img/icons/tourist.png",
    title:"tourist",
    desc: "관광지",
    url: "tourist",
    data:[]
  },
]