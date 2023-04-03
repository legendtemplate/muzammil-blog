import React from "react";
import Input from "@/components/blog/left/input";
import Author from "@/components/blog/left/author";
import Social from "@/components/blog/left/social";
import Tag from "@/components/blog/left/tag";
import Cat from "@/components/blog/left/cat";
import Slider from "@/components/blog/left/slider";
import Post from "@/components/blog/left/post";
import Form from "@/components/blog/left/form";

export default function index() {
  return (
    <>
      <Input />
      <Author />
      <Social />
      <Tag />
      <Cat />
      <Slider />
      <Post />
      <Form />
    </>
  );
}
