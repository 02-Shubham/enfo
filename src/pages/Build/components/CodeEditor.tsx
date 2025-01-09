import React from 'react';
import Editor from "@monaco-editor/react";
import TiltCard from '../../../components/TiltCard';

const CodeEditor = () => {
  const defaultCode = `function fibonacci(n: number): number {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Test the function
console.log(fibonacci(10));`;

  return (
    <TiltCard className="rounded-xl overflow-hidden">
      <Editor
        height="400px"
        defaultLanguage="typescript"
        defaultValue={defaultCode}
        theme="vs-dark"
        options={{
          minimap: { enabled: false },
          fontSize: 14,
          padding: { top: 16 },
        }}
      />
    </TiltCard>
  );
};

export default CodeEditor;