/*
একটা ওয়েবসাইট এ একটা input ফিল্ড থাকবে। তার সাথে একটা বাটন থাকবে double নামে। তুমি ইনপুট ফিল্ড এ যদি কোন সংখ্যা লিখো তাহলে নিচে সেই সংখ্যা ডাবল করে দেখাবে। আরেকটা বাটন থাকবে triple নামে। সেটাতে ক্লিক করলে ইনপুট ফিল্ড এ যে সংখ্যা আছে সেটা তিনগুণ হয়ে যাবে। সেই সংখ্যা নিচে দেখাবে। আর যদি ইনপুট ফিল্ড এ সংখ্যা ছাড়া কোন কথা লিখে তাহলে একটা এলার্ট (alert) দিয়ে বলবে Please enter a number। এলার্ট ক্যামনে দেয় সেটা নিয়ে বিস্তারিত অনেকদিন পরে আমরা ই দেখায় দিবো। আপাতত দেখো গুগলে সার্চ দিয়ে কিছু বের করতে পারো কিনা।
*/

// Event on Double Button

document.getElementById('btn-double').addEventListener('click', function () {
    //console.log('Click Double Button');

    const inputField = document.getElementById('input-field');
    const inputValueString = inputField.value;
    const inputValue = parseFloat(inputValueString);
    //console.log(inputValue);

    if (isNaN(inputValue)) {
        alert('Please provide a valid number');
        return;
    }

    const changedDouble = document.getElementById('changed-number');
    const getDoubleValue = changedDouble.innerText;
    //const getDoubleValue = parseFloat(getDoubleValueString) * 2;

    changedDouble.innerText = inputValue * 2;

    inputField.value = '';
})


// Event on Triple Button

document.getElementById('btn-triple').addEventListener('click', function () {
    //console.log('Click Double Button');

    const inputField = document.getElementById('input-field');
    const inputValueString = inputField.value;
    const inputValue = parseFloat(inputValueString);
    //console.log(inputValue);

    if (isNaN(inputValue)) {
        alert('Please provide a valid number');
        return;
    }

    const changedTriple = document.getElementById('changed-number');
    const getTripleValue = changedTriple.innerText;
    //const getDoubleValue = parseFloat(getDoubleValueString) * 2;

    changedTriple.innerText = inputValue * 3;

    inputField.value = '';
})

// Event on Changing Heading

document.getElementById('btn-change-heading').addEventListener('click', function () {
    //console.log('This is clicked for changing heading');

    const existingHeading = document.getElementById('changed-heading');
    const changeHeading = existingHeading.innerText;

    existingHeading.innerText = 'Changed Heading';
})