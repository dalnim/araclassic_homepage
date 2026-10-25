# 아라클래식 홈페이지

클래식 음악 감상, 작곡가와 작품 소개, 플레이리스트, 음악·용어 퀴즈를 소개하는 한국어 홈페이지입니다.

`multivideoplayer_homepage`처럼 빌드 도구 없는 HTML/CSS/JavaScript 정적 사이트로 구성했습니다. 앱 소스와 별개의 **로컬 Git 저장소**이며, 원격 저장소 생성·등록·push·공개 배포는 하지 않았습니다.

## 미리보기

`index.html`을 브라우저에서 직접 열어도 동작합니다. 로컬 서버로 확인하려면:

```sh
cd ~/Documents/workspace/homepages/araclassic_homepage
rtk proxy python3 -m http.server 4173 --bind 127.0.0.1
```

브라우저에서 <http://127.0.0.1:4173>을 엽니다. 서버 종료는 `Ctrl+C`입니다.

## 다운로드 연결

- [iPhone — App Store](https://apps.apple.com/app/id6760468428)
- [Android — Google Play](https://play.google.com/store/apps/details?id=com.araonesoft.araclassicquiz)
- macOS: 개발 중이므로 실제 링크 없는 비활성 ‘준비 중’ 버튼만 표시합니다.

모바일 링크는 앱 공통 설정의 `iosclassic` / `AndClassic` 단축 URL이 가리키는 스토어 주소를 확인해 직접 연결했습니다. 상단과 하단 다운로드 배너가 동일한 앱을 가리킵니다. macOS 출시 시 `index.html`의 두 `.desktop-button`을 실제 다운로드 URL을 가진 링크로 교체하고 준비 중 설명을 함께 갱신합니다.

## 구성

- `index.html`: 소개, 작곡가, 기능, 퀴즈 체험, 다운로드, FAQ, 문의
- `assets/css/style.css`: 앱의 아이보리·금색 테마와 반응형 레이아웃
- `assets/js/script.js`: 모바일 메뉴와 음악 용어 퀴즈 1문제
- `assets/images/`: 앱에서 가져온 피아노·아이콘·작곡가 이미지, 참고 홈페이지의 스토어 배너
- `.github/workflows/static.yml`: 참고 저장소와 같은 `master` 기준 GitHub Pages 워크플로. 로컬에서는 실행되지 않습니다.

외부 폰트·CDN·분석 스크립트·패키지 설치 없이 동작합니다. 홈페이지의 플레이리스트는 기능 설명용 예시이며, 퀴즈는 웹에서 직접 풀 수 있는 체험 문제입니다. 음악 스트리밍이나 앱 전체 기능을 홈페이지에 구현한 것은 아닙니다.

## 디자인·에셋 출처

- 디자인 기준: `../../flutter_apps/ara_classic_quiz`의 `lib/constants/app_ui_colors.dart` 및 모바일 화면.
- 배경 `#FAF8F2`, 글자 `#29251E`, 강조 `#896326`, 금색 `#C5A365`.
- `piano-room.png`: 앱의 `assets/images/design/piano_room.png`.
- `ara-classic-icon.png`: 앱의 `assets/icon/app_icon_512.png`.
- 작곡가 사진: 앱의 `assets/images/composers/composer_*.jpg`.
- 스토어 배너: `../multivideoplayer_homepage/assets/images/home/`.

추후 GitHub Pages를 사용하려면 원하는 원격 저장소를 별도로 등록한 뒤, 저장소 Settings → Pages의 Source를 GitHub Actions로 설정합니다. 워크플로는 `index.html`과 `assets/`만 공개 산출물에 복사하며 Git 메타데이터와 문서는 포함하지 않습니다.
