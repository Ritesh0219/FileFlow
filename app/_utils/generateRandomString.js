export const generateRandomString = ()=>{
    const characters = 'ABCEDFGHIJKLMNOPQRSTUVWXYZ';
    const length = 4;
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

