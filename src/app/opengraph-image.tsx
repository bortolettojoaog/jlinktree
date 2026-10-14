import { ImageResponse } from "next/og";
import { OgImageContent, ogImageSize } from "@/lib/og-image";

export const size = ogImageSize;
export const contentType = "image/png";
export const alt = "João G. Bortoletto — Links";

export default function OpengraphImage() {
  return new ImageResponse(<OgImageContent />, size);
}
