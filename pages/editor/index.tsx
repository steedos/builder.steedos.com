import Head from 'next/head'
import React from 'react';
import { render } from 'react-dom';

import MonacoEditor, { DiffEditor, useMonaco, loader } from "@monaco-editor/react";



// you can change the source of the monaco files
loader.config({ paths: { vs: "/npm/monaco-editor/0.30.1/min/vs" } });


export default function Editor() {
  return (
      <MonacoEditor height="80vh"/>
  )
}
