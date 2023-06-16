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
        address: '인천 중구 영종대로911',
        img: '',
        menu:"텐동",
        googleMaps: '',
        contact:"032-214-5100",
        reservation:"",
        room:"",
        distance:"0m",
        memo:"",
      },
      // 카페
      {
        filter:"cafe",
        id:0,
        title: '카페평상인',
        openingHours: '10:00-22:00',
        openingHoursMemo: '무휴',
        address: '인천 중구 영종진광장로 39 오션테라스 카페 평상인',
        img: '',
        menu:"아메리카노 5,500",
        googleMaps: '',
        contact:"0507-1425-0079",
        reservation:"",
        room:"",
        distance:"2.9km",
        memo:"",
      },
      // 조식
      {
        filter:"breakfast",
        id:0,
        title: '파리바게트영종현대',
        openingHours: '10:00-22:00',
        openingHoursMemo: '',
        address: '인천 중구 하늘별빛로65번길 7-4(중산동) 현대프라자',
        img: '',
        menu:"",
        googleMaps: '',
        contact:"032-746-0707",
        reservation:"",
        room:"",
        distance:"390m",
        memo:"",
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
        address: '인천 중구 영종대로 911',
        img: '/img/convenience_store/cu.jpg',
        googleMaps: '',
      },
      {
          id:1,
          title: '미니스톱 영종웰메이드점',
          openingHours: '01:00-24:00',
          openingHoursMemo: '',
          address: '인천 중구 하늘별빛로65번길 7-11',
          img: '/img/convenience_store/ministop.jpg',
          googleMaps: '',
      },
      {
          id:2,
          title: 'GS25 영종리베라점',
          openingHours: '01:00-24:00',
          openingHoursMemo: '',
          address: '인천 중구 영종대로 881 1층 103호',
          img: '/img/convenience_store/gs.jpg',
          googleMaps: '',
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
          address: '인천 중구 하늘달빛로 84 1층 105호',
          img: '../img/pharmacy/p_0.jpg',
          googleMaps: 'https://www.google.co.kr/maps/place/%EC%9D%B8%EC%B2%9C%EA%B4%91%EC%97%AD%EC%8B%9C+%EC%A4%91%EA%B5%AC+%ED%95%98%EB%8A%98%EB%8B%AC%EB%B9%9B%EB%A1%9C+84/data=!3m1!4b1!4m6!3m5!1s0x357b83a9d542d405:0xb1ff593e13f04cfe!8m2!3d37.4867592!4d126.5581627!16s%2Fg%2F11sb7frj19?entry=ttu',
      },
      {
          id:1,
          title: '미소약국',
          openingHours: '09:00-22:00',
          openingHoursMemo: '일요일 유동적 휴무',
          address: '인천 중구 하늘별빛로65번길 11 해솔프라자 101호 미소약국',
          img: '../img/pharmacy/p_1.jpg',
          googleMaps: 'https://www.google.co.kr/maps/place/%ED%95%B4%EC%86%94%ED%94%84%EB%9D%BC%EC%9E%90/data=!3m1!4b1!4m6!3m5!1s0x357b976f38f7c457:0xcf8cd451e2546b98!8m2!3d37.4884843!4d126.5634308!16s%2Fg%2F11h58f9xh2?entry=ttu',
      },
      {
          id:2,
          title: '영종올리브약국',
          openingHours: '09:00-20:00',
          openingHoursMemo: '일요일 휴무',
          address: '인천 중구 하늘별빛로65번길 7-9',
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
        address: '인천 중구 자연대로 28 101호 셀프빨래방',
        img: '/img/coin_laundry/l_0.jpg',
        googleMaps: '',
      },
      {
          id:1,
          title: '화이트365 영종도점',
          openingHours: '00:00-24:00',
          openingHoursMemo: '',
          address: '인천 중구 자연대로 37 스카이가든 1층 107호',
          img: '/img/coin_laundry/l_1.jpg',
          googleMaps: '',
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