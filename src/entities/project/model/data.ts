import type { Project } from './types';

// hanwha-motiev
import HanwhaMainImage01 from '../assets/hanwha/hanwha_home01.png';
import HanwhaMainImage02 from '../assets/hanwha/hanwha_home02.png';
import HanwhaConceptImage01 from '../assets/hanwha/hanwha_concept01.png';
import HanwhaProgressImage01_01 from '../assets/hanwha/hanwha_map01.png';
import HanwhaProgressImage01_02 from '../assets/hanwha/hanwha_map02.png';
import HanwhaProgressImage02_01 from '../assets/hanwha/hanwha_reservation01.png';
import HanwhaProgressImage03_01 from '../assets/hanwha/hanwha_chargingstatus01.png';
import HanwhaProgressImage03_02 from '../assets/hanwha/hanwha_chargingstatus02.gif';
import HanwhaProgressImage04_01 from '../assets/hanwha/hanwha_charging_history01.png';
import HanwhaProgressImage04_02 from '../assets/hanwha/hanwha_charging_history02.png';

// pantos
import PantosMainImage01 from '../assets/pantos/pantos_main.png';
import PantosConceptImage01 from '../assets/pantos/pantos_concept01.png';
import PantosConceptImage02 from '../assets/pantos/pantos_concept02.png';
import PantosProgressImage01 from '../assets/pantos/pantos_member_management01.png';
import PantosProgressImage02 from '../assets/pantos/pantos_receipt.png';
import PantosProgressImage03 from '../assets/pantos/pantos_dashboard.png';
import PantosProgressImage04 from '../assets/pantos/pantos_settlement.png';

// convatec
import ConvatecMainImage01 from '../assets/convatec/convatec_main01.png';
import ConvatecMainImage02 from '../assets/convatec/convatec_main02.png';
import ConvatecConceptImage01 from '../assets/convatec/convatec_concept01.png';
import ConvatecProgressImage01_01 from '../assets/convatec/convatec_pdf01.png';
import ConvatecProgressImage01_02 from '../assets/convatec/convatec_pdf02.png';
import ConvatecProgressImage02_01 from '../assets/convatec/convatec_bookmark.png';
import ConvatecProgressImage03_01 from '../assets/convatec/convatec_memo.png';
import ConvatecProgressImage03_02 from '../assets/convatec/convatec_highlight.png';
import ConvatecProgressImage04_01 from '../assets/convatec/convatec_product01.png';
import ConvatecProgressImage04_02 from '../assets/convatec/convatec_product02.png';

// hubbing
import HubbingMainImage01 from '../assets/hubbing/hubbing_main02.png';
import HubbingMainImage02 from '../assets/hubbing/hubbing_main01.png';
import HubbingConceptImage01 from '../assets/hubbing/hubbing_concept.png';
import HubbingProgressImage01_01 from '../assets/hubbing/hubbing_swipe01.png';
import HubbingProgressImage01_02 from '../assets/hubbing/hubbing_swipe02.png';
import HubbingProgressImage02_01 from '../assets/hubbing/hubbing_calendar01.png';
import HubbingProgressImage02_02 from '../assets/hubbing/hubbing_calendar02.png';
import HubbingProgressImage03_01 from '../assets/hubbing/hubbing_working_history02.png';
import HubbingProgressImage03_02 from '../assets/hubbing/hubbing_working_history01.png';
import HubbingProgressImage04_01 from '../assets/hubbing/hubbing_community01.png';
import HubbingProgressImage04_02 from '../assets/hubbing/hubbing_community02.png';

// school-trip
import SchoolTripMainImage01 from '../assets/schooltrip/schooltrip_main.png';
import SchoolTripConcept01 from '../assets/schooltrip/schooltrip_concept02.png';
import SchoolTripConcept02 from '../assets/schooltrip/schooltrip_concept01.png';
import SchoolTripProgress01_01 from '../assets/schooltrip/schooltrip_request01.png';
import SchoolTripProgress01_02 from '../assets/schooltrip/schooltrip_request02.png';
import SchoolTripProgress02_01 from '../assets/schooltrip/schooltrip_check01.png';
import SchoolTripProgress02_02 from '../assets/schooltrip/schooltrip_check02.png';
import SchoolTripProgress03_01 from '../assets/schooltrip/schooltrip_modify01.png';
import SchoolTripProgress03_02 from '../assets/schooltrip/schooltrip_modify02.png';
import SchoolTripProgress04_01 from '../assets/schooltrip/schooltrip_recommend.png';

// alba-edu
import AlbaEduMainImage from '../assets/alba-edu/alba-edu_main.png';
import AlbaEduConcept01 from '../assets/alba-edu/alba-edu_concept01.png';
import AlbaEduConcept02 from '../assets/alba-edu/alba-edu_concept02.png';
import AlbaEduProgress01_01 from '../assets/alba-edu/alba-edu_seminar.png';
import AlbaEduProgress02_01 from '../assets/alba-edu/alba-edu_career01.png';
import AlbaEduProgress02_02 from '../assets/alba-edu/alba-edu_career02.png';
import AlbaEduProgress03_01 from '../assets/alba-edu/alba-edu_QnA.png';
import AlbaEduProgress04_01 from '../assets/alba-edu/alba-edu_OT.png';

export const projectList: Project[] = [
  {
    id: 1,
    slug: 'hanwha-motiev',
    title: 'hanwha-motiev',
    description: '한화모티브입니다.',
    description02: '기존 전기차 충전 한화모티브 앱 리뉴얼',
    period: '2023.01 ~ 2023.04',
    tech: 'react-native, typescript, recoil, react-query, styled-component',
    type: 'mobile',
    detail: {
      stack: ['React-native', 'Typescript', 'Styled-component', 'Recoil', 'React-query'],
      mainImages: [HanwhaMainImage01, HanwhaMainImage02],
      conceptDescriptions: [
        '한화모티브에서 기존에 운영중이던 전기차 충전소 찾기 및 충전 앱 리뉴얼 프로젝트',
        '전국의 전기차 충전소를 대상으로 현위치 기준 주변 충전소 및 추천 충전소 노출하여 전기차 충전을 용이하게 할 수 있게 도와주는 서비스입니다.',
      ],
      conceptImages: [HanwhaConceptImage01],
      progress: [
        {
          title: 'MAP',
          description:
            '현 위치를 기반으로 주변 충전소를 볼 수 있습니다. 지도 내의 marker custom을 위하여 react-native naver map api로는 한계가 있어 naver map api와 webview를 함께 이용하여 개발하였으며, 즐겨찾는 충전소 확인 / 검색도 가능합니다.\n\n지도 내의 충전소의 경우 전체 충전기 갯수와 현재 사용가능 / 사용중 / 설치예정 / 사용불가의 상태를 핀의 색상으로 보여주어 충전소의 상태를 한눈에 확인 가능하여 전기차주의 불편함을 덜어주었습니다. 또한 지도 축소 시 충전소 여러개가 겹쳐보일 경우 clustering 기능을 사용하여 지역 내 충전소 갯수와 충전소의 현재 상태를 확인할 수 있습니다.',
          images: [HanwhaProgressImage01_01, HanwhaProgressImage01_02],
        },
        {
          title: 'RESERVATION',
          description:
            '현 위치를 기반으로 주변 충전소를 확인한 후 충전소 터치 시 충전소의 상태와 바로 예약할 수 있는 찜하기 기능이 있습니다. 지도뿐만 아니라 시간 기반으로 예약을 하고 싶은 전기차주를 위하여 먼저 원하는 시간을 선택하면 그 시간에 맞는 충전소만 보여지게 되며 그 중에 원하는 충전소를 먼저 찜할 수 있습니다.',
          images: [HanwhaProgressImage02_01],
        },
        {
          title: 'CHARGING STATUS',
          description:
            '실시간으로 충전현황을 확인 가능하며, 페이지 진입 시 충전 중일 경우 react-native animated를 이용한 인터렉션이 노출되며 실시간으로 남은 시간과 충전 금액 / 충전량 등을 확인할 수 있습니다.',
          images: [HanwhaProgressImage03_01, HanwhaProgressImage03_02],
        },
        {
          title: 'CHARGING HISTORY',
          description:
            'svg-chart를 이용하여 line-chart 및 curved-chart를 custom하여 개발하였습니다.\n충전을 할 때마다 데이터가 점점 쌓여 가장 많이 충전한 달 / 주 / 충전량이 노출되며, 내가 선호하는 충전방식 및 자주 방문한 충전소 등의 내용을 차트를 통하여 확인할 수 있는 소소한 재미도 있습니다.',
          images: [HanwhaProgressImage04_01, HanwhaProgressImage04_02],
        },
      ],
    },
  },
  {
    id: 2,
    slug: 'school-trip',
    title: 'school-trip',
    description: '스쿨트립입니다.',
    description02: '교육여행 신청 및 견적 플랫폼 웹 개발',
    period: '2022.10 ~ 2022.12',
    tech: 'react, typescript, recoil, react-query, styled-component',
    type: 'web',
    detail: {
      stack: ['React', 'Typescript', 'Styled-component', 'Recoil', 'React-query'],
      mainImages: [SchoolTripMainImage01],
      conceptDescriptions: [
        '교육여행 맞춤 플랫폼 웹 서비스 개발',
        '학생들에게 필요한 경험을 제공하는 다양한 분야의 파트너들을 연결하여\n학생들에게 기억에 남을만한 교육여행을 추천하고 그에 맞는 견적서를 전달하여 최적의 교육여행을 만들어줍니다.',
      ],
      conceptImages: [SchoolTripConcept01, SchoolTripConcept02],
      progress: [
        {
          title: 'REQUEST FOR QUOTATION',
          description:
            '수많은 선택지를 제공하고 선택한 결과에 따라 교육여행 협력사 파트너에게 다양한 테마의 교육여행과 견적서를 추천 받을 수 있습니다.\n\n선택지마다 다양한 선택 결과를 backend에게 넘겨주어 선택 결과에 따라 다음 선택지가 변동되며, backend에게 받아오는 다양한 선택지를 고객에게 노출될 수 있게끔 개발하였습니다.',
          images: [SchoolTripProgress01_01, SchoolTripProgress01_02],
        },
        {
          title: 'CHECK QUOTATION',
          description:
            '직접 선택한 견적 요청 결과에 따른 협력사 파트너의 견적을 확인할 수 있습니다.\n\n견적 내 시간대 별 디테일한 교육여행 계획과 금액을 확인한 후 견적 확정 및 수정 요청을 할 수 있습니다.',
          images: [SchoolTripProgress02_01, SchoolTripProgress02_02],
        },
        {
          title: 'MODIFYING QUOTATION',
          description:
            '견적 확인 후 수정이 필요한 부분이나 견적이 마음에 들지 않을 경우 재요청하여 다른 방향의 견적을 요청할 수 있습니다.\n고객의 수많은 수정 요청을 방지하기 위하여 3번의 수정 요청만 가능하며, 수정 요청을 할 경우 견적이 확정되어 다른 견적들은 열람이 불가능하게 개발하였습니다.',
          images: [SchoolTripProgress03_01, SchoolTripProgress03_02],
        },
        {
          title: 'RECOMMEND',
          description:
            "견적 요청을 하기 전에 먼저 school-trip에서 추천하는 여행지를 고를 수 있습니다\n'이달의 지역', '이달의 활동', '이달의 파트너'를 둘러보며 가장 인기있는 여행지 및 파트너사의 추천 여행지를 확인하여 견적요청 과정을 생략하고 바로 추천 여행지로 선택가능합니다.\n여행지 인기에 따라 내림차순으로 20개씩 노출되며, 스크롤할 때마다 infinite scroll로 새로운 여행지가 노출되게 개발하였습니다.",
          images: [SchoolTripProgress04_01],
        },
      ],
    },
  },
  {
    id: 3,
    slug: 'hubbing',
    title: 'hubbing',
    description: '허빙입니다.',
    description02: '아르바이트 / 사장님 알바 및 급여관리 앱 개발',
    period: '2022.09 ~ 2022.10',
    tech: 'react-native, typescript, recoil, react-query, styled-component',
    type: 'mobile',
    detail: {
      stack: ['React-native', 'Typescript', 'Styled-component', 'Recoil', 'Axios'],
      mainImages: [HubbingMainImage01, HubbingMainImage02],
      conceptDescriptions: [
        '사장님과 근무자의 양방향성 근무 관리 앱 개발 프로젝트',
        'hubbing은 사장님과 근무자의 한달 근무내역을 앱 하나로 관리할 수 있는 앱입니다.\n\n달력을 통해 사장님은 전체 근무자의 근무 내역을 관리할 수 있으며, 근무자는 본인의 근무 내역을 확인하고 잘못된 근무 내역을 사장님에게 수정요청을 할 수 있습니다.',
      ],
      conceptImages: [HubbingConceptImage01],
      progress: [
        {
          title: 'CUMMUTE SWIPE',
          description:
            '출근 및 퇴근 시 버튼 swipe를 통하여 출퇴근 관리를 할 수 있습니다\n앱의 편리함을 악용하여 근무시간 조작하는 경우를 방지하기 위하여 현재 위치를 파악하여 근무지 근처 및 근무 시간 10분전 / 퇴근시간부터 10분 후 까지만 swipe 버튼이 활성화 됩니다.\n\nswipe 기능은 90%이상 버튼을 움직일 경우만 동작하게끔 개발하였으며,\nreact-native-gesture-handler를 이용하였습니다.',
          images: [HubbingProgressImage01_01, HubbingProgressImage01_02],
        },
        {
          title: 'WORKING CALENDAR',
          description:
            '사장님의 경우 달력의 날짜를 터치 하여 특정 날의 모든 근무자의 근무내역을 확인할 수 있습니다. 달력 내 파란색 아이콘은 모든 근무자가 이상없이 근무한 날을 표현하는 것이고, 근무내역에 문제가 있을 경우 연두색 아이콘으로 노출되게 됩니다.\n\ncalendar의 custom을 위하여 react-native-calendar 라이브러리를 직접 수정하여 개발하였습니다.',
          images: [HubbingProgressImage02_01, HubbingProgressImage02_02],
        },
        {
          title: 'WORKING HISTORY',
          description:
            '근무자 회원 개인의 해당 달의 급여내역을 확인가능합니다. 기존에 사장님 회원이 근무자를 초대할 때 급여와 세금 등 입력한 정보를 토대로 노출되며, 급여 내역 및 근무 내역이 문제가 있을 경우 사장님 회원에게 직접 근무 내역을 수정요청할 수 있습니다.',
          images: [HubbingProgressImage03_01, HubbingProgressImage03_02],
        },
        {
          title: 'COMMUNITY',
          description:
            '사장님 회원과 근무자 회원이 모두 열람 가능하고 댓글을 달 수 있는 커뮤니티입니다.\n커뮤니티 첫 진입 시 닉네임과 업종 선택을 하여 익명 기반으로 다양한 업종의 사장님 및 근무자들과 소통할 수 있는 공간입니다.\n특정 게시물의 좋아요를 누를 경우 사장님과 근무자의 좋아요 비율이 나타나는 재미있는 기능도 있습니다.',
          images: [HubbingProgressImage04_01, HubbingProgressImage04_02],
        },
      ],
    },
  },
  {
    id: 4,
    slug: 'alba-edu',
    title: 'alba-edu',
    description: '알바에듀입니다.',
    description02: '학생,학부모 / 선생 과외 매칭 플랫폼 웹 개발',
    period: '2022.06 ~ 2022.09',
    tech: 'react, javascript, recoil, axios, styled-component',
    type: 'web',
    detail: {
      stack: ['React', 'Javascript', 'Styled-component', 'Recoil', 'Axios'],
      mainImages: [AlbaEduMainImage],
      conceptDescriptions: [
        "온라인상에서도 원하는 선생님을 선택하여 수업을 받을 수 있는 플랫폼이며\n\n'세미나' / '자료실' / '질의응답' 등 다양한 컨텐츠를 이용하여 접근성이 용이하게 공부를 도와주는 웹 서비스입니다.",
      ],
      conceptImages: [AlbaEduConcept01, AlbaEduConcept02],
      progress: [
        {
          title: 'REAL-TIME SEMINAR',
          description:
            "'실시간 세미나', '예정된 세미나' 정보를 노출하여 학생이 원하는 세미나를 시청 가능합니다.\n\n실시간 세미나의 경우 예약하지 않아도 바로 결제하여 시청할 수 있으며, 예정된 세미나는 미리 결제하고 예약하여 시간에 맞춰 시청 가능합니다. 세미나의 경우 실시간으로 진행되기 때문에 zoom링크로 연결되게끔 개발하였습니다.",
          images: [AlbaEduProgress01_01],
        },
        {
          title: 'CAREER SEARCH',
          description:
            '대부분의 학생은 아직 진로에 대한 명확한 목표가 없습니다.\nalba-edu의 진로탐색 서비스의 다양한 질문과 간단한 설문을 통하여 강사들의 진로 방향에 대한 해답을 얻을 수 있습니다.',
          images: [AlbaEduProgress02_01, AlbaEduProgress02_02],
        },
        {
          title: 'REFERENCE ROOM',
          description:
            '선생님 및 alba-edu 관리자가 자료실에 학습내용을 등록할 수 있습니다.\n\n현재 강의중인 도서 뿐만 아닌 다양한 부교재도 결제 후 이용 가능하며, 모르는 문제가 있을땐 질의 응답을 통하여 선생과 학생, 학생과 학생으로 답변을 얻을 수 있습니다.',
          images: [AlbaEduProgress03_01],
        },
        {
          title: 'APPLICATION FOR TUTORING',
          description:
            '1% 강사찾기를 통하여 자신에게 맞는 강사를 찾은 뒤 강사가 정한 시간에 맞춰 calendar를 이용하여 OT신청 및 과외신청을 할 수 있습니다.\n디자인에 맞추기 위해 react-calendar를 custom하여 개발하였습니다.',
          images: [AlbaEduProgress04_01],
        },
      ],
    },
  },
  {
    id: 5,
    slug: 'convatec',
    title: 'convatec',
    description: '콘바텍입니다.',
    description02: 'PDF 뷰어 앱 개발',
    period: '2022.05 ~ 2022.06',
    tech: 'react-native, javascript, recoil, axios, styled-component',
    type: 'mobile',
    detail: {
      stack: ['React-native', 'Javascript', 'Styled-component', 'Recoil', 'Axios'],
      mainImages: [ConvatecMainImage01, ConvatecMainImage02],
      conceptDescriptions: [
        'convatec에서 출판한 임상 장•요루관리정석 도서를 PDF로 제공하는 앱 개발 프로젝트',
        '환자들 대상으로 임상 장•요루관리에 대한 정보를 담은 PDF를 제공합니다\n실제로 책을 보듯 중요한 부분에 메모를 할 수 있으며, 강조하고 싶은 부분에 형관펜으로 그어서 언제든 쉽게 다시 볼 수 있습니다.',
      ],
      conceptImages: [ConvatecConceptImage01],
      progress: [
        {
          title: 'PDF VIEWER',
          description:
            'PDF 페이지 첫 진입 시 튜토리얼 페이지가 overlay되며, PDF의 기본적인 사용법이 보여집니다.\n상단의 인덱싱 터치 시, 여러가지 인덱싱 페이지 제목이 나오며 터치하여 해당페이지로 이동 가능합니다.',
          images: [ConvatecProgressImage01_01, ConvatecProgressImage01_02],
        },
        {
          title: 'BOOKMARK',
          description:
            '​PDF페이지별로 bookmark 버튼을 터치하여 등록이 가능하며, 메인페이지에서 설정해둔 bookmark로 바로 이동이 가능합니다.\n우측 상단의 메모 / 북마크 버튼 터치 시, animation으로 toggle되며 현재 등록해 둔 메모를 확인하며 해당페이지로 이동 가능합니다.',
          images: [ConvatecProgressImage02_01],
        },
        {
          title: 'HIGHLIGHT & MEMO',
          description:
            'PDF를 보며 저장해두고 싶은 위치에 memo를 입력하여 저장이 가능하며, 저장해둔 memo는 메인페이지에서 확인 가능합니다.\n실제 도서를 읽는 것처럼 highlight를 이용하여 강조를 해둘수있습니다.\n\nreact-native 내에서는 구현하기 어렵다고 판단하여 webview를 통하여 web기반으로 기능을 구현하여 앱 내에선 x,y좌표를 이용하여 해당 위치에 memo 및 highlight를 표시할 수 있게 개발하였습니다.',
          images: [ConvatecProgressImage03_01, ConvatecProgressImage03_02],
        },
        {
          title: 'PRODUCT DETAIL',
          description:
            'PDF 정독 중 관련된 페이지에서 convatec의 상품정보 페이지로 갈 수 있는 버튼이 노출됩니다.\n언제든지 환자(사용자)에게 필요한 정보를 제공하기 위하여 특정 페이지에서만 버튼이 노출되게 개발하였고, 버튼 터치 시 별도의 페이지로 넘어가 해당 제품의 상세정보를 확인할 수 있습니다.',
          images: [ConvatecProgressImage04_01, ConvatecProgressImage04_02],
        },
      ],
    },
  },
  {
    id: 6,
    slug: 'pantos',
    title: 'pantos',
    description: '판토스입니다.',
    description02: '운송사 / 화주 / 관리자 어드민 웹 개발',
    period: '2022.02 ~ 2022.04',
    tech: 'javascript, jquery, axios',
    type: 'web',
    detail: {
      stack: ['Jquery', 'Javascript', 'CSS5', 'Ajax'],
      mainImages: [PantosMainImage01],
      conceptDescriptions: [
        'pantos 운송 시스템의 전반적인 관리와 회원 관리 및 템플릿 등록과 오더 현황을 확인할 수 있는 웹 개발하였습니다.',
      ],
      conceptImages: [PantosConceptImage01, PantosConceptImage02],
      progress: [
        {
          title: 'MEMBER MANAGEMENT',
          description:
            '전체적인 회원을 jquery data-tables를 이용하여 테이블로 한눈에 볼 수 있게 개발하였으며, 상태별 / 날짜별로 검색이 가능합니다.\n현재 페이지 내에서 popup을 통하여 계정 등록이 가능합니다.',
          images: [PantosProgressImage01],
        },
        {
          title: 'RECEIPT MANAGEMENT',
          description:
            '기본 인수증 외의 인수증 템플릿을 custom하여 관리 가능합니다.\n기존의 종이 인수증 서명 방식은 분실의 위험이 있기에 이를 보완하기 위해 전자 인수증을 이용하여 간편하게 서명할 수 있도록 개발하였습니다.',
          images: [PantosProgressImage02],
        },
        {
          title: 'CHART',
          description:
            'chart.js의 line-chart와 doughnut-chart를 이용하여 각자 다른 차트를 사용함으로써 각종 운송 오더의 현황을 차별화되게 확인 할 수 있도록 개발하였습니다.\n오늘의 오더 / 이번주의 오더 / 이번달의 오더를 filter기능으로 확인 할 수 있고, 같은 방식으로 비정상인수 내역을 확인할 수 있어 인수 내역을 확실하게 관리할 수 있습니다.',
          images: [PantosProgressImage03],
        },
        {
          title: 'SETTLEMENT MANAGEMENT',
          description:
            '화주와 운송사별로 상단의 버튼을 기준으로 정산 내역을 data-tables로 확인 가능합니다.\n기간별로 법인별로 구분하여 검색 가능하며, data-tables excel다운로드 기능을 이용하여 엑셀로 다운로드하여 PC내에서 관리할 수 있게 개발하였습니다.',
          images: [PantosProgressImage04],
        },
      ],
    },
  },
];

export const getProjectBySlug = (slug: string) =>
  projectList.find((project) => project.slug === slug);
