(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{531:function(n,s,e){"use strict";e.r(s);var a=e(21),t=Object(a.a)({},(function(){var n=this,s=n.$createElement,e=n._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("p",[e("strong",[n._v("Mysql日志")]),e("br"),n._v("\nMySQL 的日志包括错误日志（ErrorLog），更新日志（Update Log），二进制日志（Binlog），查询日志（Query Log），慢查询日志（Slow Query Log）等；"),e("br"),n._v("\n更新日志是老版本的MySQL 才有的，目前已经被二进制日志替代；在默认情况下，系统仅仅打开错误日志，关闭了其他所有日志，以达到尽可能减少IO损耗提高系统，"),e("br"),n._v("\n性能的目的，但是在一般稍微重要一点的实际应用场景中，都至少需要打开二进制日志，因为这是MySQL很多存储引擎进行增量备份的基础，也是MySQL实现复制的基本条件；"),e("br"),n._v("\n下面介绍的就是二进制日志–Binlog")]),n._v(" "),e("p",[e("strong",[n._v("Binlog开启")]),e("br"),n._v("\n默认Binlog是关闭的，首先要开启才能记录日志；"),e("br"),n._v("\n1.查看是否开启log_bin")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("mysql> show variables like 'log_bin';\n+---------------+-------+\n| Variable_name | Value |\n+---------------+-------+\n| log_bin       | OFF   |\n+---------------+-------+\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br")])]),e("p",[n._v("2.开启log_bin"),e("br"),n._v("\n在my.ini中添加配置：")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("log_bin=D:/mysql/bin-log.log\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br")])]),e("p",[n._v("3.重启mysql，再次查看")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("mysql> show variables like 'log_bin';\n+---------------+-------+\n| Variable_name | Value |\n+---------------+-------+\n| log_bin       | ON    |\n+---------------+-------+\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br")])]),e("p",[n._v("4.查看Binlog"),e("br"),n._v("\n4.1显示binlog的名称和大小")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("mysql> show binary logs;\n+----------------+-----------+\n| Log_name       | File_size |\n+----------------+-----------+\n| bin-log.000001 |       107 |\n+----------------+-----------+\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br")])]),e("p",[n._v("4.2查看生成的binlog"),e("br"),n._v("\n想用查看到binlog可以往数据库中更新数据库(包括：插入，更新和删除操作)，查询sql是无法生成binlog的")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('mysql> show binlog events;\n+----------------+------+-------------+-----------+-------------+---------------\n------------------------------------------------+\n| Log_name       | Pos  | Event_type  | Server_id | End_log_pos | Info\n                                                |\n+----------------+------+-------------+-----------+-------------+---------------\n------------------------------------------------+\n| bin-log.000001 |    4 | Format_desc |         1 |         107 | Server ver: 5.\n5.29-log, Binlog ver: 4                         |\n| bin-log.000001 |  107 | Query       |         1 |         175 | BEGIN\n                                                |\n| bin-log.000001 |  175 | Intvar      |         1 |         203 | INSERT_ID=9\n                                                |\n| bin-log.000001 |  203 | Query       |         1 |         315 | use `test`; in\nsert into user (age,name) values(100,"zhaohui") |\n| bin-log.000001 |  315 | Xid         |         1 |         342 | COMMIT /* xid=\n41 */                                           |\n+----------------+------+-------------+-----------+-------------+---------------\n------------------------------------------------+\n')])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br"),e("span",{staticClass:"line-number"},[n._v("10")]),e("br"),e("span",{staticClass:"line-number"},[n._v("11")]),e("br"),e("span",{staticClass:"line-number"},[n._v("12")]),e("br"),e("span",{staticClass:"line-number"},[n._v("13")]),e("br"),e("span",{staticClass:"line-number"},[n._v("14")]),e("br"),e("span",{staticClass:"line-number"},[n._v("15")]),e("br"),e("span",{staticClass:"line-number"},[n._v("16")]),e("br"),e("span",{staticClass:"line-number"},[n._v("17")]),e("br"),e("span",{staticClass:"line-number"},[n._v("18")]),e("br"),e("span",{staticClass:"line-number"},[n._v("19")]),e("br")])]),e("p",[e("strong",[n._v("Binlog相关参数")]),e("br"),n._v("\n通过执行如下命令可以获得关于Binlog 的相关参数：")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("mysql> show variables like '%binlog%';\n+-----------------------------------------+----------------------+\n| Variable_name                           | Value                |\n+-----------------------------------------+----------------------+\n| binlog_cache_size                       | 32768                |\n| binlog_direct_non_transactional_updates | OFF                  |\n| binlog_format                           | STATEMENT            |\n| binlog_stmt_cache_size                  | 32768                |\n| innodb_locks_unsafe_for_binlog          | OFF                  |\n| max_binlog_cache_size                   | 18446744073709547520 |\n| max_binlog_size                         | 1073741824           |\n| max_binlog_stmt_cache_size              | 18446744073709547520 |\n| sync_binlog                             | 0                    |\n+-----------------------------------------+----------------------+\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br"),e("span",{staticClass:"line-number"},[n._v("10")]),e("br"),e("span",{staticClass:"line-number"},[n._v("11")]),e("br"),e("span",{staticClass:"line-number"},[n._v("12")]),e("br"),e("span",{staticClass:"line-number"},[n._v("13")]),e("br"),e("span",{staticClass:"line-number"},[n._v("14")]),e("br")])]),e("p",[n._v("1.binlog_cache_size"),e("br"),n._v("\n在事务过程中容纳binlog SQL语句的缓存大小；binlog缓存是服务器支持事务存储引擎并且服务器启用了二进制日志(—log-bin选项)的前提下为每个Session分配的内存；"),e("br"),n._v("\n主要是用来提高binlog的写速度；可以通过MySQL的以下个状态变量来判断当前的binlog_cache_size的状况：Binlog_cache_use和Binlog_cache_disk_use")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("mysql> show status like 'Binlog_cache%';\n+-----------------------+-------+\n| Variable_name         | Value |\n+-----------------------+-------+\n| Binlog_cache_disk_use | 0     |\n| Binlog_cache_use      | 4     |\n+-----------------------+-------+\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br")])]),e("p",[n._v("Binlog_cache_use：使用缓冲区存放binlog的次数"),e("br"),n._v("\nBinlog_cache_disk_use：使用临时文件存放binlog的次数")]),n._v(" "),e("p",[n._v("2.binlog_stmt_cache_size"),e("br"),n._v("\n发生事务时非事务语句的缓存的大小，可以通过MySQL 的以下个状态变量来判断当前的binlog_stmt_cache_size的状况：Binlog_stmt_cache_use和Binlog_stmt_cache_disk_use")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("mysql> show status like 'binlog_stmt_cache%';\n+----------------------------+-------+\n| Variable_name              | Value |\n+----------------------------+-------+\n| Binlog_stmt_cache_disk_use | 0     |\n| Binlog_stmt_cache_use      | 1     |\n+----------------------------+-------+\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br")])]),e("p",[n._v("Binlog_stmt_cache_use：缓冲区存放binlog的次数"),e("br"),n._v("\nBinlog_stmt_cache_disk_use：临时文件存放binlog的次数")]),n._v(" "),e("p",[n._v("3.max_binlog_cache_size"),e("br"),n._v("\n和binlog_cache_size相对应，但是所代表的是binlog能够使用的最大cache内存大小；binlog_cache_size对应的每个Session，max_binlog_cache_size对应所有Session；"),e("br"),n._v("\n当我们执行多语句事务的时候，所有Session的使用的内存超过max_binlog_cache_size的值时，系统可能会报出”Multi-statement transaction required more than ‘max_binlog_cache_size’ bytes of storage”的错误。")]),n._v(" "),e("p",[n._v("4.max_binlog_stmt_cache_size"),e("br"),n._v("\n同max_binlog_cache_size类似，非事务语句binlog能够使用的最大cache内存大小。")]),n._v(" "),e("p",[n._v("5.max_binlog_size"),e("br"),n._v("\nBinlog日志最大值，默认1G，。该大小并不能非常严格控制Binlog大小，尤其是当到达Binlog比较靠近尾部而又遇到一个较大事务的时候，系统为了保证事务的完整性，不可能做切换日志的动作，只能将该事务的所有SQL都记录进入当前日志，直到该事务结束。")]),n._v(" "),e("p",[n._v("6.sync_binlog"),e("br"),n._v("\n同步binlog缓存中数据到磁盘的方式："),e("br"),n._v("\nsync_binlog=0"),e("br"),n._v("\n当事务提交之后，MySQL不做fsync之类的磁盘同步指令刷新binlog_cache中的信息到磁盘，而让Filesystem自行决定什么时候来做同步，或者cache满了之后才同步到磁盘；"),e("br"),n._v("\nsync_binlog=n（区间0-4294967295）"),e("br"),n._v("\n当每进行n次事务提交之后，MySQL将进行一次fsync之类的磁盘同步指令来将binlog_cache中的数据强制写入磁盘；")]),n._v(" "),e("p",[n._v("系统默认设置为0，这种情况下性能最好，风险最大，可能导致binlog_cache中的数据丢失；sync_binlog=1性能最差，风险最小。")]),n._v(" "),e("p",[n._v("7.binlog_format"),e("br"),n._v("\n设置binlog的格式，可选值：STATEMENT, ROW, or MIXED；默认是：STATEMENT"),e("br"),n._v("\n7.1 ROW模式"),e("br"),n._v("\n日志中记录成每一行数据被修改的形式，然后在slave端再对相同的数据进行修改；"),e("br"),n._v("\n在ROW模式下bin-log中可以不记录执行的SQL语句的上下文相关的信息，只需要记录哪条数据被修改成什么样了，不会因为某些语法复制出现问题（比如function，trigger等）；"),e("br"),n._v("\n缺点是每行数据的修改都会记录，最明显的就是update语句，导致更新多少条数据就会产生多少事件，使bin-log文件很大，而复制要网络传输，影响性能。")]),n._v(" "),e("p",[n._v("7.2 STATEMENT模式"),e("br"),n._v("\n每一条修改数据的sql都会被记录到bin-log中，slave端再根据sql语句重现，解决了ROW模式的缺点，不会产生大量是bin-log数据；"),e("br"),n._v("\n缺点是为了让sql能在slave端正确重现，需要记录sql在执行的上下文信息，另外一个问题就是在复制某些特殊的函数或者功能的时候会出现问题，比如sleep()函数。")]),n._v(" "),e("p",[n._v("7.3 MIXED模式"),e("br"),n._v("\n前面两种模式的结合，根据不同的情况分别使用ROW模式和STATEMENT模式。")]),n._v(" "),e("p",[n._v("更多参数详见："),e("a",{attrs:{href:"https://dev.mysql.com/doc/refman/5.7/en/replication-options-binary-log.html",target:"_blank",rel:"noopener noreferrer"}},[n._v("https://dev.mysql.com/doc/refman/5.7/en/replication-options-binary-log.html"),e("OutboundLink")],1)]),n._v(" "),e("p",[e("strong",[n._v("Binlog结构和内容")]),e("br"),n._v("\n日志由一组二进制日志文件（Binlog）,加上一个索引文件（index）；Binlog是一个二进制文件集合，每个Binlog以一个4字节的魔数开头，接着是一组Events；"),e("br"),n._v("\n1.魔数：0xfe62696e对应的是0xfebin；"),e("br"),n._v("\n2.Event：每个Event包含header和data两个部分；header提供了Event的创建时间，哪个服务器等信息，data部分提供的是针对该Event的具体信息，如具体数据的修改；"),e("br"),n._v("\n3.第一个Event用于描述binlog文件的格式版本，这个格式就是event写入binlog文件的格式；"),e("br"),n._v("\n4.其余的Event按照第一个Event的格式版本写入；"),e("br"),n._v("\n5.最后一个Event用于说明下一个binlog文件；"),e("br"),n._v("\n6.Binlog的索引文件是一个文本文件，其中内容为当前的binlog文件列表，比如：")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("D:\\mysql\\bin-log.000001\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br")])]),e("p",[n._v("参考："),e("a",{attrs:{href:"https://dev.mysql.com/doc/internals/en/binary-log-structure-and-contents.html",target:"_blank",rel:"noopener noreferrer"}},[n._v("https://dev.mysql.com/doc/internals/en/binary-log-structure-and-contents.html"),e("OutboundLink")],1)]),n._v(" "),e("p",[e("strong",[n._v("Binlog的Event类型")]),e("br"),n._v("\n官方提供的可能Event类型有36种，具体看下面的枚举：")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("enum Log_event_type { \n  UNKNOWN_EVENT= 0, \n  START_EVENT_V3= 1, \n  QUERY_EVENT= 2, \n  STOP_EVENT= 3, \n  ROTATE_EVENT= 4, \n  INTVAR_EVENT= 5, \n  LOAD_EVENT= 6, \n  SLAVE_EVENT= 7, \n  CREATE_FILE_EVENT= 8, \n  APPEND_BLOCK_EVENT= 9, \n  EXEC_LOAD_EVENT= 10, \n  DELETE_FILE_EVENT= 11, \n  NEW_LOAD_EVENT= 12, \n  RAND_EVENT= 13, \n  USER_VAR_EVENT= 14, \n  FORMAT_DESCRIPTION_EVENT= 15, \n  XID_EVENT= 16, \n  BEGIN_LOAD_QUERY_EVENT= 17, \n  EXECUTE_LOAD_QUERY_EVENT= 18, \n  TABLE_MAP_EVENT = 19, \n  PRE_GA_WRITE_ROWS_EVENT = 20, \n  PRE_GA_UPDATE_ROWS_EVENT = 21, \n  PRE_GA_DELETE_ROWS_EVENT = 22, \n  WRITE_ROWS_EVENT = 23, \n  UPDATE_ROWS_EVENT = 24, \n  DELETE_ROWS_EVENT = 25, \n  INCIDENT_EVENT= 26, \n  HEARTBEAT_LOG_EVENT= 27, \n  IGNORABLE_LOG_EVENT= 28,\n  ROWS_QUERY_LOG_EVENT= 29,\n  WRITE_ROWS_EVENT = 30,\n  UPDATE_ROWS_EVENT = 31,\n  DELETE_ROWS_EVENT = 32,\n  GTID_LOG_EVENT= 33,\n  ANONYMOUS_GTID_LOG_EVENT= 34,\n  PREVIOUS_GTIDS_LOG_EVENT= 35, \n  ENUM_END_EVENT \n  /* end marker */\n};\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br"),e("span",{staticClass:"line-number"},[n._v("10")]),e("br"),e("span",{staticClass:"line-number"},[n._v("11")]),e("br"),e("span",{staticClass:"line-number"},[n._v("12")]),e("br"),e("span",{staticClass:"line-number"},[n._v("13")]),e("br"),e("span",{staticClass:"line-number"},[n._v("14")]),e("br"),e("span",{staticClass:"line-number"},[n._v("15")]),e("br"),e("span",{staticClass:"line-number"},[n._v("16")]),e("br"),e("span",{staticClass:"line-number"},[n._v("17")]),e("br"),e("span",{staticClass:"line-number"},[n._v("18")]),e("br"),e("span",{staticClass:"line-number"},[n._v("19")]),e("br"),e("span",{staticClass:"line-number"},[n._v("20")]),e("br"),e("span",{staticClass:"line-number"},[n._v("21")]),e("br"),e("span",{staticClass:"line-number"},[n._v("22")]),e("br"),e("span",{staticClass:"line-number"},[n._v("23")]),e("br"),e("span",{staticClass:"line-number"},[n._v("24")]),e("br"),e("span",{staticClass:"line-number"},[n._v("25")]),e("br"),e("span",{staticClass:"line-number"},[n._v("26")]),e("br"),e("span",{staticClass:"line-number"},[n._v("27")]),e("br"),e("span",{staticClass:"line-number"},[n._v("28")]),e("br"),e("span",{staticClass:"line-number"},[n._v("29")]),e("br"),e("span",{staticClass:"line-number"},[n._v("30")]),e("br"),e("span",{staticClass:"line-number"},[n._v("31")]),e("br"),e("span",{staticClass:"line-number"},[n._v("32")]),e("br"),e("span",{staticClass:"line-number"},[n._v("33")]),e("br"),e("span",{staticClass:"line-number"},[n._v("34")]),e("br"),e("span",{staticClass:"line-number"},[n._v("35")]),e("br"),e("span",{staticClass:"line-number"},[n._v("36")]),e("br"),e("span",{staticClass:"line-number"},[n._v("37")]),e("br"),e("span",{staticClass:"line-number"},[n._v("38")]),e("br"),e("span",{staticClass:"line-number"},[n._v("39")]),e("br"),e("span",{staticClass:"line-number"},[n._v("40")]),e("br")])]),e("p",[n._v("参考："),e("a",{attrs:{href:"https://dev.mysql.com/doc/internals/en/event-classes-and-types.html",target:"_blank",rel:"noopener noreferrer"}},[n._v("https://dev.mysql.com/doc/internals/en/event-classes-and-types.html"),e("OutboundLink")],1)]),n._v(" "),e("p",[n._v("Event结构官网提供了3个版本，分别是v1，v3，v4："),e("br"),n._v("\nv1：用在MySQL 3.23"),e("br"),n._v("\nv3：用在MySQL 4.0.2-4.1"),e("br"),n._v("\nv4：用在MySQL 5.0之后")]),n._v(" "),e("p",[n._v("现在MySQL的版本基本都使用5.0之后的版本，可以直接看v4，具体如下：")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("+=====================================+\n| event  | timestamp         0 : 4    |\n| header +----------------------------+\n|        | type_code         4 : 1    |\n|        +----------------------------+\n|        | server_id         5 : 4    |\n|        +----------------------------+\n|        | event_length      9 : 4    |\n|        +----------------------------+\n|        | next_position    13 : 4    |\n|        +----------------------------+\n|        | flags            17 : 2    |\n|        +----------------------------+\n|        | extra_headers    19 : x-19 |\n+=====================================+\n| event  | fixed part        x : y    |\n| data   +----------------------------+\n|        | variable part              |\n+=====================================+\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br"),e("span",{staticClass:"line-number"},[n._v("10")]),e("br"),e("span",{staticClass:"line-number"},[n._v("11")]),e("br"),e("span",{staticClass:"line-number"},[n._v("12")]),e("br"),e("span",{staticClass:"line-number"},[n._v("13")]),e("br"),e("span",{staticClass:"line-number"},[n._v("14")]),e("br"),e("span",{staticClass:"line-number"},[n._v("15")]),e("br"),e("span",{staticClass:"line-number"},[n._v("16")]),e("br"),e("span",{staticClass:"line-number"},[n._v("17")]),e("br"),e("span",{staticClass:"line-number"},[n._v("18")]),e("br"),e("span",{staticClass:"line-number"},[n._v("19")]),e("br")])]),e("p",[n._v("名字后面的两个数字表示：offset : length即从第几个字节开始，后面多少个字节用来存放数据"),e("br"),n._v("\n比如：timestamp(0 : 4)表示从第0个字节开始，往后四个字节用来存放timestamp"),e("br"),n._v("\n目前来说x=19，所有extra_headers是空的，y是fixed part的长度，不同的Event长度不一样。")]),n._v(" "),e("p",[n._v("参考："),e("a",{attrs:{href:"https://dev.mysql.com/doc/internals/en/event-structure.html",target:"_blank",rel:"noopener noreferrer"}},[n._v("https://dev.mysql.com/doc/internals/en/event-structure.html"),e("OutboundLink")],1)]),n._v(" "),e("p",[e("strong",[n._v("Event简要分析")]),e("br"),n._v("\n1.从一个最简单的实例来分析其中的Event，包括创建表，插入数据，更新数据，删除数据；binlog_format使用的是默认的STATEMENT；")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("CREATE TABLE `btest` (\n  `id` bigint(20) NOT NULL AUTO_INCREMENT,\n  `age` int(11) DEFAULT NULL,\n  `name` varchar(255) DEFAULT NULL,\n  PRIMARY KEY (`id`)\n) ENGINE=InnoDB DEFAULT CHARSET=utf8\n \ninsert into btest values(1,100,'zhaohui');\nupdate btest set name='zhaohui_new' where id=1;\ndelete from btest where id=1;\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br"),e("span",{staticClass:"line-number"},[n._v("10")]),e("br")])]),e("p",[n._v("2.查看所有的Events")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("show binlog events;\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br")])]),e("p",[e("img",{attrs:{src:"https://static.oschina.net/uploads/space/2017/1110/153425_V7Y6_159239.jpg",alt:""}})]),n._v(" "),e("p",[n._v("上图中一共出现了3中类型的Event，分别是Format_desc，Query和Xid，下面进行简单的分析")]),n._v(" "),e("p",[n._v("2.1Format_desc_Event"),e("br"),n._v("\n官网格式如下：")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("+=====================================+\n| event  | timestamp         0 : 4    |\n| header +----------------------------+\n|        | type_code         4 : 1    | = FORMAT_DESCRIPTION_EVENT = 15\n|        +----------------------------+\n|        | server_id         5 : 4    |\n|        +----------------------------+\n|        | event_length      9 : 4    | >= 91\n|        +----------------------------+\n|        | next_position    13 : 4    |\n|        +----------------------------+\n|        | flags            17 : 2    |\n+=====================================+\n| event  | binlog_version   19 : 2    | = 4\n| data   +----------------------------+\n|        | server_version   21 : 50   |\n|        +----------------------------+\n|        | create_timestamp 71 : 4    |\n|        +----------------------------+\n|        | header_length    75 : 1    |\n|        +----------------------------+\n|        | post-header      76 : n    | = array of n bytes, one byte per event\n|        | lengths for all            |   type that the server knows about\n|        | event types                |\n+=====================================+\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br"),e("span",{staticClass:"line-number"},[n._v("10")]),e("br"),e("span",{staticClass:"line-number"},[n._v("11")]),e("br"),e("span",{staticClass:"line-number"},[n._v("12")]),e("br"),e("span",{staticClass:"line-number"},[n._v("13")]),e("br"),e("span",{staticClass:"line-number"},[n._v("14")]),e("br"),e("span",{staticClass:"line-number"},[n._v("15")]),e("br"),e("span",{staticClass:"line-number"},[n._v("16")]),e("br"),e("span",{staticClass:"line-number"},[n._v("17")]),e("br"),e("span",{staticClass:"line-number"},[n._v("18")]),e("br"),e("span",{staticClass:"line-number"},[n._v("19")]),e("br"),e("span",{staticClass:"line-number"},[n._v("20")]),e("br"),e("span",{staticClass:"line-number"},[n._v("21")]),e("br"),e("span",{staticClass:"line-number"},[n._v("22")]),e("br"),e("span",{staticClass:"line-number"},[n._v("23")]),e("br"),e("span",{staticClass:"line-number"},[n._v("24")]),e("br"),e("span",{staticClass:"line-number"},[n._v("25")]),e("br")])]),e("p",[n._v("使用十六进制方式打开文件bin-log.000001，以下是Format_desc_Event的十六进制代码："),e("br"),n._v(" "),e("img",{attrs:{src:"https://static.oschina.net/uploads/space/2017/1110/153502_9nep_159239.jpg",alt:""}})]),n._v(" "),e("p",[n._v("可以先看前面的4+103=107个字节，4字节是binlog的魔数，103字节是Format_desc_Event，其中有19字节是header；"),e("br"),n._v("\n注:Binlog日志是小端字节顺序"),e("br"),n._v("\n0x5A0504AA四个字节是timestamp；0x0F一个字节表示type_code；0x00000001四个字节为server_id；0x00000067四个字节是event_length，对应的十进制就是103；"),e("br"),n._v("\n0x0000006b四个字节是next_position，即下一个Event的开始位置为107；ox0001两个字节是flags；header总计19字节。"),e("br"),n._v("\ndata总字节数=103-19即84字节，排除掉前面的57个字节，剩余27字节表示post-header lengths for all event types；"),e("br"),n._v("\npost-header lengths：从START_EVENT_V3开始到第27个Event，每个Event的fixed part lengths；"),e("br"),n._v("\nFormat_desc_Event位置是15，可以在图中找到15的位置是0x54，对应十进制是84，即fixed part lengths=84，而这个值刚好是57+27=84，所以Format_desc_Event不存在variable part；")]),n._v(" "),e("p",[n._v("参考："),e("a",{attrs:{href:"https://dev.mysql.com/doc/internals/en/binary-log-versions.html",target:"_blank",rel:"noopener noreferrer"}},[n._v("https://dev.mysql.com/doc/internals/en/binary-log-versions.html"),e("OutboundLink")],1)]),n._v(" "),e("p",[n._v("2.2Query_Event")]),n._v(" "),e("p",[n._v("以下的create table产生的Query_Event的十六进制代码："),e("br"),n._v(" "),e("img",{attrs:{src:"https://static.oschina.net/uploads/space/2017/1110/153525_FY8f_159239.png",alt:""}})]),n._v(" "),e("p",[n._v("header共19字节，0x02一个字节表示type_code（Query_Event=2）;0x00000101四个字节是event_length，对应的十进制就是257（pos=107，End_log_pos=364）;"),e("br"),n._v("\nQuery_Event在post-header的第二个位置0x0d，所有fix part lengths=13；"),e("br"),n._v("\nvariable part=257-19-13=225字节"),e("br"),n._v("\n具体fix data和variable data：")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("+==============================================================+\n| fix    | The ID of the thread                      19 : 4    | \n| data   +-----------------------------------------------------+\n|        | The time in seconds                       23 : 4    |\n|        +-----------------------------------------------------+\n|        | The length of the name of the database    27 : 1    |\n|        +-----------------------------------------------------+\n|        | The error code                            28 : 2    |\n|        +-----------------------------------------------------+\n|        | The length of the status variable block   30 : 2    | \n+==============================================================+\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br"),e("span",{staticClass:"line-number"},[n._v("10")]),e("br"),e("span",{staticClass:"line-number"},[n._v("11")]),e("br")])]),e("p",[n._v("在创建表产生一个Query_Event，insert、update以及delete执行之后分别产生了2个Query_Event和一个Xid_Event。")]),n._v(" "),e("p",[n._v("更多详细："),e("a",{attrs:{href:"https://dev.mysql.com/doc/internals/en/event-data-for-specific-event-types.html",target:"_blank",rel:"noopener noreferrer"}},[n._v("https://dev.mysql.com/doc/internals/en/event-data-for-specific-event-types.html"),e("OutboundLink")],1)]),n._v(" "),e("p",[n._v("2.3Xid_Event")]),n._v(" "),e("p",[n._v("以下的更新数据产生的Xid_Event的十六进制代码：")]),n._v(" "),e("p",[e("img",{attrs:{src:"https://static.oschina.net/uploads/space/2017/1110/153556_EYkZ_159239.jpg",alt:""}})]),n._v(" "),e("p",[n._v("header共19字节，0x10一个字节表示type_code（XID_EVENT=16）;0x0000001b四个字节是event_length，对应的十进制就是27（pos=536，End_log_pos=563）;"),e("br"),n._v("\n2Xid_Event在post-header的第十六个位置0x00，所有fix part lengths=0；"),e("br"),n._v("\nvariable part=27-19=8字节"),e("br"),n._v("\n8字节：The XID transaction number。")]),n._v(" "),e("p",[n._v("insert、update以及delete执行之后分别产生了Xid_Event，事务提交产生的事件。")]),n._v(" "),e("p",[n._v("更多详细："),e("a",{attrs:{href:"https://dev.mysql.com/doc/internals/en/event-data-for-specific-event-types.html",target:"_blank",rel:"noopener noreferrer"}},[n._v("https://dev.mysql.com/doc/internals/en/event-data-for-specific-event-types.html"),e("OutboundLink")],1)]),n._v(" "),e("p",[e("strong",[n._v("总结")]),e("br"),n._v("\n本文主要对Mysql Binlog做了一个大体的介绍，包括：Binlog的参数，格式以及最重要的事件；事件数量比较多，从最简单的增删改查入手，介绍了几个比较常见的事件；"),e("br"),n._v("\n后续会继续学习其他事件，对Binlog有更加详细的了解。")])])}),[],!1,null,null,null);s.default=t.exports}}]);