# jface

티스토리 블로그 스킨입니다. 해당 스킨은 [티도리 프레임워크](http://www.tidory.com)를 이용해서 만들었습니다.

개인용으로 개발되었으며, 그대로 쓰시건, 수정해서 쓰시건 전부 자유이며, 저는 관여하지 않습니다. 당연하게도 사용 중에 발생한 문제들 역시 저는 관여하지 않습니다.

[스킨 미리보기](https://jrog-test.tistory.com)

## ENV

프로젝트 루트에 `.env` 파일을 만들어서 아래의 변수들을 설정해줄 수 있습니다. 기본적으로 존재하지 않는다면 기본값 혹은 관련 코드들이 무시되도록 설정되어있습니다.

**NAVER_VERIFICATION**

네이버 웹마스터 도구에 사이트 등록을 위한 인증용 메타 태그를 삽입할 때 필요한 변수입니다.

```
# 만약 아래와 같은 식으로 등록하라고 네이버에서 요구할 경우.
<meta name="naver-site-verification" content="123123123123123" />

# .env 파일엔 이렇게 추가하면 됩니다.
NAVER_VERIFICATION=123123123123123
```

