---
title: 'nginx'
---

**Tencent Cloud deployment project**

1. Install nginx on the server host
2. Apply for a certificate
3. [部署证书](https://cloud.tencent.com/document/product/400/35244)

Example: (The following forwarded interfaces are all ports exposed by docker corresponding services)

```nginx
# For more information on configuration, see:
#   * Official English Documentation: http://nginx.org/en/docs/
#   * Official Russian Documentation: http://nginx.org/ru/docs/

user nginx;
worker_processes auto;
error_log /var/log/nginx/error.log;
pid /run/nginx.pid;

# Load dynamic modules. See /usr/share/doc/nginx/README.dynamic.
include /usr/share/nginx/modules/*.conf;

events {
    worker_connections 1024;
}

http {
    log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for"';

    access_log  /var/log/nginx/access.log  main;

    sendfile            on;
    tcp_nopush          on;
    tcp_nodelay         on;
    keepalive_timeout   65;
    types_hash_max_size 2048;

    include             /etc/nginx/mime.types;
    default_type        application/octet-stream;

    # Load modular configuration files from the /etc/nginx/conf.d directory.
    # See http://nginx.org/en/docs/ngx_core_module.html#include
    # for more information.
    include /etc/nginx/conf.d/*.conf;

#    server {
#        listen       80 default_server;
#        listen       [::]:80 default_server;
#        server_name  _;
#        root         /usr/share/nginx/html;
#
#        # Load configuration files for the default server block.
#        include /etc/nginx/default.d/*.conf;
#
#        location / {
#        }
#
#        error_page 404 /404.html;
#            location = /40x.html {
#        }
#
#        error_page 500 502 503 504 /50x.html;
#            location = /50x.html {
#        }
#    }

# Settings for a TLS enabled server.
#

    server {
        listen 80;
        server_name neoliu.online;
        return 301 https://$host$request_uri;
    }

    server {
        listen       443 ssl;
        server_name  neoliu.online;

        ssl_certificate neoliu.online_bundle.crt;
        ssl_certificate_key neoliu.online.key;
        ssl_session_timeout  5m;
	ssl_protocols TLSv1.2 TLSv1.3;
	ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:HIGH:!aNULL:!MD5:!RC4:!DHE;
        ssl_prefer_server_ciphers on;

        location / {
           # 转发所有请求到本地的 8080 端口
           proxy_pass http://127.0.0.1:90;
           # 以下是一些常用的 proxy_pass 配置选项
           proxy_set_header Host $host;
           proxy_set_header X-Real-IP $remote_addr;
           proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
           proxy_set_header X-Forwarded-Proto $scheme;
        }

        error_page 404 /404.html;
            location = /40x.html {
        }

        error_page 500 502 503 504 /50x.html;
            location = /50x.html {
        }
    }

    server {
        listen       443 ssl;
        server_name  life.neoliu.online;

        ssl_certificate life.neoliu.online_bundle.crt;
        ssl_certificate_key life.neoliu.online.key;
        ssl_session_timeout  5m;
        ssl_protocols TLSv1.2 TLSv1.3;
        ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:HIGH:!aNULL:!MD5:!RC4:!DHE;
        ssl_prefer_server_ciphers on;

        location / {
           # 转发所有请求到本地的 8080 端口
           proxy_pass http://127.0.0.1:91;
           # 以下是一些常用的 proxy_pass 配置选项
           proxy_set_header Host $host;
           proxy_set_header X-Real-IP $remote_addr;
           proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
           proxy_set_header X-Forwarded-Proto $scheme;
        }

        error_page 404 /404.html;
            location = /40x.html {
        }

        error_page 500 502 503 504 /50x.html;
            location = /50x.html {
        }
    }

    server {
        listen       443 ssl;
        server_name  resume.neoliu.online;

        ssl_certificate resume.neoliu.online_bundle.crt;
        ssl_certificate_key resume.neoliu.online.key;
        ssl_session_timeout  5m;
        ssl_protocols TLSv1.2 TLSv1.3;
        ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:HIGH:!aNULL:!MD5:!RC4:!DHE;
        ssl_prefer_server_ciphers on;

        location / {
           # 转发所有请求到本地的 8080 端口
           root html;
	   index index.html index.htm;
        }
    }
}

```
