# 아라클래식 홈페이지

클래식 음악 감상과 **곡 이름 음성 안내**, 작곡가와 작품 소개, 플레이리스트, 음악·용어 퀴즈를 소개하는 한국어 홈페이지입니다.

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
- Windows·Mac: 상단에 각 플랫폼 아이콘과 실제 링크 없는 비활성 ‘준비 중’ 버튼을 표시합니다. 광고 없는 100% 무료 데스크톱 제공 방침을 안내합니다.

모바일 링크는 앱 공통 설정의 `iosclassic` / `AndClassic` 단축 URL이 가리키는 스토어 주소를 확인해 직접 연결했습니다. 하단에는 모바일 다운로드가 무료 데스크톱 개발을 응원한다는 안내를 넣었습니다. 각 데스크톱 버전 출시 시 `index.html`의 해당 `.desktop-button`을 실제 다운로드 URL을 가진 링크로 교체하고 준비 중 설명을 함께 갱신합니다.

## 상단 시연 영상과 YouTube 연결

홈페이지를 먼저 완성하고 실제 시연 영상 녹화는 추후 진행하기로 했습니다. 현재 상단에는 ‘시연 영상 준비 중’을 표시하며, 영상 파일은 아직 포함되어 있지 않습니다.

녹화 완료 후 `assets/videos/ara-classic-title-announcement.mp4`를 추가하고 `#demo-video`의 `src`로 연결합니다. 포스터가 있으면 `poster` 속성으로 연결합니다. `.demo-pending`을 제거하고 영상의 `hidden` 및 재생 버튼의 `disabled`를 제거한 뒤 버튼 문구를 ‘소리와 함께 보기’로 바꿉니다. 영상은 사용자가 재생 버튼을 누르면 소리와 함께 재생됩니다.

나중에 YouTube에 업로드한 뒤에는 `index.html`에서 아래 속성에 **영상 URL만** 넣으면 됩니다.

```html
<div class="demo-media" id="demo-media" data-youtube-url="여기에 실제 YouTube 영상 URL">
```

`youtube.com/watch?v=…`, `youtu.be/…`, `youtube.com/shorts/…`, `youtube.com/embed/…` 형식을 지원합니다. 유효한 YouTube 주소이면 같은 자리에 YouTube 플레이어를 표시합니다. 빈 값이나 잘못된 URL이면 기존 로컬 영역을 유지합니다. 유튜브 업로드와 공개 배포는 이 작업에 포함하지 않습니다.

## 구성

- `index.html`: 소개, 작곡가, 기능, 퀴즈 체험, 다운로드, FAQ, 문의
- `assets/css/style.css`: 앱의 아이보리·금색 테마와 반응형 레이아웃
- `assets/js/script.js`: 모바일 메뉴, 음악 용어 퀴즈 1문제, 영상 재생 및 YouTube URL 연결
- `assets/videos/`: 녹화 완료 후 로컬 시연 영상을 넣을 위치
- `assets/images/`: 앱에서 가져온 피아노·아이콘·작곡가 이미지, 참고 홈페이지의 스토어 배너
- `.github/workflows/static.yml`: 참고 저장소와 같은 `master` 기준 GitHub Pages 워크플로. 로컬에서는 실행되지 않습니다.

외부 폰트·CDN·분석 스크립트·패키지 설치 없이 동작합니다. YouTube URL을 설정한 경우에만 해당 영상 플레이어를 불러옵니다. 홈페이지의 플레이리스트는 기능 설명용 예시이며, 퀴즈는 웹에서 직접 풀 수 있는 체험 문제입니다. 음악 스트리밍이나 앱 전체 기능을 홈페이지에 구현한 것은 아닙니다.

## 디자인·에셋 출처

- 디자인 기준: `../../flutter_apps/ara_classic_quiz`의 `lib/constants/app_ui_colors.dart` 및 모바일 화면.
- 배경 `#FAF8F2`, 글자 `#29251E`, 강조 `#896326`, 금색 `#C5A365`.
- `piano-room.png`: 앱의 `assets/images/design/piano_room.png`.
- `ara-classic-icon.png`: 앱의 `assets/icon/app_icon_512.png`.
- 작곡가 사진: 앱의 `assets/images/composers/composer_*.jpg`.
- 스토어 배너: `../multivideoplayer_homepage/assets/images/home/`.

추후 GitHub Pages를 사용하려면 원하는 원격 저장소를 별도로 등록한 뒤, 저장소 Settings → Pages의 Source를 GitHub Actions로 설정합니다. 워크플로는 `index.html`과 `assets/`만 공개 산출물에 복사하며 Git 메타데이터와 문서는 포함하지 않습니다.
