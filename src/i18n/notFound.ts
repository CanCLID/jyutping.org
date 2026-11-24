import { makeResource } from "@/i18n/utils";

type NotFoundLabels = {
  title: string;
  heading: string;
  message: string;
  backHome: string;
};

export const getNotFoundLabels = makeResource<NotFoundLabels>({
  cmn: {
    title: "找不到頁面",
    heading: "找不到此頁面",
    message: "您造訪的網址可能已變更或不存在。",
    backHome: "返回首頁",
  },
  en: {
    title: "Page Not Found",
    heading: "Page Not Found",
    message: "The page you are looking for does not exist or may have moved.",
    backHome: "Back to Home",
  },
  ja: {
    title: "ページが見つかりません",
    heading: "ページが見つかりません",
    message: "お探しのページは存在しないか、移動された可能性があります。",
    backHome: "ホームに戻る",
  },
  nan: {
    title: "揣無頁面",
    heading: "揣無這个頁面",
    message: "你拜訪的網址可能已經改抑是無存在。",
    backHome: "轉去頭頁",
  },
  vi: {
    title: "Không tìm thấy trang",
    heading: "Không tìm thấy trang",
    message: "Trang bạn đang tìm kiếm không tồn tại hoặc đã được chuyển đi.",
    backHome: "Về trang chủ",
  },
  wuu: {
    title: "尋弗着頁面",
    heading: "尋弗着箇隻頁面",
    message: "儂訪問個網址可能已經改脫或者弗存在。",
    backHome: "回到首頁",
  },
  yue: {
    title: "搵唔到頁面",
    heading: "搵唔到呢個頁面",
    message: "你搵緊嘅網址可能已經搬咗或者唔存在。",
    backHome: "返去首頁",
  },
  yue_hans: {
    title: "揾唔到页面",
    heading: "揾唔到呢个页面",
    message: "你揾紧嘅网址可能已经搬咗或者唔存在。",
    backHome: "返去首页",
  },
});
