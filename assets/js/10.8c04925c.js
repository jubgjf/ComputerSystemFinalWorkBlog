(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{370:function(t,e,l){"use strict";l.r(e);var a=l(44),v=Object(a.a)({},(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[l("h1",{attrs:{id:"第1章-概述"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#第1章-概述"}},[t._v("#")]),t._v(" 第1章 概述")]),t._v(" "),l("h2",{attrs:{id:"hello简介"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#hello简介"}},[t._v("#")]),t._v(" Hello简介")]),t._v(" "),l("p",[t._v("hello的初始状态是作为C语言等高级语言源代码hello.c存储在磁盘中。")]),t._v(" "),l("p",[t._v("hello.c经过预处理，删除注释，插入了库函数，成为了hello.i。")]),t._v(" "),l("p",[t._v("hello.i下一步需要经过编译器。编译器进行词法、语法、语义分析，转换成对应的汇编代码，加入了相应的伪指令成为了hello.s。")]),t._v(" "),l("p",[t._v("hello.s经过汇编器，被翻译成可重定位目标程序hello.o，在这个阶段汇编器生成ELF格式的可重定位文件，包含各种重定位条目、符号表、数据段、代码段等区段。")]),t._v(" "),l("p",[t._v("hello.o在链接阶段，加入了各种动态库和静态库的重定位条目，通过链接器，与其他必要的可重定位目标文件、共享库链妾，并对符号进行重定位，最后生成可执行目标文件hello.out。")]),t._v(" "),l("p",[t._v("hello.out程序是静止的，在运行中，hello.out变成了一个进程。Shell 通过fork为hello.out创建新的子进程，接下来通过execve在相应进程上加载运行hello.out程序。")]),t._v(" "),l("p",[t._v("hello.out的运行，需要一定的内存空间空间，Shell调用mmap函数创建新的虚拟内空间，并构建内存映射。")]),t._v(" "),l("p",[t._v("在运行过程中，通过内核和各种硬件如寄存器、CPU、MMU、TLB、三级Cache、四级页表等来进行内存的翻译、访问和加速。")]),t._v(" "),l("p",[t._v("在并行程序的视图中，内核通过上下文切换调度hello。out进程，为hello.out的运行分配时间片，不断切换hello.out和其他进程的运行，看起来好像是在同时运行一样。")]),t._v(" "),l("p",[t._v("当hello.out在运行中出现异常时，内核提供了各种异常处理程序来解决这些问题。hello.out同样页要接受内核发出的各类信号，信号机制帮助hello.out在运行时对外部指令做出反应。")]),t._v(" "),l("p",[t._v("最后，在hello程序结束后，父进程Shell 调用waitpid或wait函数回收hello.out进程，内核释放内存，删除为hello.out创建的所有空间。")]),t._v(" "),l("h2",{attrs:{id:"环境与工具"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#环境与工具"}},[t._v("#")]),t._v(" 环境与工具")]),t._v(" "),l("p",[t._v("Windows 10 dev\nWSLg – Ubuntu 20.04.2\nmake\ngcc\ngdb\nobjdump\nreadelf\nedb")]),t._v(" "),l("h2",{attrs:{id:"中间结果"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#中间结果"}},[t._v("#")]),t._v(" 中间结果")]),t._v(" "),l("p",[t._v("文件结构如下：")]),t._v(" "),l("p",[l("img",{attrs:{src:"image002.png",alt:"图 1 论文所需的文件结构"}})]),t._v(" "),l("p",[t._v("各个文件的说明如下：")]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"center"}},[t._v("文件")]),t._v(" "),l("th",{staticStyle:{"text-align":"center"}},[t._v("说明")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"center"}},[t._v("Makefile")]),t._v(" "),l("td",{staticStyle:{"text-align":"center"}},[t._v("用于make操作")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"center"}},[t._v("hello.c")]),t._v(" "),l("td",{staticStyle:{"text-align":"center"}},[t._v("hello源代码")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"center"}},[t._v("hello.i")]),t._v(" "),l("td",{staticStyle:{"text-align":"center"}},[t._v("gcc -E预处理结果")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"center"}},[t._v("hello.o")]),t._v(" "),l("td",{staticStyle:{"text-align":"center"}},[t._v("gcc -c汇编结果")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"center"}},[t._v("hello.o.objdump")]),t._v(" "),l("td",{staticStyle:{"text-align":"center"}},[t._v("hello.o的反汇编结果")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"center"}},[t._v("hello.out")]),t._v(" "),l("td",{staticStyle:{"text-align":"center"}},[t._v("ld链接结果，可执行文件")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"center"}},[t._v("hello.out.objdump")]),t._v(" "),l("td",{staticStyle:{"text-align":"center"}},[t._v("hello.out的反汇编结果")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"center"}},[t._v("hello.s")]),t._v(" "),l("td",{staticStyle:{"text-align":"center"}},[t._v("gcc -S编译结果")])])])]),t._v(" "),l("h2",{attrs:{id:"本章小结"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#本章小结"}},[t._v("#")]),t._v(" 本章小结")]),t._v(" "),l("p",[t._v("本章简单介绍了 hello 的 p2p，020 过程，列出了本次实验环境、中间结果文件和作用。")])])}),[],!1,null,null,null);e.default=v.exports}}]);