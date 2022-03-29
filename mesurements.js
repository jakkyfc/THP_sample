/**
 *  sample download 
 * 
 */

function dl_mbps(){
    let dl_speed = 0.0;
    dl_speed = Math.random() * 1000.0;
    return dl_speed;
}


/**
 *  sample UpLoad
 */
function ul_mbps(){
    let ul_speed = 0.0;
    ul_speed = Math.random() * 10.0;
    return ul_speed;
}

/**
 *  sample http
 */
function web_sec(){
    let web = 0.0;
    web = Math.random() * 10.0;
    return web;
}


function start(){
    // dl
    let dl = dl_mbps();
    document.querySelector("#dl>.num").innerText = Math.trunc(dl);
    document.querySelector("#dl>.float").innerText = "." + String(Math.trunc((dl - Math.trunc(dl))*100.0));


    // ul
    let ul = ul_mbps();
    document.querySelector("#ul>.num").innerText = Math.trunc(ul);
    document.querySelector("#ul>.float").innerText = "." + String(Math.trunc((ul - Math.trunc(ul))*100.0));


    // web

}

document.getElementById("start_btn").addEventListener("click", start);
