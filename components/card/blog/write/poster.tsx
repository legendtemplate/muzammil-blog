import React from "react";
import { client } from "../../../../libs/sanity.clients";
import imageUrlBuilder from "@sanity/image-url";
const builder = imageUrlBuilder(client);
import Image from 'next/image'
import {ImageT} from '@/types/index'


export default function image( props: ImageT ) {
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
