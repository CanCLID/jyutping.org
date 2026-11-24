import Alert from "@/components/Alert.astro";
import ContentImage from "@/components/ContentImage.astro";
import InlineLink from "@/components/InlineLink.astro";
import Paragraph from "@/components/Paragraph.astro";
import ProseTable from "@/components/ProseTable.astro";

export const sharedMdxComponents = {
  Alert,
  InlineLink,
  Paragraph,
  img: ContentImage,
  table: ProseTable,
};
