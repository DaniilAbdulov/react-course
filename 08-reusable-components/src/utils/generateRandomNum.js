function generateRandomNum(maxNum) {
    let randomNum = (Math.random() * maxNum).toFixed(0);
    return randomNum;
}
export default generateRandomNum;
