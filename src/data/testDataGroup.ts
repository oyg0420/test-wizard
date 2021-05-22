export type TestData = { label: string; value: number };
export type TestDataGroupType = { step: number; description: string; data: TestData[] };

export const testDataGroup: TestDataGroupType[] = [
  {
    step: 1,
    description: '역대급 인생샷을 찍은 나는',
    data: [
      { label: '인스타에 바로 업로드하는 편이다.', value: 1 },
      { label: '나만의 추억으로 간직하는 편이다.', value: 0 },
    ],
  },
  {
    step: 2,
    description: '즉흥적으로 여행을 떠난 나는,이 사실을',
    data: [
      { label: '인스타에 티내는 편이다.', value: 1 },
      { label: '굳이 티내지 않는 편이다.', value: 0 },
    ],
  },
  {
    step: 3,
    description: '홀로 여행 도중, 새로운 사람을 만났다면',
    data: [
      { label: '인스타 아이디를 물어보고 팔로우를 건다.', value: 1 },
      { label: '이야기를 이어가다 자연스레 헤어진다.', value: 0 },
    ],
  },
  {
    step: 4,
    description: '피드를 업로드 하고 난후,나는',
    data: [
      { label: '사람들의 반응이 어떨지 기대된다.', value: 1 },
      { label: '별 신경 안쓴다.', value: 0 },
    ],
  },
  {
    step: 5,
    description: '내가 올린 피드에 좋아요가 많이 안달렸을 때, 나는',
    data: [
      { label: '신경쓰이고 마음이 불편하다.', value: 1 },
      { label: '신경은 조금 쓰이지만 크게 상관없다.', value: 0 },
    ],
  },
  {
    step: 6,
    description: '나에게 누군가 좋아요를 눌렀을 때, 나는',
    data: [
      { label: '그 사람의 피드에 들어가 좋아요를 눌러준다.', value: 1 },
      { label: '피드는 들어가보지만 좋아요는 안누른다.', value: 0 },
    ],
  },
];
