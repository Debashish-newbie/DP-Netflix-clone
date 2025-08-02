const popupmap = {
    c1: { img: "assets/popupimg/p1.jpeg" },
    c2: { img: "assets/popupimg/p2.jpeg" },
    c3: { img: "assets/popupimg/p3.png" },
    c4: { img: "assets/popupimg/p4.jpeg" },
    c5: { img: "assets/popupimg/p5.jpeg" },
    c6: { img: "assets/popupimg/p6.jpeg" },
    c7: { img: "assets/popupimg/p7.jpeg" },
    c8: { img: "assets/popupimg/p8.jpeg" },
    c9: { img: "assets/popupimg/p9.jpeg" },
    c10: { img: "assets/popupimg/p10.jpeg" },
}



document.querySelectorAll(".card").forEach(function (e) {

    e.addEventListener("click", function () {
        const pid = this.id
        document.body.style.overflow = "hidden";
        document.getElementById("overlay-popup").innerHTML = `<div class="popup">
        <img src="${popupmap[pid].img}" alt="">
        <div id="exit"></div>
    </div>`
        document.getElementById("overlay-popup").style.display = "flex";
        setTimeout(() => {
            document.getElementsByClassName("popup")[0].classList.add("show");
        }, 10);

        document.getElementById("exit").addEventListener("click", function (o) {
            if (o.target === this) {
                document.getElementsByClassName("popup")[0].classList.remove("show");
                setTimeout(() => {
                    document.getElementById("overlay-popup").style.display = "none";
                    document.getElementById("overlay-popup").innerHTML = "";
                    document.body.style.overflow = "auto";
                }, 150)
            }
        })
    })
})



document.getElementById("overlay-popup").addEventListener("click", function (o) {
    if (o.target === this) {
        document.getElementsByClassName("popup")[0].classList.remove("show");
        setTimeout(() => {
            document.getElementById("overlay-popup").style.display = "none";
            document.getElementById("overlay-popup").innerHTML = "";
            document.body.style.overflow = "auto";
        }, 150)
    }
})












const faqlink = {
    q1: "a1",
    q2: "a2",
    q3: "a3",
    q4: "a4",
    q5: "a5",
    q6: "a6",
}
const faq = document.querySelectorAll(".fa");

faq.forEach(function (f) {
    f.addEventListener("click", function () {
        const fid = this.id;
        const answer = document.getElementById(faqlink[fid]);
        const plus = document.querySelector(`#${fid} svg`);





        if (answer.classList.contains("show1")) {
            answer.classList.remove("show1");
        } else {
            answer.classList.add("show1");
        }


        plus.classList.toggle("rot")

    })



})

