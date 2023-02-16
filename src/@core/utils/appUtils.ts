/* method list

getDate             오늘 날짜를 2022-03-07 형태로 반환
getTimeStamp        현재 시간을 23:15:123 형태로 반환
replaceAll          일치하는 text 모두 변환
cutString           원하는 위치에서 말줄임표를 붙여줌
checkValidity       유효성(null, undefined, length) 체크
checkFileSize       파일 1개의 크기 체크(바이트 단위)
checkUploadFilesSize   파일 한개 혹은 여러개의 크기 체크(바이트 단위)
checkFileTypes       주어진 파일의 확장자 체크
logger              시간을 붙여서 로그 찍음

// getLocaleTimeFromTo       From의 시간 String을 To의 시간으로
// getTimeFromTo       From의 시간 String을 To의 시간 객체로
getUserTime         UTC 시간을 사용자의 timezone 시간 객체로
getDateTimeByFormat 날짜+시간을 원하는 포맷으로 변환해서 반환
getDateFormat       서비스 유형(Format)에 따라 대응되는 국가의 날짜 표시 양식을 반환
getDateDiff         날짜 차이 계산해서 반환
getAddCommaString   숫자에 세 자리 마다 컴마 추가해서 반환

dataURItoBlob       dataURI를 Blob로 변환
dataURLtoFile       dataURI를 File로 변환
getThumbImgFile     이미지 썸네일 생성

// css
rgbToRgba           rgb를 rgba 스트링으로 변환
*/

// 설명:            오늘 날짜를 2022-03-07 형태로 반환
// Arguement:       -
// Return:          2022-03-07 형식의 날짜
export function getDate(): string {
  const date = new Date();
  const year = date.getFullYear(); //yyyy
  let month: number | string = 1 + date.getMonth();
  month = month >= 10 ? month.toString() : "0" + month; //month 두자리로 저장
  let day: number | string = date.getDate(); //d
  day = day >= 10 ? day : "0" + day; //day 두자리로 저장
  return year + "-" + month + "-" + day;
}

// 설명:            현재 시간을 23:15:123 형태로 반환
// Arguement:       -
// Return:          23:15:123 형식의 현재 시간
export function getTimeStamp() {
  const date = new Date();
  const hours = date.getHours(); // 시
  const minutes = date.getMinutes(); // 분
  const seconds = date.getSeconds(); // 초
  const milliseconds = date.getMilliseconds(); // 밀리초

  return (
    hours.toString().padStart(2, "0") +
    ":" +
    minutes.toString().padStart(2, "0") +
    ":" +
    seconds.toString().padStart(2, "0") +
    ":" +
    milliseconds.toString().padStart(3, "0")
  );
}

// 설명:            일치하는 text 모두 변환
// Arguement:       str -> 원본 text, searchStr -> 변경 전 text, replaceStr -> 변경 후 text
// Return:          replaceStr로 모두 변경된 text
export function replaceAll(str: string, searchStr: string, replaceStr: string) {
  return str.split(searchStr).join(replaceStr);
}

// 설명:            원하는 위치에서 말줄임표를 붙여줌
// Arguement:       str -> 원본 text, limit -> 말줄임표를 붙일 제한
// Return:          설정된 글자수로 잘린 후 ...가 붙은 text
export function cutString(str: string, limit: number) {
  let strLength = 0;
  let strTitle = "";
  let strPiece = "";

  for (let i = 0; i < str?.length; i++) {
    const code = str.charCodeAt(i);
    const ch = str.substr(i, 1).toUpperCase();
    strPiece = str.substr(i, 1);
    if (
      (ch < "0" || ch > "9") &&
      (ch < "A" || ch > "Z") &&
      (code > 255 || code < 0)
    ) {
      strLength = strLength + 3; //UTF-8 3byte 로 계산
    } else {
      strLength = strLength + 1;
    }

    if (strLength > limit) {
      //제한 길이 확인
      strTitle = strTitle + "…";
      break;
    } else {
      strTitle = strTitle + strPiece; //제한길이 보다 작으면 자른 문자를 붙여준다.
    }
  }

  return strTitle;
}

// 설명:            유효성(null, undefined, length) 체크
// Arguement:       data -> 검사 대상
// Return:          true -> 유효함, false -> 못써먹음
export function checkValidity(data: any) {
  if (data == null || data == undefined || data.length == 0) return false;
  else return true;
}

// 설명:            파일 용량 체크
// Arguement:       file -> 검사 대상
// Return:          true -> 유효함, false -> 못써먹음
export function checkFileSize(file: File, limitSize: number) {
  // 파일 사이즈가 제한보다 크면 true 아니면 false
  return file.size < limitSize;
}

// 설명:            전체 파일 용량 체크
// Arguement:       files -> 검사 대상, flag -> 개별 파일 검사 유무, checkFunc -> 개별 파일 검사일 때 실행할 함수
// Return:          true -> 유효함, false -> 못써먹음
export function checkUploadFilesSize(
  files: File[],
  limitSize: number,
  limitAllSize: number,
  allCheckFunc?: () => void,
  flag?: boolean,
  checkFunc?: () => void
) {
  let allFileSize = 0;
  for (const file of files) {
    if (flag && !checkFileSize(file, limitSize)) {
      if (checkFunc) checkFunc();
      return false;
    }
    allFileSize += file.size;
  }
  // 파일 사이즈가 제한보다 크면ALL_FILES_SIZE_LIMIT
  if (allFileSize < limitAllSize) return true;
  else {
    if (allCheckFunc) allCheckFunc();
    return false;
  }
}

// 설명:            파일 타입 체크
// Arguement:       file -> 검사 대상, types -> 검사할 확장자들
// Return:          true -> 유효함, false -> 못써먹음
export function checkFileTypes(fileType: string, types: string[]): boolean {
  let flag = false;
  types.forEach((type) => {
    if (fileType.includes(type)) flag = true;
  });
  return flag;
}

// 설명:            시간을 붙여서 로그 찍음
// Arguement:       data -> 로그 내용
// Return:          -
export function logger(...args: any[]) {
  console.log(getTimeStamp(), "---->", args);
}

// 설명:            첫글자를 대문자로 변환
// Arguement:       originalTxt -> 변환하고자 하는 텍스트
// Return:          첫글자가 대문자로 변환된 텍스트
export function makeFirstCharacterUpperCase(originalTxt: string) {
  // 영어 알파벳인지 체크용 정규식
  const EN_pattern = /[a-zA-Z]/;

  if (checkValidity(originalTxt) && EN_pattern.test(originalTxt[0]))
    return (
      originalTxt.slice(0, 0) +
      originalTxt[0].toUpperCase() +
      originalTxt.slice(1)
    );
  else return originalTxt;
}

// 설명:            객체 배열을 key, order로 정렬, key값은 String
// Arguement:       targetArray -> 정렬 대상, key -> 정렬기준, type -> key에 들어 있는 데이터의 종류(string / number), order -> "ASC": 오름차순, "DESC": 내림차순
// Return:          정렬된 배열
export function sortObjectArray(
  targetArray: any[],
  key: string,
  type: any,
  order: string
) {
  log(targetArray.length);
  if (type.toLowerCase() == "string") {
    if (order.toLowerCase() == "asc") {
      targetArray.sort(function (a: any, b: any) {
        console.log(a[key], b[key]);
        // 태그 모두 제거하고 비교
        const x = a[key]
          .toString()
          .toLowerCase()
          .replace(/(<([^>]+)>)/gi, "");
        const y = b[key]
          .toString()
          .toLowerCase()
          .replace(/(<([^>]+)>)/gi, "");
        if (x < y) {
          return -1;
        }
        if (x > y) {
          return 1;
        }
        return 0;
      });
    } else {
      targetArray.sort(function (b: any, a: any) {
        // 태그 모두 제거하고 비교
        const x = a[key]
          .toString()
          .toLowerCase()
          .replace(/(<([^>]+)>)/gi, "");
        const y = b[key]
          .toString()
          .toLowerCase()
          .replace(/(<([^>]+)>)/gi, "");
        if (x < y) {
          return -1;
        }
        if (x > y) {
          return 1;
        }
        return 0;
      });
    }
  } else if (type.toLowerCase() == "number") {
    if (order.toLowerCase() == "asc") {
      targetArray.sort(function (a: any, b: any) {
        return a[key] - b[key];
      });
    } else {
      targetArray.sort(function (b: any, a: any) {
        return a[key] - b[key];
      });
    }
  }
}

// 숫자 배열 오름차순 정렬
export const ascSort = (targetArray: any) => {
  targetArray.sort(function (a: number, b: number) {
    return a - b;
  });

  return targetArray;
};

export function f_strNullCheck(str: unknown): string {
  let newStr = str;

  if (
    newStr === null ||
    newStr === "" ||
    newStr === undefined ||
    newStr === "undefined"
  ) {
    newStr = "";
  }
  return newStr as string;
}

export function f_numNullCheck(str: unknown): number {
  let newStr = str;

  if (
    newStr === null ||
    newStr === "" ||
    newStr === undefined ||
    newStr === "undefined"
  ) {
    newStr = 0;
  }
  return newStr as number;
}

export function f_boolNullCheck(str: unknown): boolean {
  let newStr = str;

  if (
    newStr === null ||
    newStr === "" ||
    newStr === undefined ||
    newStr === "undefined"
  ) {
    newStr = false;
  }
  return newStr as boolean;
}

export function getImgUrlByCardType(cardType: string) {
  if (cardType === "master") return getImgUrl("draft/mastercard-icon.svg");
  else if (cardType === "visa") return getImgUrl("draft/visacard-icon.svg");
}

export function getImgUrl(url: string) {
  return new URL(`../images/${url}`, import.meta.url).href;
}

// 설명:            UTC 시간을 사용자의 timezone 시간 객체로
// Arguement:       timeString -> 시간 String, from -> 변환 전 국가, to -> 변환 후 국가
// Return:          from에서 to로 변환된 시간 객체를 반환
export function getUserTime(UTCString: string, timezone: string) {
  const utcTime = Date.parse(UTCString);

  let hourDiff = 0;
  let minuteDiff = 0;

  if (timezone.substring(3, 4) === "+") {
    hourDiff = hourDiff + parseInt(timezone.substring(4, 6));
    minuteDiff = minuteDiff + parseInt(timezone.substring(7, 9));
  } else {
    hourDiff = hourDiff - parseInt(timezone.substring(4, 6));
    minuteDiff = minuteDiff - parseInt(timezone.substring(7, 9));
  }

  const TIME_DIFF = hourDiff * 60 * 60 * 1000 + minuteDiff * 60 * 1000;
  return new Date(utcTime + TIME_DIFF);
}

// 설명:            날짜+시간을 원하는 포맷으로 변환해서 반환
// Arguement:       format -> 시간 형식, 대소문자 구분함. yyyy:년도, MM: 월, dd: 날짜. 기본은 yyyy-MM-dd HH:mm:ss, time -> Date 객체. 기본은 현재
// Return:          날짜+시간 string
export function getDateTimeByFormat(
  format = "yyyy-MM-dd HH:mm:ss",
  time: Date = new Date()
) {
  if (!time.getFullYear()) return "-";
  const year = time.getFullYear(); //yyyy
  const month = 1 + time.getMonth(); //
  const day = time.getDate(); //dd
  const hours = time.getHours(); //HH
  const minutes = time.getMinutes(); //mm
  const seconds = time.getSeconds(); //ss
  return format
    .replace("yyyy", year.toString())
    .replace("MM", month >= 10 ? month.toString() : "0" + month.toString())
    .replace("dd", day >= 10 ? day.toString() : "0" + day.toString())
    .replace("HH", hours >= 10 ? hours.toString() : "0" + hours.toString())
    .replace(
      "mm",
      minutes >= 10 ? minutes.toString() : "0" + minutes.toString()
    )
    .replace(
      "ss",
      seconds >= 10 ? seconds.toString() : "0" + seconds.toString()
    );
}

// 설명:            서비스 유형에 따라 대응되는 국가의 날짜 표시 양식을 반환
// Arguement:       formatCode -> FORMAT/KIPO 등
// Return:          날짜 양식
export function getDateFormat(formatCode: string) {
  // KIPO하고 JPO는 기본값 사용
  let formatString = "yyyy-MM-dd";
  if (formatCode === "FORMAT/USPTO") formatString = "MM-dd-yyyy";
  else if (formatCode == "FORMAT/EPO") formatString = "dd-MM-yyyy";
  return formatString;
}

// 설명:            날짜 차이 계산
// Arguement:       from, to -> 계산하려는 날짜, format -> 날짜 형식
// Return:          날짜 양식
export function getDateDiff(from: string, to: string, format: string) {
  let fromYear = "";
  let fromMonth = "";
  let fromDay = "";
  let toYear = "";
  let toMonth = "";
  let toDay = "";
  if (format === "yyyy-MM-dd") {
    fromYear = from.substring(0, 4);
    fromMonth = from.substring(5, 7);
    fromDay = from.substring(8, 10);
    toYear = to.substring(0, 4);
    toMonth = to.substring(5, 7);
    toDay = to.substring(8, 10);
  } else if (format === "MM-dd-yyyy") {
    fromYear = from.substring(6, 10);
    fromMonth = from.substring(0, 2);
    fromDay = from.substring(3, 5);
    toYear = to.substring(6, 10);
    toMonth = to.substring(0, 2);
    toDay = to.substring(3, 5);
  } else if (format === "dd-MM-yyyy") {
    fromYear = from.substring(6, 10);
    fromMonth = from.substring(3, 5);
    fromDay = from.substring(0, 2);
    toYear = to.substring(6, 10);
    toMonth = to.substring(3, 5);
    toDay = to.substring(0, 2);
  }
  const fromDate = new Date(fromYear + "-" + fromMonth + "-" + fromDay);
  const toDate = new Date(toYear + "-" + toMonth + "-" + toDay);
  const diffDate = fromDate.getTime() - toDate.getTime();
  const dateDays = Math.abs(diffDate / (1000 * 3600 * 24));
  return dateDays;
}

// 설명:            숫자에 세 자리 마다 컴마 추가해서 반환
// Arguement:       dataURI -> URI 스트링
// Return:          세 자리 마다, 붙은 string
export function getAddCommaString(num: number): string {
  const regexp = /\B(?=(\d{3})+(?!\d))/g;
  return num.toString().replace(regexp, ",");
}

// 설명:            dataURI를 Blob 파일로 변환
// Arguement:       dataURI -> URI 스트링
// Return:          Blob 객체
export function dataURItoBlob(dataURI: string): Blob {
  // convert base64/URLEncoded data component to raw binary data held in a string
  let byteString;
  if (dataURI.split(",")[0].indexOf("base64") >= 0)
    byteString = atob(dataURI.split(",")[1]);
  else byteString = unescape(dataURI.split(",")[1]);

  // separate out the mime component
  const mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];

  // write the bytes of the string to a typed array
  const ia = new Uint8Array(byteString.length);
  for (let i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }

  return new Blob([ia], { type: mimeString });
}

export async function dataURLtoFile(dataurl: string, fileName: string) {
  const arr = dataurl.split(",");
  const mime = arr[0].match(/:(.*?);/)[1];
  const bstr = atob(arr[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);

  while (n--) u8arr[n] = bstr.charCodeAt(n);

  return new File([u8arr], fileName, { type: mime });
}

// 출처: https://uminoh.tistory.com/26?category=1028116
// 설명:            이미지 썸네일 생성
// Arguement:       image -> 변환할 이미지 객체, file -> 변환할 파일 객체
// Return:          Blob 객체
export function getThumbImgFile(image: HTMLImageElement, file: File): File {
  const canvas = document.createElement("canvas");
  const base_size = ONE_KB * 100; //100KB (썸네일 작업 유무 기준 사이즈)
  const comp_size = ONE_KB * 10; //10KB (썸네일 작업 결과물 사이즈, 5~20KB 수준으로 압축됨)
  let width = image.width;
  let height = image.height;
  const size = file.size;

  if (size <= base_size) return file;

  // file size / comp_size 의 제곱근으로 각 너비, 높이를 나눠 압축함
  const ratio = Math.ceil(Math.sqrt(size / comp_size));
  (width = image.width / ratio), (height = image.height / ratio);
  canvas.width = width;
  canvas.height = height;
  canvas.getContext("2d")?.drawImage(image, 0, 0, width, height);
  const blob = dataURItoBlob(canvas.toDataURL("image/png"));
  return new File([blob], file.name, { type: file.type });
}

export function removePTag(data: string) {
  return data ? data.replace(/<(\/?)p>/gi, "") : "";
}

export function removeAllTag(data: string) {
  return data.replace(
    /<(\/)?([a-zA-Z0-9]*)(\s[a-zA-Z0-9]*=[^>]*)?(\s)*(\/)?>/gi,
    ""
  );
}

export function removeNewLine(data: string) {
  return data.replace(/\\n/gi, "");
}

export function makeDocumentText(source: string, gubun: string, data: string) {
  if (gubun === "title")
    return source.concat(
      "<p style='text-indent: 0rem' contentEditable='false'>【",
      data,
      "】</p>"
    );
  else return source.concat("<p>", data, "</p>");
}

// 크롬 확인
export function isChrome() {
  const agent = navigator.userAgent.toLowerCase();
  // console.log(agent);
  let browserName = "";

  if (agent.indexOf("edge") > -1 || agent.indexOf("edg") > -1) {
    browserName = "edge";
  } else if (agent.indexOf("opr") > -1) {
    browserName = "opera";
  } else if (agent.indexOf("samsungbrowser") > -1) {
    browserName = "samsungbrowser";
  } else if (agent.indexOf("daum") > -1) {
    browserName = "Daum";
  } else if (agent.indexOf("naver") > -1) {
    browserName = "NAVER";
  } else if (agent.indexOf("ucbrowser") > -1) {
    browserName = "ucbrowser";
  } else if (agent.indexOf("kakaotalk") > -1) {
    browserName = "kakaotalk";
  } else if (agent.indexOf("line/") > -1) {
    browserName = "linebrowser";
  } else if (agent.indexOf("firefox") > -1) {
    browserName = "firefox";
  } else if (agent.indexOf("msie") > -1 || agent.indexOf("trident") > -1) {
    browserName = "ie";
  } else if (agent.indexOf("chrome") > -1) {
    browserName = "Chrome";
  } else if (agent.indexOf("crios") > -1) {
    browserName = "chrome";
  } else if (agent.indexOf("safari") > -1) {
    browserName = "safari";
  }

  if (browserName === "Chrome" || browserName === "chrome") return true;
  else return false;
}

export function changeAtoThe(source: string) {
  if (source.length < 2) return source;
  else if (source.length >= 2 && source.substring(0, 2).toLowerCase() === "a ")
    return "The " + source.substring(2);
  else if (source.length >= 3 && source.substring(0, 3).toLowerCase() === "an ")
    return "The " + source.substring(3);
  else return source;
}

export function splitDataToClaimsAndDescription(
  source: string,
  claimTitle: string,
  abstractTitle: string
) {
  let claimTxt = "";
  let descriptionTxt = "";
  if (!source.includes(claimTitle)) {
    return ["", ""];
  }

  descriptionTxt = source.substring(0, source.indexOf(claimTitle));
  if (
    source.includes(abstractTitle) &&
    source.indexOf(abstractTitle) > source.indexOf(claimTitle)
  )
    claimTxt = source.substring(
      source.indexOf(claimTitle),
      source.indexOf(abstractTitle)
    );
  else claimTxt = source.substring(source.indexOf(claimTitle));

  return [descriptionTxt, claimTxt];
}

export async function urlToFile(
  url: string,
  filename: string,
  mimeType: string
) {
  const res = await fetch(url);
  const buf = await res.arrayBuffer();
  return new File([buf], filename, { type: mimeType });
}

/**css */
export function rgbToRgba(hex: string, opacity: string): string {
  return `rgba(${parseInt(hex.slice(1, 3), 16)}, ${parseInt(
    hex.slice(3, 5),
    16
  )}, ${parseInt(hex.slice(5, 7), 16)}, ${opacity})`;
}
