# Introduction

The purpose of this project is to automate our daily operations and checks on Huawei Cloud.


## How to configure

Create a file `.env`:
```env
PORT=3000

SDK_AK=<please input>
SDK_SK=<please input>

PROJECT_ID=<please input>

BANDWIDTH_ID=<please input>
BANDWIDTH_FILTER=average
BANDWIDTH_PERIOD=300

# don not set too low
BANDWIDTH_INTERVAL=30
```

## How to build & Run

### Local Debug

Install
```
npm install
```

Run
```
npm run test
```

### Docker

Build
```
docker build -t huawei_exporter .
```
Run
```
docker run --env-file .env -p 3000:3000 huawei_exporter
```

# Metrics


| metrics name | description |
|---|---|
| percent_huawei_upstream_bandwidth_usage | the usage of upstream bandwidth in percentage |
| percent_huawei_downstream_bandwidth_usage | the usage of downstream bandwidth in percentage |


# Reference

https://github.com/huaweicloud/huaweicloud-sdk-nodejs-v3