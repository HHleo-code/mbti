export interface MbtiResult {
  type: string;
  emoji: string;
  nickname: string;
  summary: string;
  description: string;
  strengths: string[];
  weaknesses: string[];
  careers: string[];
  compatibleTypes: string[];
  color: string;
  bgGradient: string;
}

export const mbtiResults: Record<string, MbtiResult> = {
  INTJ: {
    type: 'INTJ',
    emoji: '🧠',
    nickname: '전략가형',
    summary: '독립적이고 분석적인 전략의 달인!',
    description:
      '넌 혼자 깊이 생각하는 걸 좋아하고, 미래를 멀리 내다보는 능력이 있어. 목표를 세우면 끝까지 밀고 나가는 강한 의지를 가지고 있어. 겉으로는 차분해 보이지만, 속은 아이디어로 가득 차 있는 천재 스타일!',
    strengths: ['전략적 사고', '독립심 강함', '목표 지향적', '높은 집중력'],
    weaknesses: ['감정 표현이 어려울 수 있어', '완벽주의로 스트레스 받기도 함', '고집이 세 보일 수 있어'],
    careers: ['과학자', '프로그래머', '건축가', '전략기획자', '의사'],
    compatibleTypes: ['ENFP', 'ENTP'],
    color: '#6366f1',
    bgGradient: 'from-indigo-400 to-purple-500',
  },
  INTP: {
    type: 'INTP',
    emoji: '🔬',
    nickname: '논리학자형',
    summary: '끝없이 질문하는 지식 탐험가!',
    description:
      '"왜 그럴까?" 라는 질문을 달고 사는 타입이야. 복잡한 문제를 풀어내는 걸 즐기고, 새로운 아이디어를 상상하는 걸 좋아해. 수업 시간에 선생님 말씀에 반박하고 싶은 충동 한 번씩 느꼈지?',
    strengths: ['논리적 사고', '창의적 아이디어', '지적 호기심', '분석력'],
    weaknesses: ['실행보다 생각에 오래 머물러', '정리정돈이 어려울 수 있어', '감정 공감이 서툴 수 있어'],
    careers: ['수학자', '철학자', 'AI 연구원', '작가', '게임 개발자'],
    compatibleTypes: ['ENTJ', 'ESTJ'],
    color: '#8b5cf6',
    bgGradient: 'from-purple-400 to-blue-500',
  },
  ENTJ: {
    type: 'ENTJ',
    emoji: '👑',
    nickname: '통솔자형',
    summary: '타고난 리더, 세상을 이끌어가는 사람!',
    description:
      '모둠 활동할 때 자연스럽게 팀장이 되는 타입! 목표를 세우고 팀원들을 이끌어 가는 능력이 뛰어나. 효율적으로 일하는 걸 좋아하고, 도전을 두려워하지 않아. 학교에서도 어디서든 존재감 확실한 스타일!',
    strengths: ['강력한 리더십', '결단력', '효율 추구', '자신감'],
    weaknesses: ['너무 강하게 밀어붙일 수 있어', '남의 감정을 놓치기도 해', '완벽주의로 힘들 때도 있어'],
    careers: ['기업 대표', '정치인', '변호사', '경영 컨설턴트', 'PD'],
    compatibleTypes: ['INTP', 'INFP'],
    color: '#ef4444',
    bgGradient: 'from-red-400 to-orange-500',
  },
  ENTP: {
    type: 'ENTP',
    emoji: '💡',
    nickname: '변론가형',
    summary: '아이디어 뱅크, 토론이라면 자신 있어!',
    description:
      '새로운 아이디어를 생각해내는 속도가 남다르고, 토론에서 빛을 발하는 타입이야. 재미있는 방식으로 세상을 보고, 어떤 주제든 다양한 각도에서 생각해. 친구들이 "또 엉뚱한 소리 한다"고 할 때가 많지 않아? 😄',
    strengths: ['창의적 사고', '말하기 능력', '유연한 사고방식', '도전 정신'],
    weaknesses: ['집중력이 금방 사라질 수 있어', '마무리가 약할 수 있어', '논쟁을 즐기다 갈등이 생기기도 해'],
    careers: ['기업가', '마케터', '변호사', '유튜버', '발명가'],
    compatibleTypes: ['INTJ', 'INFJ'],
    color: '#f59e0b',
    bgGradient: 'from-yellow-400 to-orange-400',
  },
  INFJ: {
    type: 'INFJ',
    emoji: '🌙',
    nickname: '선지자형',
    summary: '깊은 공감 능력을 가진 신비로운 이상주의자!',
    description:
      '사람들의 감정을 잘 읽고, 진심으로 도우려는 마음이 강해. 혼자 있는 걸 즐기지만, 의미 있는 관계를 소중히 여겨. 겉으로 조용해 보여도 내면에는 넘치는 생각과 이상이 있어. 세상을 더 좋게 만들고 싶은 마음이 커!',
    strengths: ['깊은 공감 능력', '통찰력', '창의성', '헌신적인 마음'],
    weaknesses: ['너무 많이 생각해서 지칠 수 있어', '남의 기대에 맞추려 무리할 때도 있어', '갈등 상황이 힘들어'],
    careers: ['상담사', '작가', '사회복지사', '예술가', '교사'],
    compatibleTypes: ['ENTP', 'ENFP'],
    color: '#6366f1',
    bgGradient: 'from-indigo-400 to-blue-500',
  },
  INFP: {
    type: 'INFP',
    emoji: '🌸',
    nickname: '중재자형',
    summary: '감성 충만, 세상에서 가장 따뜻한 마음의 소유자!',
    description:
      '풍부한 감수성과 창의력을 가진 타입이야. 자신만의 세계가 있고, 예술이나 글쓰기 같은 표현 활동을 즐겨. 가치관이 뚜렷하고, 불의에 화를 느낄 줄 알아. 겉으로 얌전해 보여도 속은 열정으로 가득 차 있어!',
    strengths: ['풍부한 감수성', '창의력', '공감 능력', '이상을 향한 열정'],
    weaknesses: ['현실적인 것들이 버거울 수 있어', '비판에 예민할 수 있어', '우유부단해 보일 때도 있어'],
    careers: ['작가', '예술가', '심리상담사', '교사', '사회활동가'],
    compatibleTypes: ['ENTJ', 'ENFJ'],
    color: '#ec4899',
    bgGradient: 'from-pink-400 to-rose-400',
  },
  ENFJ: {
    type: 'ENFJ',
    emoji: '🌟',
    nickname: '선도자형',
    summary: '모두를 빛나게 하는 카리스마 넘치는 리더!',
    description:
      '사람들에게 진심으로 관심을 갖고, 모두가 행복하길 바라는 마음이 넘쳐. 자연스럽게 사람들을 이끌고 영감을 주는 능력이 있어. 친구들이 고민 있을 때 가장 먼저 찾아오는 사람이 바로 너야!',
    strengths: ['탁월한 공감 능력', '리더십', '소통 능력', '배려심'],
    weaknesses: ['남을 위해 자신을 희생하기도 해', '지나치게 책임감을 느껴', '갈등을 피하려다 지칠 수 있어'],
    careers: ['교사', '상담사', '정치인', '사회복지사', '배우'],
    compatibleTypes: ['INFP', 'ISFP'],
    color: '#10b981',
    bgGradient: 'from-green-400 to-teal-500',
  },
  ENFP: {
    type: 'ENFP',
    emoji: '🎨',
    nickname: '활동가형',
    summary: '에너지 넘치는 자유로운 영혼의 아이디어맨!',
    description:
      '넌 삶을 모험으로 여기는 타입이야! 새로운 사람, 새로운 경험을 사랑하고 어디서든 즐길 거리를 찾아내. 상상력이 풍부하고 열정이 넘쳐서 주변 사람들에게 에너지를 전염시켜. 학교에서 가장 활기찬 분위기 메이커!',
    strengths: ['뛰어난 상상력', '소통 능력', '열정', '긍정 에너지'],
    weaknesses: ['한 가지에 집중하기 어려울 수 있어', '감정 기복이 있을 수 있어', '계획 없이 행동하기도 해'],
    careers: ['배우', '유튜버', '기업가', '상담사', '마케터'],
    compatibleTypes: ['INTJ', 'INFJ'],
    color: '#f97316',
    bgGradient: 'from-orange-400 to-pink-400',
  },
  ISTJ: {
    type: 'ISTJ',
    emoji: '📚',
    nickname: '현실주의자형',
    summary: '믿음직하고 성실한 책임감의 아이콘!',
    description:
      '맡은 일은 꼭 해내는 타입이야. 규칙을 잘 지키고, 신중하게 생각하고 행동해. 꼼꼼하게 계획을 세우고, 약속을 소중히 여겨. 친구들이 "걱정 없어, 걔가 있잖아" 라고 말하는 사람이 바로 너야!',
    strengths: ['강한 책임감', '성실함', '꼼꼼함', '신뢰성'],
    weaknesses: ['변화에 적응이 느릴 수 있어', '유연성이 부족할 수 있어', '감정 표현이 어렵기도 해'],
    careers: ['회계사', '법률가', '군인', '경찰', '공무원', '의사'],
    compatibleTypes: ['ENFP', 'ESFP'],
    color: '#64748b',
    bgGradient: 'from-slate-400 to-blue-500',
  },
  ISFJ: {
    type: 'ISFJ',
    emoji: '🤗',
    nickname: '수호자형',
    summary: '따뜻하고 헌신적인 든든한 지킴이!',
    description:
      '소중한 사람들을 위해 언제나 최선을 다하는 타입이야. 남들이 필요로 하는 걸 잘 알아채고, 묵묵히 도와줘. 기억력이 좋아서 친구의 생일이나 좋아하는 것들을 잘 기억해. 있을 때는 모르다가 없으면 진짜 아쉬운 사람!',
    strengths: ['배려심', '성실함', '뛰어난 기억력', '헌신적인 태도'],
    weaknesses: ['자기 주장을 못할 때가 있어', '지나치게 양보하기도 해', '변화를 두려워할 수 있어'],
    careers: ['간호사', '교사', '사서', '사회복지사', '요리사'],
    compatibleTypes: ['ESTP', 'ESFP'],
    color: '#06b6d4',
    bgGradient: 'from-cyan-400 to-sky-500',
  },
  ESTJ: {
    type: 'ESTJ',
    emoji: '📋',
    nickname: '경영자형',
    summary: '규칙과 질서를 사랑하는 정직한 관리자!',
    description:
      '체계적이고 효율적인 걸 좋아하는 타입이야. 무엇이 옳고 그른지 명확하게 판단하고, 그에 따라 행동해. 모둠 과제할 때 당연히 역할 분배부터 하는 타입! 말한 건 꼭 지키고, 맡은 건 반드시 해내는 스타일이야.',
    strengths: ['조직력', '리더십', '성실함', '판단력'],
    weaknesses: ['융통성이 부족해 보일 수 있어', '감정보다 논리를 앞세워', '지나치게 엄격할 수 있어'],
    careers: ['관리자', '교사', '군인', '경찰', '사업가'],
    compatibleTypes: ['INTP', 'ISTP'],
    color: '#dc2626',
    bgGradient: 'from-red-400 to-amber-500',
  },
  ESFJ: {
    type: 'ESFJ',
    emoji: '💝',
    nickname: '집정관형',
    summary: '따뜻한 분위기 메이커, 모두의 친구!',
    description:
      '주변 사람들을 행복하게 만드는 걸 삶의 목표로 여기는 타입이야. 사람들과 어울리는 걸 진심으로 즐기고, 다른 사람의 감정에 잘 공감해. 학교 행사 준비할 때 가장 열심히 뛰어다니는 사람이 바로 너야!',
    strengths: ['공감 능력', '사교성', '협력 능력', '성실함'],
    weaknesses: ['남의 평가를 너무 신경 쓸 수 있어', '갈등 상황이 힘들어', '자신보다 남을 먼저 생각해'],
    careers: ['교사', '간호사', '이벤트 플래너', '영업직', '상담사'],
    compatibleTypes: ['ISFP', 'ISTP'],
    color: '#f43f5e',
    bgGradient: 'from-rose-400 to-pink-500',
  },
  ISTP: {
    type: 'ISTP',
    emoji: '🔧',
    nickname: '장인형',
    summary: '논리적이고 실용적인 손재주 있는 탐험가!',
    description:
      '말보다 행동, 이론보다 실제! 어떤 것이든 직접 해보면서 익히는 타입이야. 위기 상황에서도 침착하게 해결책을 찾아내는 능력이 있어. 평소엔 조용하지만 실제로 뭔가 만들거나 고칠 때 진가를 발휘해!',
    strengths: ['문제 해결 능력', '침착함', '실용적 사고', '독립심'],
    weaknesses: ['감정 표현이 어려울 수 있어', '장기 계획이 어렵기도 해', '혼자 해결하려 해서 외로울 수 있어'],
    careers: ['엔지니어', '프로게이머', '파일럿', '요리사', '운동선수'],
    compatibleTypes: ['ESFJ', 'ESTJ'],
    color: '#78716c',
    bgGradient: 'from-stone-400 to-gray-500',
  },
  ISFP: {
    type: 'ISFP',
    emoji: '🎵',
    nickname: '모험가형',
    summary: '감성적이고 자유로운 예술적 영혼!',
    description:
      '눈앞의 순간을 즐길 줄 아는 감성 충만 타입이야. 음악, 미술, 패션 같은 예술적인 것들에 관심이 많고 자신만의 독특한 감각이 있어. 조용하지만 의외의 반전 매력이 있어서 알면 알수록 더 좋아지는 스타일!',
    strengths: ['예술적 감각', '공감 능력', '개방적 태도', '자유로운 영혼'],
    weaknesses: ['계획 세우기가 어려울 수 있어', '갈등 상황을 피하려 해', '장기 목표 설정이 어렵기도 해'],
    careers: ['예술가', '음악가', '패션 디자이너', '사진작가', '셰프'],
    compatibleTypes: ['ENFJ', 'ESFJ'],
    color: '#a855f7',
    bgGradient: 'from-violet-400 to-purple-500',
  },
  ESTP: {
    type: 'ESTP',
    emoji: '⚡',
    nickname: '사업가형',
    summary: '에너지 폭발, 지금 이 순간을 즐기는 액션파!',
    description:
      '지루한 건 딱 질색! 항상 새로운 자극을 찾고, 직접 뛰어들어 경험하는 걸 좋아해. 위기 상황에서 빠르게 판단하고 행동하는 능력이 탁월해. 친구들 사이에서 분위기를 주도하고, 어디서든 재미를 만들어내는 사람!',
    strengths: ['행동력', '순발력', '사교성', '현실 파악 능력'],
    weaknesses: ['충동적으로 행동할 수 있어', '미래보다 현재에 집중해', '규칙이나 제약을 답답해 해'],
    careers: ['스포츠 선수', '기업가', '경찰', '소방관', '영업 전문가'],
    compatibleTypes: ['ISFJ', 'ISTJ'],
    color: '#f59e0b',
    bgGradient: 'from-amber-400 to-yellow-400',
  },
  ESFP: {
    type: 'ESFP',
    emoji: '🎉',
    nickname: '연예인형',
    summary: '인생은 무대, 어디서나 빛나는 스타!',
    description:
      '넌 태어난 엔터테이너야! 사람들을 즐겁게 하는 데 천부적인 재능이 있고, 어디서든 분위기를 밝게 만들어. 음악이 들리면 자연스럽게 몸이 움직이고, 새로운 친구 사귀는 게 어렵지 않아. 넌 살아있는 에너지 그 자체!',
    strengths: ['뛰어난 사교성', '긍정 에너지', '즉흥성', '재미 추구'],
    weaknesses: ['지루한 일은 오래 못 해', '충동적 결정을 내릴 수 있어', '미래 계획이 약할 수 있어'],
    careers: ['연예인', '유튜버', '이벤트 플래너', '여행 가이드', '교사'],
    compatibleTypes: ['ISFJ', 'ISTJ'],
    color: '#ec4899',
    bgGradient: 'from-pink-400 to-fuchsia-500',
  },
};
