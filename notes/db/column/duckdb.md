---
title: DuckDB
---

# DuckDB

- [duckdb/duckdb](https://github.com/duckdb/duckdb)
  - MIT, C++
  - 嵌入式 OLAP 数据库
  - 类似 SQLite - 但列存储，面向分析
  - 支持查询 Parquet, CSV
  - 向量引擎，并行查询
  - 官方支持 SDK: Python, Java, C++, NodeJS, R
- 参考
  - [duckdb/duckdb-wasm](https://github.com/duckdb/duckdb-wasm)
    - 在 Web 内执行，基于 FS API 进行 IO 交互

```bash
curl -LO https://github.com/duckdb/duckdb/releases/download/v0.2.7/duckdb_cli-osx-amd64.zip
```

```sql
-- CSV
SELECT * FROM read_csv_auto('test.csv');
-- HEADER=TRUE
-- read_csv_auto -> read_csv(AUTO_DETECT=TRUE)
SELECT * FROM read_csv_auto('test.csv', SAMPLE_SIZE=20000);
-- 导入
CREATE TABLE ontime AS SELECT * FROM read_csv_auto('test.csv');
-- 也可以先创建表再通过 COPY 导入
COPY ontime FROM 'test.csv' ( DELIMITER '|', HEADER, AUTO_DETECT TRUE );

-- PARQUET
SELECT * FROM parquet_scan('test.parquet');
SELECT * FROM 'test.parquet';
-- 多文件
SELECT * FROM parquet_scan('test/*.parquet');
-- 不导入但也提供查询
CREATE VIEW people AS SELECT * FROM parquet_scan('test.parquet');
-- 导入带压缩
COPY tbl TO 'result-zstd.parquet' (FORMAT 'PARQUET', CODEC 'ZSTD')

-- 导出表 - 可以 FORMAT PARQUET
COPY lineitem TO 'lineitem.tbl' ( DELIMITER '|', HEADER );
COPY lineitem(l_orderkey) TO 'orderkey.tbl' ( DELIMITER '|' );
COPY (SELECT 42 AS a, 'hello' AS b) TO 'query.csv' WITH (HEADER 1, DELIMITER ',');

-- 导出数据库
-- 导出到目录
EXPORT DATABASE 'target_directory';
-- 导出 CSV
EXPORT DATABASE 'target_directory' (FORMAT CSV, DELIMITER '|');
-- 导出 parquet 格式
EXPORT DATABASE 'target_directory' (FORMAT PARQUET);
-- 导入
IMPORT DATABASE 'target_directory'
```
