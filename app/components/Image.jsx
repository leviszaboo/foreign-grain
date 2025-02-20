"use client";
import { IKImage } from "imagekitio-next";

const urlEndpoint = process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT;

export default function Image(props) {
  return <IKImage {...props} urlEndpoint={urlEndpoint} />;
}
