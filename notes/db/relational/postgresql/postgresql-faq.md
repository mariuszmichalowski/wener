---
id: faq
title: 常见问题
tags:
  - FAQ
---

# PostgreSQL FAQ

- [Errors and Messages](https://www.postgresql.org/docs/current/errcodes-appendix.html)

## 限制

- db 名字
  - 最长 63 byte
- 最多 32767 参数占位 - `?` - 范围为 smallint
- https://www.postgresql.org/docs/current/limits.html

## TOAST

- TOAST = The Oversized-Attribute Storage Technique
- 一行 2kB - TOAST_TUPLE_THRESHOLD
  - 超过先尝试压缩到 2kB - TOAST_TUPLE_TARGET
    - 默认 default_toast_compression=pglz, 支持 lz4
    - 可按列设置 COMPRESSION
  - 压缩不足，则分 chunk 存储到关联的 toast 表
- TOAST 使用 oid 跟踪 - 最多 2^32 = 4 十亿 条记录
- 存储
  - PLAIN - 不压缩，无 out-of-line - 超过则异常
  - EXTENDED - 压缩+out-of-line
  - EXTERNAL - out-of-line
  - MAIN - 压缩+尝试尽量不 out-of-line
- 参考
  - [TOAST storage](https://www.postgresql.org/docs/current/storage-toast.html)
  - wiki [TOAST](https://wiki.postgresql.org/wiki/TOAST)

```sql
-- 默认 EXTENDED
ALTER TABLE users SET STORAGE EXTENDED;
-- 修改 TOAST_TUPLE_TARGET
ALTER TABLE users SET (toast_tuple_target = N);
```

## 服务重载

1. pg_ctl

```bash
su postgres
pg_ctl reload
```

2. sql

```bash
psql -U postgres
```

```sql
SELECT pg_reload_conf();
```

3. service

```bash
service postgresql restart
```

## 维护

- [postgres_queries_and_commands.sql](https://gist.github.com/rgreenjr/3637525) - Useful PostgreSQL Queries and Commands

## 升级

- https://www.xf.is/2019/02/26/convert-postgresql-cluster-to-use-page-checksums/
  - `show data_checksums`

可以构造一个包含所有版本的镜像，然后进行升级 - [Dockerfile](https://github.com/postgres/pgadmin4/blob/master/Dockerfile)

```bash
# https://github.com/tianon/docker-postgres-upgrade
docker run --rm \
	-v PGDATAOLD:/var/lib/postgresql/OLD/data \
	-v PGDATANEW:/var/lib/postgresql/NEW/data \
	tianon/postgres-upgrade:OLD-to-NEW
```

```bash
pg_upgrade --old-datadir /var/lib/pgsql/data/ --new-datadir /var/lib/pgsql/10/data/ \
--old-bindir /usr/bin/ --new-bindir /usr/pgsql-10/bin/
```

## Dump

- [pg_dumpall](https://www.postgresql.org/docs/current/app-pg-dumpall.html)
- https://www.postgresql.org/docs/current/app-pgdump.html
- https://www.postgresql.org/docs/current/app-pgrestore.html
- https://www.percona.com/blog/2019/03/27/postgresql-upgrade-using-pg_dump-pg_restore/

```bash
# -Z compress
pg_dump -Fc -Z 9 -j $(nproc) --file=file.dump myDb
pg_restore -Fc -j $(nproc)  file.dump
```

## CTID

https://dba.stackexchange.com/questions/203989/what-is-the-data-type-of-the-ctid-system-column-in-postgres

https://postgresql.verite.pro/blog/2019/04/24/oid-column.html

## 时区问题

- PG 实际存储的是 UTC 不会存储时区
- 时区信息会用于转换

```sql
-- 当前时区
show timezone;
show timezone_abbreviations;
-- 可用时区
SELECT * FROM pg_timezone_names;

-- date 转 tz 应该是正常的
select ('2020-01-02'::date)::TIMESTAMPTZ;

-- session 有效
SET TIME ZONE TO 'UTC';
SET TIMEZONE TO 'UTC';
-- 也可以直接指定 offset
SET timezone=-4;

-- 当前时间
-- UTC 可以使用 localtime
SELECT LOCALTIMESTAMP AT TIME ZONE 'Asia/Shanghai';
-- timestamp 不显示 TZ 信息
SELECT NOW()::TIMESTAMP;
-- current_timestamp 是 timestamptz
-- 可以提取 tz 信息 秒、小时
select current_timestamp,
       pg_typeof(current_timestamp),
       extract(timezone from current_timestamp::timestamptz),
       extract(timezone_h from current_timestamp::timestamptz)
;

-- db 配置
ALTER SYSTEM SET timezone = 'UTC';

-- 修改角色时区
ALTER ROLE my_role SET TIMEZONE = '+1';
```

## NULL 字符 / `\0` 字符

- PG 不允许字符串包含 `\0`
- 传入之前替换或用 bytea 存储
- JSON 也不允许包含空字符

## unsupported Unicode escape sequence

一般是因为 `\u0000`, 替换掉即可, pg 的字符串不支持 `\u0000`

## 切换用户

```sql
set role user;
```

## 切换数据库

- 只能重新链接

## 密码存储

- [pgcrypto](https://www.postgresql.org/docs/current/pgcrypto.html)
- [Hashed Passwords with PostgreSQL's pgcrypto](https://www.meetspaceapp.com/2016/04/12/passwords-postgresql-pgcrypto.html)
- https://stackoverflow.com/questions/15733196/where-2x-prefix-are-used-in-bcrypt

```sql
-- 生成 Hash
select crypt('12345', gen_salt('bf', 8));
-- 判断密码相等
select crypt('12345', password) = password

-- PG 无法处理 2b - 或者插入时修改为 2a
select *
from users
where username = 'admin'
  and  regexp_replace(password,'^[$]2b','$2a') = crypt('admin', regexp_replace(salt,'^[$]2b','$2a'));
```

## Calculating and Saving Space in PostgreSQL

- [Column Tetris](https://stackoverflow.com/a/7431468/1870054)
- [HN](https://news.ycombinator.com/item?id=16471242)
- 每种数据类型都有特定的对齐要求 - [pg-type](https://www.postgresql.org/docs/current/static/catalog-pg-type.html)
- [pg_controldata](https://www.postgresql.org/docs/current/static/app-pgcontroldata.html)
  - 可以获取数据的族群信息
  - Maximum data alignment 显示数据的对齐要求
- [Database Object Size Functions](https://www.postgresql.org/docs/current/static/functions-admin.html#FUNCTIONS-ADMIN-DBSIZE)

```bash
pg_controldata data/
```

```sql
-- 列宽
select pg_column_size('int');
```

```
pg_control version number:            1002
Catalog version number:               201707211
Database system identifier:           6502788473953883273
Database cluster state:               in production
pg_control last modified:             五  3/ 9 12:04:15 2018
Latest checkpoint location:           0/32F8A88
Prior checkpoint location:            0/32DA0D0
Latest checkpoint's REDO location:    0/32F8A50
Latest checkpoint's REDO WAL file:    000000010000000000000003
Latest checkpoint's TimeLineID:       1
Latest checkpoint's PrevTimeLineID:   1
Latest checkpoint's full_page_writes: on
Latest checkpoint's NextXID:          0:730
Latest checkpoint's NextOID:          25609
Latest checkpoint's NextMultiXactId:  1
Latest checkpoint's NextMultiOffset:  0
Latest checkpoint's oldestXID:        548
Latest checkpoint's oldestXID's DB:   1
Latest checkpoint's oldestActiveXID:  730
Latest checkpoint's oldestMultiXid:   1
Latest checkpoint's oldestMulti's DB: 1
Latest checkpoint's oldestCommitTsXid:0
Latest checkpoint's newestCommitTsXid:0
Time of latest checkpoint:            五  3/ 9 12:04:12 2018
Fake LSN counter for unlogged rels:   0/1
Minimum recovery ending location:     0/0
Min recovery ending loc's timeline:   0
Backup start location:                0/0
Backup end location:                  0/0
End-of-backup record required:        no
wal_level setting:                    replica
wal_log_hints setting:                off
max_connections setting:              100
max_worker_processes setting:         8
max_prepared_xacts setting:           200
max_locks_per_xact setting:           64
track_commit_timestamp setting:       off
Maximum data alignment:               8
Database block size:                  8192
Blocks per segment of large relation: 131072
WAL block size:                       8192
Bytes per WAL segment:                16777216
Maximum length of identifiers:        64
Maximum columns in an index:          32
Maximum size of a TOAST chunk:        1996
Size of a large-object chunk:         2048
Date/time type storage:               64-bit integers
Float4 argument passing:              by value
Float8 argument passing:              by value
Data page checksum version:           1
Mock authentication nonce:            32f8310a0cf344f7c1432dd733d3cf6065b748697485724af31fbaf7605f50bc
```

## psql 开启时间记录

- `\timing`

```bash
# 直接命令行使用
psql -c '\timing' -c 'select 1'
```

## 数组索引

GIN 索引是反向索引(inverted indexes), 适用于包含多个值的情况.

- 支持的操作符
  - `<@`
  - `@>`
  - `=`
  - `&&`

## 数组外键

- 不支持

## ERROR: cannot alter type of a column used by a view or rule

必须要先 drop view 再操作, 目前没有比较好的操作方式, 但操作都可以在一个事务中完成

有些修改可以通过直接修改 pg_attribute 来达到目的, 但是非常不建议.

## 时间戳上的毫秒处理

目前没有比较好的处理方式

```sql
-- 将一个毫秒的 ts 转为 timestamp 类型
ALTER TABLE  my_info
  ALTER COLUMN tstmp TYPE TIMESTAMP USING to_timestamp(tstmp / 1000) + ((tstmp % 1000) || ' milliseconds') :: INTERVAL;
```

## 查询语句的最大大小

- 目前为 1G
- [Is there a maximum length constraint for a postgres query?](https://dba.stackexchange.com/q/131399)
- [src/common/psprintf.c#L28](https://github.com/postgres/postgres/blob/REL_10_1/src/common/psprintf.c#L28)

```c
#define MaxAllocSize   ((Size) 0x3fffffff) /* 1 gigabyte - 1 */
```

## IN vs any

- https://stackoverflow.com/a/28995514/1870054
- IN
  - Bitmap 扫描
  - 数据量大时, 执行时间更慢计划时间更久
- ANY
  - 会使用临时表做 JOIN
  - 数据量大时, 执行时间更久计划时间更快

```sql
CREATE TABLE test (
  id  BIGINT GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  val TEXT
);

-- 插入测试数据
DO
$$
BEGIN
  FOR i IN 1..100000 LOOP
    INSERT INTO test (val) VALUES ('val#' || i);
  END LOOP;
END
$$;

EXPLAIN SELECT *
        FROM test
        WHERE id IN (1, 2, 3);

EXPLAIN SELECT *
        FROM test
        WHERE id = ANY (VALUES (1), (2), (3));
```

```
# IN
Bitmap Heap Scan on test  (cost=12.86..19.97 rows=3 width=40)
  Recheck Cond: (id = ANY ('{1,2,3}'::bigint[]))
  ->  Bitmap Index Scan on test_pkey  (cost=0.00..12.86 rows=3 width=0)
        Index Cond: (id = ANY ('{1,2,3}'::bigint[]))

# ANY
Nested Loop  (cost=0.32..25.00 rows=3 width=40)
  ->  HashAggregate  (cost=0.05..0.08 rows=3 width=4)
        Group Key: ""*VALUES*"".column1
        ->  Values Scan on ""*VALUES*""  (cost=0.00..0.04 rows=3 width=4)
  ->  Index Scan using test_pkey on test  (cost=0.28..8.29 rows=1 width=40)
        Index Cond: (id = ""*VALUES*"".column1)
```

```SQL
-- 测试 IN
DO
$$
DECLARE
  x   TEXT = '';
  r   REFCURSOR;
  rec RECORD;
BEGIN
  x = '0';
  FOR i IN 1..1000 LOOP
    x = x || ',' || i;
  END LOOP;
  OPEN r FOR EXECUTE 'EXPLAIN ANALYSE SELECT *
        FROM test
        WHERE id IN (' || x || ')';

  FOR i IN 1..6 LOOP
    FETCH r INTO rec;
    RAISE NOTICE 'ROW %', rec;
  END LOOP;
END
$$;

-- 测试 ANY
DO
$$
DECLARE
  x   TEXT;
  r   REFCURSOR;
  rec RECORD;
BEGIN
  x = '(0)';
  FOR i IN 1..1000 LOOP
    x = x || ',(' || i || ')';
  END LOOP;
  OPEN r FOR EXECUTE 'EXPLAIN ANALYSE SELECT *
        FROM test
        WHERE id = any (VALUES ' || x || ')';

  FOR i IN 1..10 LOOP
    FETCH r INTO rec;
    RAISE NOTICE 'ROW %', rec;
  END LOOP;
END
$$;
```

## 重置 schema

```sql
DROP SCHEMA public CASCADE;
CREATE SCHEMA public;

-- 9.3+ 可能需要
GRANT ALL ON SCHEMA public TO postgres;
GRANT ALL ON SCHEMA public TO public;
```

## psql 使用连接字符串

```bash
psql -Atx "host=localhost port=5432 dbname=taop user=taop" -c 'select current_date'

# -d database
psql -d "host=localhost port=5432 dbname=taop user=taop"
```

## control reached end of trigger procedure without RETURN

使用 trigger 时出现，添加 return null

```sql
create or replace function sync_events_trigger() returns trigger
as
$$
BEGIN
    -- ...
    return null; -- this is important
END;
$$ language plpgsql volatile;
```

## query has no destination for result data

在函数中 select 需要指定输出

- 可以将返回类型指定为 table
- 可以 `select into`
- 可以 返回 `return(select * from tab)`
- 可以使用 perform/execute 如果不想要结果

```sql
CREATE OR REPLACE FUNCTION tst_dates_func()
RETURNS TABLE( v int) as
$$
    select 1;
$$ LANGUAGE sql;

RETURN QUERY (select 1);
RETURN(SELECT dblink_disconnect());

SELECT 1 into result;
RETURN result;

PERFORM select 1;
```

## could not resize shared memory segment "/PostgreSQL.153520683" to 1073812480 bytes: No space left on device

增加 docker 的 shm_size

## set-returning functions are not allowed in UPDATE

- 替换 unnest(array_value) -> `array_value[1]`
- 替换 `(regexp_matches(album, '^6,(?:(.+),)?tv\d+'))[1]` -> `substring (album FROM '^6,(?:(.+),)?tv\d+')`

## Tuning

- https://news.ycombinator.com/item?id=28489340
- https://postgresqlco.nf/
- Why Uber Engineering Switched from Postgres to MySQL - 2016
  - MySQL used as key-value storage layer of homegrown sharded non-relational database
  - https://eng.uber.com/postgres-to-mysql-migration/
    - https://news.ycombinator.com/item?id=17280239
    - https://news.ycombinator.com/item?id=12166585
    - https://news.ycombinator.com/item?id=26283348
  - Postgres better for read heavy
  - MySQL for write heavy
- Pain Point https://pgdash.io/blog/postgresql-six-not-so-easy-pieces.html
- https://sql-info.de/postgresql/postgres-gotchas.html

## Sale Point

- transactional ddl
- JSONB,JSON
- Extension
- Native Array
- window function
- custom type
- MySQL 8
  - atomic ddl - 弱于 transactional ddl
  - window function
  - arbitrary check
  - JSON
- https://sql-info.de/mysql/gotchas.html
- https://fromdual.com/mysql-limitations

## ON CONFLICT DO UPDATE command cannot affect row a second time

1. 插入前进行 dedup
2. CTE 先 select distinct
