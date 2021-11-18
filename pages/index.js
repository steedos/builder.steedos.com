import Head from 'next/head'
import React from 'react';
import { render } from 'react-dom';

import Editor from "@monaco-editor/react";



export default function Home() {
  return (
      <Editor height="80vh"/>
  )
}
