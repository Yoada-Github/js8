function doubleNumbers() {
    for(ele of numbers) {
        console.log(ele*2)
    }
}
const numbers = [3, 5, 8, 9, 4];
doubleNumbers()

Objects = {
    name:"alemu",
    age: 30,
    eyeColor:"green",
    nationality:"Ethipian"
}

function keyValues() {
    for (obj in Objects) {
        console.log(`${obj} : ${Objects[obj]}`)
    }
}
keyValues();

function timeDelayStr() {
    const students = ["almu", "sami", "abel", "biruk"];

    students.forEach((student, index) => {
        setTimeout(() => {
            console.log(student);
        }, index * 1000); // Delays each log by an additional second
    });
}

timeDelayStr();
