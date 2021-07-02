export const Request = async (method, url, req) => {
    let response;
    if(method==='GET'){
        response = await fetch(url);
    } else {
        response = await fetch(url, {
            method,
            body:JSON.stringify(req),
            headers: {'Content-Type': 'application/json'}
        });
    }
    return response.json();
}
