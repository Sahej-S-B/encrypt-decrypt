function xorEncrypt(data, key) {
    let output = '';
    for (let i = 0; i < data.length; i++) {
        output += String.fromCharCode(data.charCodeAt(i) ^ key.charCodeAt(i % key.length));
    }
    return output;
}

function encrypt() {
    const inputText = document.getElementById('inputText').value;
    const key = document.getElementById('key').value;
    
    const encryptedData = xorEncrypt(inputText, key);
    
    const base64Encoded = btoa(encryptedData);
    
    document.getElementById('outputText').value = base64Encoded;
}

function decrypt() {
    const base64Input = document.getElementById('outputText').value;
    const key = document.getElementById('key').value;
    
    const decryptedData = atob(base64Input);
    
    const originalData = xorEncrypt(decryptedData, key);
    
    document.getElementById('outputText').value = originalData;
}
