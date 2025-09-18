let num = prompt(),
    Fnum = 0,
    Snum = 1,
    Tnum;
for (let i = 1; i < num; i++) {
    Tnum = Fnum + Snum;
    Fnum = Snum;
    Snum = Tnum;
}
console.log(Fnum);