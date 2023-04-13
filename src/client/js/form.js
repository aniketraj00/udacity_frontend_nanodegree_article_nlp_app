function isEmpty(inputVal) {
    if(!inputVal || inputVal.trim() === '') return true;
    return false;
}

function isValidURL(url) {
    const urlRegex = new RegExp(/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi);
    if(url.match(urlRegex) === null) return false;
    return true;
}

function handleSubmit(sourceInputType, sourceInputValue) {
    return fetch('/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            sourceType: sourceInputType,
            sourceValue: sourceInputValue
        })
    })
}

export {
    isEmpty,
    isValidURL,
    handleSubmit
}
  