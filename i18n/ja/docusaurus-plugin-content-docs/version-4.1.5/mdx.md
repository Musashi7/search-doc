---
id: mdx
title: Powered by MDX
---

[MDX]（https://mdxjs.com/）のおかげで、JSXを記述し、Markdown内でReactコンポーネントを使用できます。

export const Highlight = ({children, color}) => ( <span style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>{children}</span> );

<Highlight color="#25c2a0">Docusaurus green</Highlight>と<Highlight color="#1877F2">Facebook blue</Highlight>が私のお気に入りの色です。

_JSX_と一緒に** Markdown **を書くことができます！