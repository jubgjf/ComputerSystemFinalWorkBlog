# 结论

简要hello的生命历程过程，如下：

1. 被编写出来，也就是hello.c的诞生。
2. 预处理，初步处理hello.c将外部库合并到hello.i文件中。
3. 编译，将hello.i编译成hello.s
4. 汇编，将hello.s汇编成hello.o
5. 链接，将hello.o与可重定位目标文件以及动态链接库链接称为可执行程序hello
6. 运行，在shell输入./hello.out 1190200703 管健男 1，即可运行
7. 创建子进程，shell调用fork
8. 运行程序，shell调用execve
9. 执行指令，CPU为hello分配时间片，hello在一个时间片中执行自己的逻辑控制流。
10. 访问内存，MMU将虚拟内存映射成物理地址
11. 动态内存申请，malloc
12. 信号，如果遇到ctrl+c或ctrl+z，则分别停止、挂起
13. 终止，shell父进程回收子进程。

通过课程的学习，我更加深刻地理解了一个简单程序如hello.c详细的生命历程。
