import React from "react";
import { client } from "../../../libs/sanity.clients";
import imageUrlBuilder from "@sanity/image-url";
const builder = imageUrlBuilder(client);
import Link from 'next/link'
import Image from 'next/image'

interface data {
  poster:string,
  title:string
}

export default function image( props: data ) {
  return (
    <div className="bg-white p-3">
      <div className="image">
        <Image
          src={builder.image(props.poster).url()}
          className="h-full w-full"
          height={999}
          width={999}
          alt={props.title}
          title={props.title}
        />
      </div>
    </div>
  );
}
