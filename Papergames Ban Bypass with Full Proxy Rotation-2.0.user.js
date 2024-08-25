// ==UserScript==
// @name         Papergames Ban Bypass with Full Proxy Rotation
// @namespace    github.com/longkidkoolstar
// @version      2.0
// @description  Userscript to randomize fingerprints, block tracking APIs, prevent hardware detection, and rotate proxies to bypass IP detection.
// @author       longkidkoolstar
// @icon         https://i.imgur.com/nxEJksd.png
// @match        https://papergames.io/*
// @grant        none
// @license      MIT
// @downloadURL  https://update.greasyfork.org/scripts/504755/Papergames%20Ban%20Bypass%20with%20Full%20Proxy%20Rotation.user.js
// @updateURL    https://update.greasyfork.org/scripts/504755/Papergames%20Ban%20Bypass%20with%20Full%20Proxy%20Rotation.meta.js
// ==/UserScript==

(function() {
    'use strict';

    // List of proxies
    const proxyList = [
        'socks4://202.40.177.94:5678',
        'http://102.38.31.8:9999',
        'http://41.159.154.43:3128',
        'http://38.10.90.246:8080',
        'http://103.196.28.6:8080',
        'socks5://173.249.7.118:2276',
        'http://103.230.49.132:8080',
        'socks4://201.184.145.210:5678',
        'http://138.121.142.154:8080',
        'http://101.33.252.195:8081',
        'http://79.174.188.153:8080',
        'socks4://49.229.32.165:4153',
        'http://103.181.168.218:8080',
        'socks5://46.10.229.243:7777',
        'http://200.94.102.148:999',
        'http://88.255.65.120:8080',
        'socks4://45.226.83.146:4153',
        'socks5://163.53.204.178:9813',
        'http://103.255.145.62:84',
        'socks4://109.248.236.150:9898',
        'http://217.197.237.74:8080',
        'http://197.232.47.122:8080',
        'http://102.67.101.250:8080',
        'socks5://51.38.50.249:9224',
        'http://103.122.32.10:8080',
        'socks4://185.89.156.130:5678',
        'http://212.252.66.209:8080',
        'socks4://200.80.227.234:4145',
        'http://103.167.171.43:8080',
        'http://103.177.21.9:8080',
        'socks4://122.248.46.26:4145',
        'http://185.191.236.162:3128',
        'socks4://41.162.162.140:4153',
        'http://103.90.156.220:8080',
        'http://110.74.221.48:8080',
        'http://45.230.49.2:999',
        'http://38.52.221.44:999',
        'socks4://80.58.149.246:4145',
        'socks4://202.51.124.166:1080',
        'http://103.122.66.140:1111',
        'http://202.154.18.133:8080',
        'socks4://164.163.21.14:8291',
        'http://222.70.81.82:9000',
        'http://103.132.52.24:8080',
        'socks4://177.91.76.34:4153',
        'socks5://149.129.135.57:6666',
        'http://185.103.26.78:3128',
        'socks4://190.232.89.125:5678',
        'http://81.12.40.250:8080',
        'http://152.169.106.145:8080',
        'http://45.173.12.141:1994',
        'http://120.28.204.19:80',
        'http://202.12.80.14:83',
        'http://103.165.211.174:3128',
        'http://137.59.50.39:8080',
        'socks4://179.97.193.250:4153',
        'http://103.6.223.2:3128',
        'http://115.74.246.138:8080',
        'http://190.52.165.120:8080',
        'http://103.42.120.43:8080',
        'http://94.131.107.45:3128',
        'http://191.102.254.9:8084',
        'socks4://222.212.85.149:5678',
        'socks5://82.165.198.169:1245',
        'socks4://202.84.76.190:5678',
        'socks4://182.53.96.56:4145',
        'http://183.91.80.194:8089',
        'socks4://94.198.221.222:1080',
        'http://109.201.14.82:8080',
        'http://194.117.230.230:3128',
        'socks5://87.117.11.57:1080',
        'socks4://190.3.72.38:3629',
        'http://103.156.140.239:8080',
        'socks4://63.76.255.180:5678',
        'socks4://176.197.144.158:4153',
        'http://179.108.220.184:8080',
        'socks5://81.21.82.116:1080',
        'http://201.77.108.48:999',
        'http://103.234.254.6:7777',
        'socks5://162.144.103.99:2654',
        'http://222.127.135.164:8082',
        'http://206.62.64.34:8080',
        'http://191.242.126.94:8080',
        'http://190.7.138.78:8080',
        'socks4://110.77.149.50:5678',
        'http://64.157.16.43:8080',
        'http://103.107.84.184:8080',
        'socks4://87.126.141.10:4145',
        'socks4://77.77.26.152:4153',
        'socks4://78.128.95.125:4153',
        'http://113.78.190.20:1111',
        'socks5://46.0.203.140:4890',
        'socks4://212.231.197.29:4145',
        'socks4://203.79.29.198:1080',
        'socks4://103.131.8.27:5678',
        'http://14.143.172.238:8080',
        'socks4://125.27.10.84:4153',
        'socks4://103.164.190.221:5430',
        'socks4://183.88.247.52:4153',
        'http://191.240.153.165:8080',
        'socks4://58.75.126.235:4145',
        'socks4://66.42.224.229:41679',
        'socks4://72.195.114.184:4145',
        'socks4://24.249.199.4:4145',
        'socks4://24.249.199.12:4145',
        'socks4://174.77.111.196:4145',
        'socks4://174.64.199.82:4145',
        'socks4://174.64.199.79:4145',
        'socks4://159.192.121.240:4145',
        'socks4://72.195.34.58:4145',
        'socks4://98.162.25.23:4145',
        'socks4://72.206.181.123:4145',
        'socks4://72.206.181.103:4145',
        'socks4://72.217.216.239:4145',
        'socks4://98.170.57.231:4145',
        'socks4://184.178.172.14:4145',
        'socks4://98.175.31.195:4145',
        'socks4://72.195.114.169:4145',
        'socks4://98.188.47.150:4145',
        'socks4://72.210.208.101:4145',
        'socks4://184.181.217.206:4145',
        'socks4://184.178.172.3:4145',
        'socks4://184.178.172.11:4145',
        'socks4://184.178.172.17:4145',
        'socks4://184.181.217.201:4145',
        'socks4://192.111.138.29:4145',
        'socks4://192.111.137.34:18765',
        'socks4://192.111.139.165:4145',
        'socks4://192.111.137.35:4145',
        'socks4://192.111.139.162:4145',
        'socks4://192.252.211.197:14921',
        'socks4://192.111.130.2:4145',
        'socks4://98.170.57.249:4145',
        'socks4://72.195.34.41:4145',
        'socks4://72.210.252.137:4145',
        'socks4://98.162.25.16:4145',
        'socks4://72.210.221.223:4145',
        'socks4://184.185.2.12:4145',
        'socks4://68.71.254.6:4145',
        'socks4://68.71.247.130:4145',
        'socks4://104.37.135.145:4145',
        'socks4://192.252.216.81:4145',
        'socks4://98.181.137.83:4145',
        'socks4://68.1.210.163:4145',
        'socks4://201.174.239.31:4153',
        'socks4://184.170.245.148:4145',
        'socks4://72.37.217.3:4145',
        'socks4://72.37.216.68:4145',
        'socks4://206.220.175.2:4145',
        'socks4://184.170.249.65:4145',
        'socks4://199.58.185.9:4145',
        'socks4://199.229.254.129:4145',
        'socks4://142.54.239.1:4145',
        'socks4://142.54.228.193:4145',
        'socks4://142.54.229.249:4145',
        'socks4://192.111.134.10:4145',
        'socks4://198.8.84.3:4145',
        'socks4://142.54.237.34:4145',
        'socks4://107.152.98.5:4145',
        'socks4://104.200.152.30:4145',
        'socks4://107.181.168.145:4145',
        'socks4://104.200.135.46:4145',
        'socks4://199.102.104.70:4145',
        'socks4://199.102.105.242:4145',
        'socks4://199.102.106.94:4145',
        'socks4://199.102.107.145:4145',
        'socks4://136.228.163.150:5678',
        'socks4://67.201.59.70:4145',
        'socks4://68.1.210.189:4145',
        'socks4://190.104.26.227:33638',
        'socks4://72.217.158.202:4145',
        'socks4://192.252.220.89:4145',
        'socks4://174.75.211.222:4145',
        'socks4://103.140.74.200:5678',
        'socks4://192.162.232.15:1080',
        'socks4://72.195.101.99:4145',
        'socks4://187.17.201.203:38737',
        'socks4://110.77.145.159:4145',
        'socks4://31.42.6.125:5678',
        'socks4://46.98.184.203:5678',
        'socks4://72.214.108.67:4145',
        'socks4://72.217.211.19:4145',
        'socks4://72.217.211.3:4145',
        'socks4://82.165.198.169:36620',
        'socks4://82.165.198.169:35356',
        'socks4://150.95.26.221:59313',
        'socks4://82.165.198.169:41569',
        'socks4://94.23.222.122:50219',
        'socks4://82.165.198.169:8789',
        'socks4://155.254.9.107:5678',
        'socks4://202.162.197.57:4145',
        'socks4://118.97.107.65:5430',
        'socks4://94.23.222.122:61189',
        'socks4://213.136.79.177:50309',
        'socks4://1.179.172.45:31225',
        'socks4://51.75.126.150:27038',
        'socks4://213.136.79.177:11465',
        'socks4://147.124.212.31:35423',
        'socks4://186.167.81.125:64312',
        'socks4://103.184.67.39:1080',
        'socks4://172.105.43.124:13896',
        'socks4://147.124.212.31:41349',
        'socks4://188.165.192.99:58428',
        'socks4://170.80.31.110:60606',
        'socks4://103.147.162.12:1088',
        'socks4://202.131.159.60:5678',
        'socks4://51.75.126.150:44384',
        'socks4://98.191.0.37:4145',
        'socks4://98.191.0.47:4145',
        'socks4://189.127.35.50:60606',
        'socks4://37.187.73.7:21052',
        'socks4://207.180.253.143:37035',
        'socks4://51.75.126.150:54498',
        'socks4://177.74.228.109:60606',
        'socks4://207.180.253.143:50580',
        'socks4://72.202.102.204:1080',
        'socks4://84.247.168.26:41063',
        'socks4://132.148.167.243:25892',
        'socks4://51.75.126.150:22712',
        'socks4://98.170.57.241:4145',
        'socks4://188.165.192.99:4860',
        'socks4://161.97.134.22:62441',
        'socks4://179.127.140.148:60606',
        'socks4://122.129.66.199:1080',
        'socks4://51.75.126.150:16605',
        'socks4://51.75.126.150:45627',
        'socks4://66.228.37.252:48655',
        'socks4://51.75.126.150:55158',
        'socks4://23.158.40.153:59190',
        'socks4://158.255.194.106:5678',
        'socks4://132.148.167.243:18252',
        'socks4://51.75.126.150:29471',
        'socks4://51.75.126.150:63457',
        'socks4://27.76.198.118:1080',
        'socks4://171.250.222.226:1080',
        'socks4://116.99.235.145:24690',
        'socks4://116.99.235.145:30574',
        'socks4://116.99.235.145:30654',
        'socks4://144.217.237.181:47726',
        'socks4://169.239.223.136:52178',
        'socks4://208.65.90.192:4145',
        'socks4://116.99.235.145:30102',
        'socks4://23.158.40.153:54718',
        'socks4://157.15.172.12:80',
        'socks4://122.116.29.68:4145',
        'socks4://208.65.90.21:4145',
        'socks4://45.115.115.37:9090',
        'socks4://171.248.218.244:1080',
        'socks4://185.125.18.9:2374',
        'socks4://50.63.12.101:8091',
        'socks4://184.168.121.153:23807',
        'socks4://144.217.237.182:9561',
        'socks4://103.87.170.70:5678',
        'socks4://116.99.235.145:30414',
        'socks4://1.20.169.142:4145',
        'socks5://72.49.49.11:31034',
        'socks5://208.102.51.6:58208',
        'socks5://69.61.200.104:36181',
        'socks5://192.252.220.92:17328',
        'socks5://192.111.137.37:18762',
        'socks5://192.111.130.5:17002',
        'socks5://192.252.209.155:14455',
        'socks5://192.252.208.70:14282',
        'socks5://192.111.135.17:18302',
        'socks5://192.111.135.18:18301',
        'socks5://192.111.129.145:16894',
        'socks5://192.252.214.20:15864',
        'socks5://192.111.139.163:19404',
        'socks5://72.206.181.97:64943',
        'socks5://98.162.25.4:31654',
        'socks5://98.162.25.7:31653',
        'socks5://98.162.25.29:31679',
        'socks5://174.77.111.198:49547',
        'socks5://98.178.72.21:10919',
        'socks5://184.178.172.28:15294',
        'socks5://70.166.167.55:57745',
        'socks5://198.8.94.170:4145',
        'socks5://74.119.144.60:4145',
        'socks5://199.58.184.97:4145',
        'socks5://142.54.226.214:4145',
        'socks5://142.54.232.6:4145',
        'socks5://142.54.235.9:4145',
        'socks5://199.116.114.11:4145',
        'socks5://142.54.236.97:4145',
        'socks5://162.253.68.97:4145',
        'socks5://70.166.167.38:57728',
        'socks5://184.178.172.13:15311',
        'socks5://72.206.181.105:64935',
        'socks5://198.8.94.174:39078',
        'socks5://199.187.210.54:4145',
        'socks5://31.170.22.127:1080',
        'socks5://45.138.87.238:1080',
        'socks5://23.19.244.109:1080',
        'socks5://108.179.219.56:1520',
        'socks5://208.109.14.49:49871',
        'socks5://94.23.222.122:20657',
        'socks5://51.89.173.40:1723',
        'socks5://94.23.222.122:46064',
        'socks5://82.165.198.169:45928',
        'socks5://82.165.198.169:10960',
        'socks5://82.165.198.169:5534',
        'socks5://82.165.198.169:29548',
        'socks5://94.23.222.122:50925',
        'socks5://82.165.198.169:24161',
        'socks5://82.165.198.169:20259',
        'socks5://208.109.14.49:5867',
        'socks5://94.23.222.122:24360',
        'socks5://82.165.198.169:48285',
        'socks5://82.165.198.169:30474',
        'socks5://82.165.198.169:18884',
        'socks5://82.165.198.169:41179',
        'socks5://82.165.198.169:26259',
        'socks5://82.165.198.169:11818',
        'socks5://51.68.230.210:62164',
        'socks5://82.165.198.169:10610',
        'socks5://161.97.163.52:58864',
        'socks5://117.68.38.182:20681',
        'socks5://213.136.79.177:14588',
        'socks5://5.39.69.35:41108',
        'socks5://5.39.69.35:16220',
        'socks5://5.39.69.35:46544',
        'socks5://178.128.82.105:52917',
        'socks5://51.89.21.99:59584',
        'socks5://117.68.38.179:30510',
        'socks5://51.75.126.150:40372',
        'socks5://94.23.222.122:63163',
        'socks5://188.165.192.99:42457',
        'socks5://185.82.218.146:1080',
        'socks5://51.89.21.99:41624',
        'socks5://178.17.170.76:1080',
        'socks5://164.68.103.43:50073',
        'socks5://146.70.149.46:1080',
        'socks5://51.89.21.99:27953',
        'socks5://51.75.126.150:12907',
        'socks5://46.229.93.74:1088',
        'socks5://46.105.105.223:29489',
        'socks5://64.6.254.91:49796',
        'socks5://188.165.192.99:34361',
        'socks5://82.223.165.28:15043',
        'socks5://142.93.153.53:11862',
        'socks5://51.75.126.150:45642',
        'socks5://165.227.196.37:57346',
        'socks5://188.165.192.99:5430',
        'socks5://207.180.253.143:4829',
        'socks5://190.202.37.225:80',
        'socks5://54.38.179.162:24698',
        'socks5://91.121.153.11:61442',
        'socks5://132.148.167.243:14836',
        'socks5://51.75.126.150:46897',
        'socks5://128.199.183.41:21584',
        'socks5://92.205.110.118:30303',
        'socks5://51.75.126.150:35040',
        'socks5://132.148.167.243:21045',
        'socks5://94.23.222.122:14665',
        'socks5://161.97.163.52:58498',
        'socks5://45.61.188.134:44499',
        'socks5://161.97.173.42:40280',
        'socks5://51.75.126.150:39649',
        'socks5://188.165.192.99:40240',
        'socks5://51.89.21.99:59948',
        'socks5://37.187.73.7:14309',
        'socks5://37.187.73.7:44420',
        'socks5://51.75.126.150:22686',
        'socks5://109.123.254.43:40682',
        'socks5://82.165.198.169:34211',
        'socks5://82.165.198.169:39945',
        'socks5://163.172.140.109:16379',
        'socks5://51.75.126.150:49902',
        'socks5://166.0.234.61:31760',
        'socks5://108.179.220.170:18030',
        'socks5://82.165.198.169:36613',
        'socks5://109.123.254.43:43621',
        'socks5://82.165.198.169:40241',
        'socks5://51.75.126.150:24464',
        'socks5://50.63.12.101:24528',
        'socks5://82.165.198.169:52527',
        'socks5://148.72.210.123:59340',
        'socks5://51.75.126.150:20906',
        'socks5://132.148.128.88:33103',
        'socks5://51.75.126.150:50024',
        'socks5://148.72.210.123:24515',
        'socks5://161.97.170.209:48912',
        'socks5://132.148.129.254:33103',
        'socks5://50.63.12.101:60475',
        'socks5://66.29.128.246:59743',
        'socks5://152.228.254.53:53200',
        'socks5://58.241.109.187:20147',
        'socks5://117.68.38.142:39116',
        'socks5://124.227.14.147:7302',
        'socks5://188.165.223.183:38047',
        'socks5://194.195.122.51:1080',
        'socks5://157.230.82.155:55301',
        'socks5://161.97.170.209:47616',
        'socks5://152.228.254.53:27254',
        'socks5://39.187.67.226:1080',
        'socks5://103.152.232.60:8199',
        'socks5://65.169.38.73:26592',
        'socks5://108.181.132.117:45054',
        'socks5://164.92.86.113:55228',
        'socks5://162.0.220.218:54084',
        'socks5://184.168.121.153:42532',
        'socks5://212.83.142.149:42483',
        'socks5://162.19.7.49:34147',
        'socks5://162.0.220.219:55777',
        'socks5://66.228.35.209:6718',
        'socks5://171.245.14.125:20017',
        'socks5://116.107.232.189:20017',
        'socks5://171.245.12.88:20017',
        'socks5://209.159.153.20:11928',
        'socks5://209.159.153.21:35774',
        'socks5://212.83.143.211:15929',
        'socks5://174.138.176.76:17319',
        'socks5://198.12.253.179:44394',
        'socks5://138.201.21.238:21850',
        'socks5://171.245.14.125:20028',
        'socks5://212.83.138.172:30456',
        'socks5://108.181.132.116:62147',
        'socks5://162.0.220.216:14419',
        'socks5://66.29.128.246:23753'
    ];

    // Function to select a random proxy
    function getRandomProxy() {
        const randomIndex = Math.floor(Math.random() * proxyList.length);
        return proxyList[randomIndex];
    }

    // Apply the selected proxy to the fetch requests
    const originalFetch = window.fetch;
    window.fetch = function(resource, init) {
        const proxy = getRandomProxy();
        console.log(`Using proxy: ${proxy}`);

        // Modify init to route through proxy
        if (!init) init = {};
        init.headers = {
            ...init.headers,
            'X-Proxy-URL': proxy // Custom header or use proxy directly based on implementation
        };

        // Additional setup if required to make proxy work (e.g., setting up a proxy tunnel)

        return originalFetch(resource, init);
    };

    // User-Agent randomization
    setTimeout(() => {
        const userAgentList = [
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36',
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.3 Safari/605.1.15',
            'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:93.0) Gecko/20100101 Firefox/93.0',
            'Mozilla/5.0 (iPhone; CPU iPhone OS 15_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.2 Mobile/15E148 Safari/604.1'
        ];
        const randomUserAgent = userAgentList[Math.floor(Math.random() * userAgentList.length)];
        Object.defineProperty(navigator, 'userAgent', {
            get: function() { return randomUserAgent; }
        });
    }, 500);

    // Spoof Screen Resolution with added randomness
    const fakeScreenWidth = Math.floor(Math.random() * (1920 - 800 + 1) + 800);
    const fakeScreenHeight = Math.floor(Math.random() * (1080 - 600 + 1) + 600);
    Object.defineProperty(window.screen, 'width', {
        get: function() { return fakeScreenWidth; }
    });
    Object.defineProperty(window.screen, 'height', {
        get: function() { return fakeScreenHeight; }
    });

    // Introduce noise to Canvas Fingerprinting rather than blocking
    const originalToDataURL = HTMLCanvasElement.prototype.toDataURL;
    HTMLCanvasElement.prototype.toDataURL = function(type) {
        console.log("Canvas toDataURL modified.");
        return originalToDataURL.call(this, type).replace("A", "B"); // simple noise
    };

    const originalGetImageData = CanvasRenderingContext2D.prototype.getImageData;
    CanvasRenderingContext2D.prototype.getImageData = function(x, y, width, height) {
        console.log("Canvas getImageData modified.");
        const imageData = originalGetImageData.call(this, x, y, width, height);
        for (let i = 0; i < imageData.data.length; i += 4) {
            imageData.data[i] = imageData.data[i] ^ 0xff; // invert red channel as noise
        }
        return imageData;
    };

    // Add noise to WebGL Fingerprinting
    const getParameter = WebGLRenderingContext.prototype.getParameter;
    WebGLRenderingContext.prototype.getParameter = function(parameter) {
        if (parameter === 37446 || parameter === 37447) {
            console.log("WebGL parameter modified.");
            return "Modified" + Math.random().toString(36).substring(7);
        }
        return getParameter.call(this, parameter);
    };

    // Block Hardware Information Detection
    Object.defineProperty(navigator, 'hardwareConcurrency', {
        get: function() { return 4; } // Spoof CPU cores count
    });

    Object.defineProperty(navigator, 'deviceMemory', {
        get: function() { return 8; } // Spoof device memory in GB
    });

    Object.defineProperty(WebGLRenderingContext.prototype, 'getShaderPrecisionFormat', {
        value: function() {
            return { rangeMin: 127, rangeMax: 127, precision: 23 }; // Spoof GPU shader precision
        }
    });

    // Clear cookies and local storage on page load
    window.addEventListener('load', function() {
        console.log('Clearing specific cookies and local storage.');
        const cookieWhitelist = ['session_id', 'auth_token']; // cookies to keep
        document.cookie.split(";").forEach(function(c) {
            const cookieName = c.trim().split("=")[0];
            if (!cookieWhitelist.includes(cookieName)) {
                document.cookie = cookieName + "=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/";
            }
        });

        // Clear local storage except for specific keys
        const keysToKeep = ['user'];
        const keys = Object.keys(localStorage);
        keys.forEach(key => {
            if (!keysToKeep.includes(key)) {
                localStorage.removeItem(key);
            }
        });

        sessionStorage.clear();
    });

})();