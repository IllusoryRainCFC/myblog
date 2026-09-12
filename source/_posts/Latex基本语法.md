---
title: Latex基本语法
date: 2026-08-23
img: /images/淬羽赫默ep.png
categories: Others
tags:
  - 全部
  - 实验
---
>为了下学期的大物实验，不得不开始学Latex了。

``` tex
\documentclass[UTF8]{ctexart} 
% UTF8是编码格式，ctexart是文档类型，ctexart是支持中英文混排。

\usepackage{graphicx} 
% 这是引入一个宏包的语法，这是插入图片的宏包。在正文中需要引入图片时使用\includegraphics[width=0.5\textwidth]{图片的名称，可以省略扩展名}命令。

% 如果要设置图片标题等,需要嵌套结构。
\begin{figure}
	\centering 居中显示
	\includegraphics[width=0.5\textwidth]{图片的名称，可以省略扩展名}
	\caption{图片标题}  
\end{figure}

% 位于\begin{document}前的都是前言preamble，里面可以设置文档的标题、作者、日期、页眉页脚、字体大小、行间距等。
\title{设置文章的标题}
\author{设置作者}
\date{\today} 
% 这是自动生成今天的日期，可以配合\maketitle使用，使用\maketitle会在正文中生成标题、作者、日期。

\begin{document}
% 以\begin{document}开头，\end{document}结尾，中间的内容就是正文内容。
\maketitle

% 常见的文字样式设置。
\textbf{加粗文字}
\textit{设置斜体}
\underline{设置下滑线}

% 注意如果我们要生成一个新的段落，那么需要两下换行符，一个换行符只会生成空格而不会形成新的段落。

% 接下来是如何开启新的章节，使用\section等命令。
\section{这是第一个章节}
我们可以写第一个章节。

	\subsection{开启一个子章节}

		\subsubsection{开启一个子子章节}

\section{这是第二个章节}
% 我们可以写第二个章节。

% 注意编辑书籍时可以使用\chapter和\part等更大的部分命令。大小为part>chapter>section>subsection>subsubsection……

% 接下来介绍latex的环境，位于\begin和\end之间的内容就是环境，它们的文字格式相同。

% 接下来是列表的用法，latex提供了两种列表环境，itemize和enumerate，前者是无序列表，后者是有序列表。

%创建一个无序列表。
\begin{itemize}
	\item 第一项
	\item 第二项
	\item 第三项
\end{itemize}

% 创建一个有序列表。
\begin{enumerate}
	\item 第一项
	\item 第二项
	\item 第三项
\end{enumerate}

% 接下来是latex的最大优势，数学公式的排版。

% latex允许直接添加行内公式，需要这样写，$E=mc^2$

% 如果公式需要单独成行。
\begin{equation}
E=mc^2
\end{equation}

% 也可以简写成这样，其中\[  \]结构就表示中间的是公式。
\[
E=mc^2
\]
% 建议复杂的公式使用在线公式编译器https://latex.codecogs.com/eqneditor/editor.php

% 接下来是表格的用法。

\begin{tabular}{|c|c|c|} 
% 三个c表示三列，c表示居中，l表示左对齐，r表示右对齐。|是竖直方向的边框。
\hline % 表示横向的边框。输入两次就变成双横线。
单元格1&单元格2&单元格3\\
\hline
单元格4&单元格5&单元格6\\
\hline
单元格7&单元格8&单元格9\\ % 分隔是这样写的。
\hline
\end{tabular}

% 与图片类似，如果需要添加标题等，使用嵌套结构。

\begin{table}
\centering 表示居中
	\begin{tabular}{|c|c|c|}
	\hline
	单元格1&单元格2&单元格3\\
	\hline
	单元格4&单元格5&单元格6\\
	\hline
	单元格7&单元格8&单元格9\\
	\hline
	\end{tabular}
\caption{添加标题}
\end{table}
% 如果需要控制表格位置或者图片位置，需引入宏包\usepackage{float}，在\begin{table}后加入[H]。

\end{document}
```
### float宏包的用法
|参数|含义|位置|
|-|-|-|
|h|here|尽量当前位置|
|t|top|页面顶部|
|b|bottom|页面底部|
|p|page|单独的浮动页|
|H|Here|强制当前位置|

### 以下为效果呈现
{% pdf /pdfs/Latex基本语法.pdf %}