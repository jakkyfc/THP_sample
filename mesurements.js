/**
 *  https://hirooooo-lab.com/development/javascript-sleep/
 * 
 */
 function _sleep(ms){
    let pr = new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
    return pr
}

/**
 *  sample download 
 * 
 */

async function dl_mbps(){
    let dl_speed = 0.0;
    await _sleep(1500);
    dl_speed = Math.random() * 1000.0;
    return dl_speed;
}

/**
 *  sample UpLoad
 */
async function ul_mbps(){
    let ul_speed = 0.0;
    ul_speed = Math.random() * 10.0;
    await _sleep(2000);
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


async function start(){
    // visible progress bar
    let status_tag = document.getElementById("status");
    status_tag.setAttribute("class", "spinner-border");
    status_tag.setAttribute("role", "status");

    // backup h2 tag
    const span_start = status_tag.childNodes[1];
    status_tag.removeChild(span_start);

    // dl
    let dl = await dl_mbps();
    document.querySelector("#dl>.num").innerText = Math.trunc(dl);
    document.querySelector("#dl>.float").innerText = "." + String(Math.trunc((dl - Math.trunc(dl))*100.0));

    // ul
    let ul = await ul_mbps();
    document.querySelector("#ul>.num").innerText = Math.trunc(ul);
    document.querySelector("#ul>.float").innerText = "." + String(Math.trunc((ul - Math.trunc(ul))*100.0));

    // web

    // progress bar
    status_tag.setAttribute("class", "");
    status_tag.setAttribute("role", "");

    // restore h2 tag
    status_tag.appendChild(span_start);
}

document.getElementById("start_btn").addEventListener("click", start);
